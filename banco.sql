CREATE DATABASE testeback;

USE [testeback]
GO

/****** Object:  Table [dbo].[achadoPerdido]    ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[achadoPerdido](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[nome] [nchar](50) NOT NULL,
	[descricao] [nchar](100) NULL,
	[categoria] [int] NOT NULL,
	[devolvido] [bit] NOT NULL,
 CONSTRAINT [PK_achadoPerdido] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO

USE [testeback]
GO

/****** Object:  Table [dbo].[categoriaAchadoPerdido]     ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[categoriaAchadoPerdido](
	[id] [int] NOT NULL,
	[nome] [nchar](50) NOT NULL,
 CONSTRAINT [PK_categoriaAchadoPerdido] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO


INSERT INTO categoriaAchadoPerdido (id,nome) VALUES (1,'Documentos');
INSERT INTO categoriaAchadoPerdido (id,nome) VALUES (2,'Celulares');
INSERT INTO categoriaAchadoPerdido (id,nome) VALUES (3,'Outros');
INSERT INTO categoriaAchadoPerdido (id,nome) VALUES (4,'Chaves');


INSERT INTO achadoPerdido(nome, descricao, categoria, devolvido) VALUES('RG João','Documento de Identidade do João Macedo Campos',1,0);
INSERT INTO achadoPerdido(nome, descricao, categoria, devolvido) VALUES('Celular Samsung Azul ','Celular Samsung Azul do modelo S10 ',2,1);



