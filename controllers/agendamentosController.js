const {json} = require("express");
const db = require("../database/connection");

module.exports = {
    async listarAgendamentos(request, response){
        try{
            const sql = 'SELECT agendamentoId, usuarioId, servicoId, enderecoId, agendamentoData, servicoRealizado, notaServico FROM tbAgendamentos;';
            const Agendamentos = await db.query(sql);
            return response.status(200).json(Agendamentos[0]);
        } catch(error){
            return response.status(500).json(error);
        }
    },

    async cadastrarAgendamentos(request, response){
        try{
            const  {usuarioId, servicoId, enderecoId, agendamentoData, servicoRealizado, notaServico } = request.body;
            const sql = 'INSERT INTO tbAgendamentos (usuarioId, servicoId, enderecoId, agendamentoData, servicoRealizado, notaServico) VALUES (?, ?, ?, ?, ?, ?);';
            const values = [usuarioId, servicoId, enderecoId, agendamentoData, servicoRealizado, notaServico];
            const confirmacao = await db.query(sql, values);
            const agendamentoId = confirmacao[0].insertId;
            return response.status(200).json({confirma: 'Sucesso', message: agendamentoId});
        } catch(error){
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },

    async editarAgendamentos(request, response){
        try{
            const {usuarioId, servicoId, enderecoId, agendamentoData, servicoRealizado, notaServico} = request.body;
            const {agendamentoId} = request.params;
            const sql = 'UPDATE tbAgendamentos SET usuarioId = ?, servicoId = ?, enderecoId = ?, agendamentoData = ?, servicoRealizado = ?, notaServico = ? WHERE agendamentoId = ?;';
            const values = [usuarioId, servicoId, enderecoId, agendamentoData, servicoRealizado, notaServico, agendamentoId];
            const atualizacao = await db.query(sql, values);
            return response.status(200).json({confirma: 'Sucesso', message: 'Dados Atualizados'});
        } catch(error){
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },

    async excluirAgendamentos(request, response){
        try{
            const { agendamentoId } = request.params;
            const sql = 'DELETE FROM tbAgendamentos WHERE agendamentoId = ?';
            const values = [agendamentoId];
            await db.query(sql, values);
            return response.status(200).json({confirma: 'Sucesso', message:'Agendamento com id '+ agendamentoId + 'excluido com sucesso'});
        } catch(error){
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },
}
