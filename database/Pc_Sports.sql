CREATE DATABASE pc_sports;
USE pc_sports;

CREATE TABLE `pessoa` (
  `id_pes` int NOT NULL UNIQUE AUTO_INCREMENT,
  `nome_pes` varchar(32) NOT NULL,
  `tel_pes` varchar(13) DEFAULT NULL,
  `data_nasc_pes` date NOT NULL,
  `cpf_pes` varchar(11) NOT NULL,
  PRIMARY KEY (`id_pes`),
  UNIQUE KEY `id_pes_UNIQUE` (`id_pes`),
  UNIQUE KEY `cpf_pes_UNIQUE` (`cpf_pes`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

CREATE TABLE `modalidade` (
  `id_modal` int NOT NULL UNIQUE AUTO_INCREMENT,
  `nome_modal` varchar(255) NOT NULL,
  `sexo_modal` char(1) DEFAULT NULL,
  `descricao_modal` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id_modal`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

CREATE TABLE `organizacao` (
  `id_org` int NOT NULL UNIQUE AUTO_INCREMENT,
  `nome_org` varchar(300) NOT NULL,
  `cnpj_org` varchar(45) UNIQUE NOT NULL,
  `razao_social_org` varchar(300) UNIQUE NOT NULL,
  `data_aber_org` date DEFAULT NULL,
  PRIMARY KEY (`id_org`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

CREATE TABLE `evento` (
  `id_even` int NOT NULL UNIQUE AUTO_INCREMENT,
  `nome_even` varchar(255) NOT NULL,
  `data_inicio_even` datetime NOT NULL,
  `data_fim_even` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `local_even` varchar(300) NOT NULL,
  `organizacao_id_org` int NOT NULL,
  
  PRIMARY KEY (`id_even`,`organizacao_id_org`),
  KEY `fk_evento_organizacao1_idx` (`organizacao_id_org`),
  CONSTRAINT `fk_evento_organizacao1` FOREIGN KEY (`organizacao_id_org`) REFERENCES `organizacao` (`id_org`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;


CREATE TABLE `inscricao` (
  `id_insc` int NOT NULL UNIQUE AUTO_INCREMENT,
  `valor_insc` decimal(10,0) NOT NULL,
  `modalidade_id_modal` int NOT NULL,
  `data_insc` date NOT NULL,
  `status_insc` binary(0) NOT NULL,
  `pessoa_id_pes` int NOT NULL,
  `evento_id_even` int NOT NULL,
  
  PRIMARY KEY (`id_insc`,`modalidade_id_modal`,`evento_id_even`),
  KEY `fk_inscricao_pessoa_idx` (`pessoa_id_pes`),
  KEY `fk_inscricao_modalidade1_idx` (`modalidade_id_modal`),
  KEY `fk_inscricao_evento1_idx` (`evento_id_even`),
  CONSTRAINT `fk_inscricao_evento1` FOREIGN KEY (`evento_id_even`) REFERENCES `evento` (`id_even`),
  CONSTRAINT `fk_inscricao_modalidade1` FOREIGN KEY (`modalidade_id_modal`) REFERENCES `modalidade` (`id_modal`),
  CONSTRAINT `fk_inscricao_pessoa` FOREIGN KEY (`pessoa_id_pes`) REFERENCES `pessoa` (`id_pes`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

CREATE TABLE `evento_has_modalidade` (
  `evento_id_even` int NOT NULL,
  `modalidade_id_modal` int unsigned NOT NULL,
  
  PRIMARY KEY (`evento_id_even`,`modalidade_id_modal`),
  KEY `fk_evento_has_modalidade_modalidade1_idx` (`modalidade_id_modal`),
  KEY `fk_evento_has_modalidade_evento1_idx` (`evento_id_even`),
  CONSTRAINT `fk_evento_has_modalidade_evento1` FOREIGN KEY (`evento_id_even`) REFERENCES `evento` (`id_even`),
  CONSTRAINT `fk_evento_has_modalidade_modalidade1` FOREIGN KEY (`modalidade_id_modal`) REFERENCES `modalidade` (`id_modal`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;