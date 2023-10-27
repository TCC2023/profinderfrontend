const db = require("../database/connection");
const express = require('express');
const router = express.Router();

// importação dos controllers utilizados nas rotas
const AgendamentosController = require('../controllers/agendamentosController');
const ClientesController = require('../controllers/clientesController');
const EnderecosController = require('../controllers/enderecosController');
const PrestadoresController = require('../controllers/prestadoresController');
const ServicosController = require('../controllers/servicosController');
const TipoServicoController = require('../controllers/tipoServicoController');
const UsuariosController = require('../controllers/usuariosController');

// definição de rotas
router.get('/agendamentos', AgendamentosController.listarAgendamentos);
router.post('/agendamentos', AgendamentosController.cadastrarAgendamentos);
router.patch('/agendamentos:agendamentoid', AgendamentosController.editarAgendamentos);
router.delete('/agendamentos:agendamentoid', AgendamentosController.excluirAgendamentos);

router.get('/clientes', ClientesController.listarClientes);
router.post('/clientes', ClientesController.cadastrarClientes);
router.patch('/clientes:usuarioid', ClientesController.editarClientes);
router.delete('/clientes:usuarioid', ClientesController.excluirClientes);

router.get('/enderecos', EnderecosController.listarEnderecos);
router.post('/enderecos', EnderecosController.cadastrarEnderecos);
router.patch('/enderecos:enderecoid', EnderecosController.editarEnderecos);
router.delete('/enderecos:enderecoid', EnderecosController.excluirEnderecos);

router.get('/prestadores',PrestadoresController.listarPrestadores);
router.post('/prestadores',PrestadoresController.cadastrarPrestadores);
router.patch('/prestadores/:usuarioid', PrestadoresController.editarPrestadores);
router.delete('/prestadores/:usuarioid', PrestadoresController.excluirPrestadores);

router.get('/servicos', ServicosController.listarServicos);
router.post('/servicos', ServicosController.cadastrarServicos);
router.patch('/servicos:servicoid', ServicosController.editarServicos);
router.delete('/servicos:servicoid', ServicosController.excluirServicos);

router.get('/tiposervico', TipoServicoController.listarTipoServico);
router.post('/tiposervico', TipoServicoController.cadastrarTipoServico);
router.patch('/tiposervico:tiposervid', TipoServicoController.editarTipoServico);
router.delete('/tiposervico:tiposervid', TipoServicoController.excluirTipoServico);

router.get('/usuarios', UsuariosController.listarUsuarios);
router.post('/usuarios', UsuariosController.cadastrarUsuarios);
router.patch('/usuarios/:usuarioid', UsuariosController.editarUsuarios);
router.delete('/usuarios/:usuarioid', UsuariosController.excluirUsuarios);

module.exports = router;
