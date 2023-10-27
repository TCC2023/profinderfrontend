CREATE TABLE tbUsuarios (
    usuarioId INT NOT NULL AUTO_INCREMENT,
    usuarioNome VARCHAR(64) NOT NULL,
    usuarioEmail VARCHAR(64) NOT NULL,
    usuarioSenha VARCHAR(128) NOT NULL,
    usuarioTelefone VARCHAR(20) NOT NULL,
    usuarioDataNasc DATE NOT NULL,
    usuarioTipoConta ENUM('Cliente','Prestador') NOT NULL,
    PRIMARY KEY (usuarioId)
);

CREATE TABLE tbClientes (
    usuarioId INT NOT NULL,
    clienteCPF VARCHAR(14) NULL,
    PRIMARY KEY (usuarioId),
    FOREIGN KEY (usuarioId) REFERENCES tbUsuarios(usuarioId)
);

CREATE TABLE tbPrestadores (
    usuarioId INT NOT NULL,
    prestadorEmpresa VARCHAR(100) NOT NULL,
    prestadorCPFCNPJ VARCHAR(20) NOT NULL,
    prestadorRGIE VARCHAR(20) NULL,
    PRIMARY KEY (usuarioId),
    FOREIGN KEY (usuarioId) REFERENCES tbUsuarios(usuarioId)
);

CREATE TABLE tbEnderecos (
    enderecoId INT NOT NULL AUTO_INCREMENT,
    usuarioId INT NOT NULL,
    enderecoUF CHAR(2) NOT NULL,
    enderecoCidade VARCHAR(64) NOT NULL,
    enderecoCep CHAR(9) NOT NULL,
    enderecoBairro VARCHAR(30) NOT NULL,
    enderecoLogr VARCHAR(50) NOT NULL,
    enderecoN VARCHAR(6) NOT NULL,
    enderecoCompl VARCHAR(64) NULL, 
    endereco_principal BIT NOT NULL, 
    PRIMARY KEY (enderecoId),
    FOREIGN KEY (usuarioId) REFERENCES tbUsuarios(usuarioId)
);

CREATE TABLE tbTipoServico (
    tipoServId INT NOT NULL AUTO_INCREMENT,
    tipoServDescricao VARCHAR(128) NOT NULL,
    PRIMARY KEY (tipoServId)
);

CREATE TABLE tbServicos (
    servicoId INT NOT NULL AUTO_INCREMENT,
    usuarioId INT NOT NULL,
    tipoServId INT NOT NULL,
    servicoDesc VARCHAR(255) NOT NULL,
    servicoValor DECIMAL(8,2) NOT NULL,
    PRIMARY KEY (servicoId),
    FOREIGN KEY (usuarioId) REFERENCES tbPrestadores(usuarioId),
    FOREIGN KEY (tipoServId) REFERENCES tbTipoServico(tipoServId)
);

CREATE TABLE tbAgendamentos (
    agendamentoId INT NOT NULL AUTO_INCREMENT,
    usuarioId INT NOT NULL,
    servicoId INT NOT NULL,
    enderecoId INT NOT NULL,
    agendamentoData DATETIME NOT NULL, 
    servicoRealizado BIT NOT NULL, 
    notaServico TINYINT NULL, 
    PRIMARY KEY (agendamentoId),
    FOREIGN KEY (usuarioId) REFERENCES tbClientes(usuarioId),
    FOREIGN KEY (servicoId) REFERENCES tbServicos(servicoId),
    FOREIGN KEY (enderecoId) REFERENCES tbEnderecos(enderecoId)
);


