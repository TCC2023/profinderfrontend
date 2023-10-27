const {json} = require("express");
const db = require("../database/connection");

module.exports = {
    async listarTipoServico(request, response){
        try{
            const sql = 'SELECT tipoServId, tipoServDescricao from tbTipoServico'; 
            const tipoServicos = await db.query(sql);
            return response.status(200).json(tipoServicos[0]);
        } catch(error){
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },

    async cadastrarTipoServico(request, response){
        try{
            const  { tipoServDescricao } = request.body;
            const sql = 'INSERT INTO tbTipoServico (tipoServDescricao) VALUES (?);';
            const values = [tipoServDescricao];
            const confirmacao = await db.query(sql, values);
            const tipoServId = confirmacao[0].insertId;
            return response.status(200).json({confirma: 'Sucesso', message: tipoServId});
        } catch(error){
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },

    async editarTipoServico(request, response){
        try{
            const {tipoServDescricao} = request.body;
            const {tipoServId} = request.params;
            const sql = 'UPDATE tbTipoServico SET tipoServDescricao = ? WHERE tipoServId = ?;';
            const values = [tipoServDescricao, tipoServId];
            const atualizacao = await db.query(sql, values);
            return response.status(200).json({confirma: 'Sucesso', message: 'Dados Atualizados'});
        } catch(error){
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },

    async excluirTipoServico(request, response){
        try{
            const { tipoServId } = request.params;
            const sql = 'DELETE FROM tbTipoServico WHERE tipoServId = ?';
            const values = [tipoServId];
            await db.query(sql, values);
            return response.status(200).json({confirma: 'Sucesso', message:'Tipo de Serviço com id '+ tipoServId + 'excluido com sucesso'});
        } catch(error){
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },
}