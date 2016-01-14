
-- --------------------------------------------------
-- Entity Designer DDL Script for SQL Server 2005, 2008, 2012 and Azure
-- --------------------------------------------------
-- Date Created: 12/04/2015 19:35:49
-- Generated from EDMX file: C:\dev\Interview1\Locator.Entities\Locator.edmx
-- --------------------------------------------------

SET QUOTED_IDENTIFIER OFF;
GO
USE [MigrationsDemo.BlogContext];
GO
IF SCHEMA_ID(N'dbo') IS NULL EXECUTE(N'CREATE SCHEMA [dbo]');
GO

-- --------------------------------------------------
-- Dropping existing FOREIGN KEY constraints
-- --------------------------------------------------

IF OBJECT_ID(N'[dbo].[FK_OrderLineItem]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[LineItems] DROP CONSTRAINT [FK_OrderLineItem];
GO
IF OBJECT_ID(N'[dbo].[FK_ProductLineItem]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[LineItems] DROP CONSTRAINT [FK_ProductLineItem];
GO
IF OBJECT_ID(N'[dbo].[FK_PersonOrder]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[Orders] DROP CONSTRAINT [FK_PersonOrder];
GO

-- --------------------------------------------------
-- Dropping existing tables
-- --------------------------------------------------

IF OBJECT_ID(N'[dbo].[Blogs]', 'U') IS NOT NULL
    DROP TABLE [dbo].[Blogs];
GO
IF OBJECT_ID(N'[dbo].[LineItems]', 'U') IS NOT NULL
    DROP TABLE [dbo].[LineItems];
GO
IF OBJECT_ID(N'[dbo].[Orders]', 'U') IS NOT NULL
    DROP TABLE [dbo].[Orders];
GO
IF OBJECT_ID(N'[dbo].[People]', 'U') IS NOT NULL
    DROP TABLE [dbo].[People];
GO
IF OBJECT_ID(N'[dbo].[Products]', 'U') IS NOT NULL
    DROP TABLE [dbo].[Products];
GO
IF OBJECT_ID(N'[dbo].[Trips]', 'U') IS NOT NULL
    DROP TABLE [dbo].[Trips];
GO
IF OBJECT_ID(N'[dbo].[Offices]', 'U') IS NOT NULL
    DROP TABLE [dbo].[Offices];
GO

-- --------------------------------------------------
-- Creating all tables
-- --------------------------------------------------

-- Creating table 'Blogs'
CREATE TABLE [dbo].[Blogs] (
    [BlogId] int IDENTITY(1,1) NOT NULL,
    [Name] nvarchar(max)  NULL,
    [Url] nvarchar(max)  NULL
);
GO

-- Creating table 'LineItems'
CREATE TABLE [dbo].[LineItems] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [Quantity] int  NOT NULL,
    [ProductId] int  NOT NULL,
    [OrderId] int  NOT NULL
);
GO

-- Creating table 'Orders'
CREATE TABLE [dbo].[Orders] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [PersonId] int  NOT NULL
);
GO

-- Creating table 'People'
CREATE TABLE [dbo].[People] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [FirstName] nvarchar(max)  NOT NULL,
    [LastName] nvarchar(max)  NOT NULL,
    [Address] nvarchar(max)  NOT NULL
);
GO

-- Creating table 'Products'
CREATE TABLE [dbo].[Products] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [Name] nvarchar(max)  NOT NULL,
    [Cost] int  NOT NULL
);
GO

-- Creating table 'Trips'
CREATE TABLE [dbo].[Trips] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [Name] nvarchar(max)  NOT NULL,
    [Created] nvarchar(max)  NOT NULL
);
GO

-- Creating table 'Offices'
CREATE TABLE [dbo].[Offices] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [Name] nvarchar(max)  NOT NULL,
    [Location] nvarchar(max)  NOT NULL
);
GO

-- --------------------------------------------------
-- Creating all PRIMARY KEY constraints
-- --------------------------------------------------

-- Creating primary key on [BlogId] in table 'Blogs'
ALTER TABLE [dbo].[Blogs]
ADD CONSTRAINT [PK_Blogs]
    PRIMARY KEY CLUSTERED ([BlogId] ASC);
GO

-- Creating primary key on [Id] in table 'LineItems'
ALTER TABLE [dbo].[LineItems]
ADD CONSTRAINT [PK_LineItems]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'Orders'
ALTER TABLE [dbo].[Orders]
ADD CONSTRAINT [PK_Orders]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'People'
ALTER TABLE [dbo].[People]
ADD CONSTRAINT [PK_People]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'Products'
ALTER TABLE [dbo].[Products]
ADD CONSTRAINT [PK_Products]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'Trips'
ALTER TABLE [dbo].[Trips]
ADD CONSTRAINT [PK_Trips]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'Offices'
ALTER TABLE [dbo].[Offices]
ADD CONSTRAINT [PK_Offices]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- --------------------------------------------------
-- Creating all FOREIGN KEY constraints
-- --------------------------------------------------

-- Creating foreign key on [OrderId] in table 'LineItems'
ALTER TABLE [dbo].[LineItems]
ADD CONSTRAINT [FK_OrderLineItem]
    FOREIGN KEY ([OrderId])
    REFERENCES [dbo].[Orders]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_OrderLineItem'
CREATE INDEX [IX_FK_OrderLineItem]
ON [dbo].[LineItems]
    ([OrderId]);
GO

-- Creating foreign key on [ProductId] in table 'LineItems'
ALTER TABLE [dbo].[LineItems]
ADD CONSTRAINT [FK_ProductLineItem]
    FOREIGN KEY ([ProductId])
    REFERENCES [dbo].[Products]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_ProductLineItem'
CREATE INDEX [IX_FK_ProductLineItem]
ON [dbo].[LineItems]
    ([ProductId]);
GO

-- Creating foreign key on [PersonId] in table 'Orders'
ALTER TABLE [dbo].[Orders]
ADD CONSTRAINT [FK_PersonOrder]
    FOREIGN KEY ([PersonId])
    REFERENCES [dbo].[People]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_PersonOrder'
CREATE INDEX [IX_FK_PersonOrder]
ON [dbo].[Orders]
    ([PersonId]);
GO

-- --------------------------------------------------
-- Script has ended
-- --------------------------------------------------