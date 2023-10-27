const {json} = require("express");
const db = require("../database/connection");

module.exports = {
    async listarClientes(request, response){
        try{
            const sql = 'SELECT usuarioId, clienteCPF from tbClientes'; 
            const Clientes = await db.query(sql);
            return response.status(200).json(Clientes[0]);
        } catch(error){
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },

    async cadastrarClientes(request, response){
        try{
            const  {clienteCPF } = request.body;
            const sql = 'INSERT INTO tbClientes (clienteCPF) VALUES ( ? );';
            const values = [clienteCPF];
            const confirmacao = await db.query(sql, values);
            const usuarioId = confirmacao[0].insertId;
            return response.status(200).json({confirma: 'Sucesso', message: usuarioId});
        } catch(error){
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },

    async editarClientes(request, response){
        try{
            const {clienteCPF} = request.body;
            const {usuarioId} = request.params;
            const sql = 'UPDATE tbUsuarios SET clienteCPF = ? WHERE usuarioId = ?;';
            const values = [clienteCPF, usuarioId];
            const atualizacao = await db.query(sql, values);
            return response.status(200).json({confirma: 'Sucesso', message: 'Dados Atualizados'});
        } catch(error){
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },

    async excluirClientes(request, response){
        try{
            const { usuarioId } = request.params;
            const sql = 'DELETE FROM tbUsuarios WHERE usuarioId = ?';
            const values = [usuarioId];
            await db.query(sql, values);
            return response.status(200).json({confirma: 'Sucesso', message:'Cliente com id '+ usuarioId + 'excluido com sucesso'});
        } catch(error){
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },
}