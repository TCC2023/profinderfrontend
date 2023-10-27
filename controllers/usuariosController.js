const {json} = require("express");
const db = require("../database/connection");

module.exports = {
    async listarUsuarios(request, response){
        try{
            const sql = 'SELECT usuarioId, usuarioNome, usuarioEmail, usuarioSenha, usuarioTelefone, usuarioDataNasc, usuarioTipoConta from tbUsuarios'; 
            const Usuarios = await db.query(sql);            
            return response.status(200).json(Usuarios[0]);
        } catch(error){
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },

    async cadastrarUsuarios(request, response){
        try{
            const  {usuarioNome, usuarioEmail, usuarioSenha, usuarioTelefone, usuarioDataNasc, usuarioTipoConta } = request.body;
            const sql = 'INSERT INTO tbUsuarios (usuarioNome, usuarioEmail, usuarioSenha, usuarioTelefone, usuarioDataNasc, usuarioTipoConta) VALUES (?, ?, ?, ?, ?, ?);';
            const values = [usuarioNome, usuarioEmail, usuarioSenha, usuarioTelefone, usuarioDataNasc, usuarioTipoConta];
            const confirmacao = await db.query(sql, values);
            const usuarioId = confirmacao[0].insertId;
            return response.status(200).json({confirma: 'Sucesso', message: usuarioId});
        } catch(error){
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },

    async editarUsuarios(request, response){
        try{
            const {usuarioNome, usuarioEmail, usuarioSenha, usuarioTelefone, usuarioDataNasc, usuarioTipoConta} = request.body;
            const {usuarioId} = request.params;
            const sql = 'UPDATE tbUsuarios SET usuarioNome = ?, usuarioEmail = ?, usuarioSenha = ?, usuarioTelefone = ?, usuarioDataNasc = ?, usuarioTipoConta = ? WHERE usuarioId = ?;';
            const values = [usuarioNome, usuarioEmail, usuarioSenha, usuarioTelefone, usuarioDataNasc, usuarioTipoConta, usuarioId];
            const atualizacao = await db.query(sql, values);
            return response.status(200).json({confirma: 'Sucesso', message: 'Dados Atualizados'});
        } catch(error){
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },

    async excluirUsuarios(request, response){
        try{
            const { usuarioId } = request.params;
            const sql = 'DELETE FROM tbUsuarios WHERE usuarioId = ?';
            const values = [usuarioId];
            await db.query(sql, values);
            return response.status(200).json({confirma: 'Sucesso', message:'Usuario com id '+ usuarioId + 'excluido com sucesso'});
        } catch(error){
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },
}