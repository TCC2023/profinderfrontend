DROP TABLE tbagendamentos; 
DROP TABLE tbenderecos;
DROP TABLE  tbclientes; 
DROP TABLE tbservicos; 
DROP TABLE tbprestadores;
DROP TABLE tbtiposervico; 
DROP TABLE tbusuarios;

SELECT agendamentoId, usuarioId, servicoId, enderecoId, agendamentoData, servicoRealizado, notaServico FROM tbagendamentos;
SELECT enderecoid, usuarioid, enderecoUF, enderecoCidade, enderecoCep, enderecoLogr, enderecoBairro, enderecoN, enderecoCompl, endereco_principal FROM tbenderecos;
SELECT usuarioId, clienteCPF FROM tbclientes;
SELECT servicoId, usuarioid, tipoServId, servicoDesc, servicoValor FROM tbservicos;
SELECT usuarioid, prestadorEmpresa, prestadorCPFCNPJ, prestadorRGIE FROM tbprestadores;
SELECT tipoServDescricao FROM tbtiposervico;
SELECT usuarioId, usuarioNome, usuarioEmail, usuarioSenha, usuarioTelefone, usuarioDataNasc, usuarioTipoConta FROM tbusuarios;

