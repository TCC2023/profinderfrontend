const {json} = require("express");
const db = require("../database/connection");

module.exports = {
    async listarPrestadores(request, response){
        try{
            const sql = 'SELECT usuarioid, prestadorEmpresa, prestadorCPFCNPJ, prestadorRGIE from tbPrestadores'; 
            const Prestadores = await db.query(sql);
            return response.status(200).json(Prestadores[0]);
        } catch(error){
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },

    async cadastrarPrestadores(request, response){
        try{
            const  {prestadorEmpresa, prestadorCPFCNPJ, prestadorRGIE } = request.body;
            const sql = 'INSERT INTO tbPrestadores (prestadorEmpresa, prestadorCPFCNPJ, prestadorRGIE) VALUES (?, ?, ?);';
            const values = [prestadorEmpresa, prestadorCPFCNPJ, prestadorRGIE];
            const confirmacao = await db.query(sql, values);
            const usuarioId = confirmacao[0].insertId;
            return response.status(200).json({confirma: 'Sucesso', message: usuarioId});
        } catch(error){
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },

    async editarPrestadores(request, response){
        try{
            const {prestadorEmpresa, prestadorCPFCNPJ, prestadorRGIE} = request.body;
            const {usuarioId} = request.params;
            const sql = 'UPDATE tbPrestadores SET prestadorEmpresa = ?, prestadorCPFCNPJ = ?, prestadorRGIE = ? WHERE usuarioId = ?;';
            const values = [prestadorEmpresa, prestadorCPFCNPJ, prestadorRGIE, usuarioId];
            const atualizacao = await db.query(sql, values);
            return response.status(200).json({confirma: 'Sucesso', message: 'Dados Atualizados'});
        } catch(error){
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },

    async excluirPrestadores(request, response){
        try{
            const { usuarioId } = request.params;
            const sql = 'DELETE FROM tbUsuarios WHERE usuarioId = ?';
            const values = [usuarioId];
            await db.query(sql, values);
            return response.status(200).json({confirma: 'Sucesso', message:'Prestador com id '+ usuarioId + 'excluido com sucesso'});
        } catch(error){
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },
}