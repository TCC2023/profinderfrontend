
-- tbUsuarios
INSERT INTO tbUsuarios 
    (usuarioId,     usuarioNome,            usuarioEmail,                   usuarioSenha,   usuarioTelefone,    usuarioDataNasc,    usuarioTipoConta) VALUES 
    (1,             'Victor Souza Leão',   'vtrsl@hotmail.com',            '4321',          '14665559922',      '1995/04/17',       'Prestador'), 
    (2,             'Bruno Rodrigues',     'brunorodrigues.p54@gmail.com', '12345',         '14995263415' ,     '1998/12/07',       'Prestador'), 
    (3,             'Yudi Namaizawa',      'yudinamaizawa@hotmail.com',    '12345',         '14994261359',      '2004/02/16',       'Cliente'), 
    (4,             'Maria Lívia Silva',   'marialiv@hotmail.com',         '12345',         '14999561359',      '2002/03/18',       'Cliente'), 
    (5,             'Luis Otavio',         'luthi_gasparetto@hotmail.com', '12345',         '14997684512',      '1995/10/05',       'Cliente'), 
    (6,             'Renato Gaúcho',       'renatogaucho@hotmail.com',     '12345',         '14988231234',      '1970/03/30',       'Prestador');

-- tbClientes
INSERT INTO tbClientes VALUES (3, '22261932006');
INSERT INTO tbClientes VALUES (4, '41255502045');

-- tbPrestadores
INSERT INTO tbPrestadores (usuarioid, prestadorEmpresa, prestadorCPFCNPJ, prestadorRGIE) VALUES (1, 'Victor Souza Leão','741.729.170-89','25.358.573-9');
INSERT INTO tbPrestadores (usuarioid, prestadorEmpresa, prestadorCPFCNPJ, prestadorRGIE) VALUES (2, 'Bruno Rodrigues','319.209.390-08','48.601.011-9');
INSERT INTO tbPrestadores (usuarioid, prestadorEmpresa, prestadorCPFCNPJ, prestadorRGIE) VALUES (6, 'Grêmio entregas','04.520.722/0001-47','156.453.614');



-- tbEnderecos
INSERT INTO tbEnderecos 
        (enderecoid, usuarioid, enderecoUF,    enderecoCidade,     enderecoCep,    enderecoLogr,       enderecoBairro,         enderecoN,  enderecoCompl,  endereco_principal) VALUES 
        (1,          3,         'SP',          'Tupã',             '17600-040',    'Rua Tapajós',      'Jardim Vila Lopes',    '217',      'Lado A',       true), 
        (2,          4,         'SP',          'Tupã',             '17603-473',    'Rua Aimorés',      'Centro',               '552',      null,           true),
        (3,          4,         'SP',          'Tupã',             '17600-246',    'Avenida Tamoios',  'Centro',               '879',      'Fundos',       false);




--tbTipoServico
INSERT INTO tbTipoServico (tipoServDescricao) VALUES ('Pedreiro'), ('Pintor'), ('Encanador'), ('Eletricista'), ('Carpinteiro');

-- tbServicos
INSERT INTO tbServicos 
    (servicoId,     usuarioid,  tipoServId,     servicoDesc,                            servicoValor) VALUES 
    (1,             1,          4,              'Instalação e manutenções elétricas',        150.00), 
    (2,             2,          1,              'Assentar piso (valor do m²)',               50.00), 
    (3,             2,          1,              'Reboque parede (diária)',                   150.00), 
    (4,             2,          1,              'Muro de arrima com reboque',                200.00), 
    (5,             2,          3,              'Serviços básicos de instalação',            150.00);


-- tbAgendamentos
INSERT INTO tbAgendamentos 
    (agendamentoId,     usuarioId,  servicoId,  enderecoId,     agendamentoData,    servicoRealizado,   notaServico) VALUES 
    (1,                 3,          1,          1,              '2023-08-01 7:00',  true,               5), 
    (2,                 4,          1,          2,              '2023-08-01 14:00', false,              null), 
    (3,                 4,          3,          2,              '2023-08-02 12:00', false,              null), 
    (4,                 4,          5,          3,              '2023-08-02 12:00', false,              null); 


