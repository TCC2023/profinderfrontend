const {json} = require("express");
const db = require("../database/connection");

module.exports = {
    async listarServicos(request, response){
        try{
            const sql = 'SELECT servicoId, usuarioId, tipoServId, servicoDesc, servicoValor from tbServicos'; 
            const Servicos = await db.query(sql);
            return response.status(200).json(Servicos[0]);
        } catch(error){
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },

    async cadastrarServicos(request, response){
        try{
            const  { usuarioId, tipoServId, servicoDesc, servicoValor } = request.body;
            const sql = 'INSERT INTO tbServicos ( usuarioId, tipoServId, servicoDesc, servicoValor ) VALUES ( ?, ?, ?, ? );';
            const values = [ usuarioId, tipoServId, servicoDesc, servicoValor];
            const confirmacao = await db.query(sql, values);
            const servicoId = confirmacao[0].insertId;
            return response.status(200).json({confirma: 'Sucesso', message: servicoId});
        } catch(error){
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },

    async editarServicos(request, response){
        try{
            const {usuarioId, tipoServId, servicoDesc, servicoValor} = request.body;
            const {servicoId} = request.params;
            const sql = 'UPDATE tbServicos SET usuarioId = ?, tipoServId = ?, servicoDesc = ?, servicoValor = ? WHERE servicoId = ?;';
            const values = [usuarioId, tipoServId, servicoDesc, servicoValor, servicoId];
            const atualizacao = await db.query(sql, values);
            return response.status(200).json({confirma: 'Sucesso', message: 'Dados Atualizados'});
        } catch(error){
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },

    async excluirServicos(request, response){
        try{
            const { servicoId } = request.params;
            const sql = 'DELETE FROM tbServicos WHERE servicoId = ?';
            const values = [servicoId];
            await db.query(sql, values);
            return response.status(200).json({confirma: 'Sucesso', message:'Serviço com id '+ servicoId + 'excluido com sucesso'});
        } catch(error){
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },
}
