const {json} = require("express");
const db = require("../database/connection");

module.exports = {
    async listarEnderecos(request, response){
        try{
            const sql = 'SELECT enderecoId, usuarioId, enderecoUF, enderecoCidade, enderecoCep, enderecoLogr, enderecoBairro, enderecoN, enderecoCompl, endereco_principal from tbEnderecos';
            const Enderecos = await db.query(sql);
            return response.status(200).json(Enderecos[0]);
        } catch(error){
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },

    async cadastrarEnderecos(request, response){
        try{
            const  {usuarioId, enderecoUF, enderecoCidade, enderecoCep, enderecoLogr, enderecoBairro, enderecoN, enderecoCompl, endereco_principal } = request.body;
            const sql = 'INSERT INTO tbEnderecos (usuarioId, enderecoUF, enderecoCidade, enderecoCep, enderecoLogr, enderecoBairro, enderecoN, enderecoCompl, endereco_principal) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?);';
            const values = [usuarioId, enderecoUF, enderecoCidade, enderecoCep, enderecoLogr, enderecoBairro, enderecoN, enderecoCompl, endereco_principal];
            const confirmacao = await db.query(sql, values);
            const enderecoId = confirmacao[0].insertId;
            return response.status(200).json({confirma: 'Sucesso', message: enderecoId});
        } catch(error){
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },

    async editarEnderecos(request, response){
        try{
            const {usuarioId, enderecoUF, enderecoCidade, enderecoCep, enderecoLogr, enderecoBairro, enderecoN, enderecoCompl, endereco_principal} = request.body;
            const {enderecoId} = request.params;
            const sql = 'UPDATE tbEnderecos SET usuarioId = ?, enderecoUF = ?, enderecoCidade = ?, enderecoCep = ?, enderecoLogr = ?, enderecoBairro = ?, enderecoN = ?, enderecoCompl = ?, endereco_principal = ? WHERE enderecoId = ?;';
            const values = [usuarioId, enderecoUF, enderecoCidade, enderecoCep, enderecoLogr, enderecoBairro, enderecoN, enderecoCompl, endereco_principal, enderecoId];
            const atualizacao = await db.query(sql, values);
            return response.status(200).json({confirma: 'Sucesso', message: 'Dados Atualizados'});
        } catch(error){
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },

    async excluirEnderecos(request, response){
        try{
            const { enderecoId } = request.params;
            const sql = 'DELETE FROM tbUsuarios WHERE enderecoId = ?';
            const values = [enderecoId];
            await db.query(sql, values);
            return response.status(200).json({confirma: 'Sucesso', message:'Endereço com id '+ enderecoId + 'excluido com sucesso'});
        } catch(error){
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },
}
