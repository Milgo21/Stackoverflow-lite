CREATE DATABASE Stackoverflow
USE [Stackoverflow]
GO
CREATE TABLE Users(
id VARCHAR(255) PRIMARY KEY,
username VARCHAR(255) NOT NULL,
email VARCHAR(255) NOT NULL UNIQUE,
password VARCHAR(255) NOT NULL,
is_deleted BIT NOT NULL DEFAULT 0,
is_admin BIT NOT NULL DEFAULT 0,
date_created DATE NOT NULL DEFAULT GETDATE(),
welcome_sent BIT NOT NULL DEFAULT 0,
forgot_sent BIT NOT NULL DEFAULT 0
);
SELECT * FROM Users
DROP TABLE Users


USE [Stackoverflow]
GO
SELECT * FROM Users
DELETE FROM Users WHERE id = '0e90992a-610b-4636-a391-68306853dd5e'
ALTER TABLE Users 
ADD forgot_sent BIT NOT NULL DEFAULT 0
