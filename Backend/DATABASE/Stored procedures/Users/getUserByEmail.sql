USE [Stackoverflow]
GO
CREATE OR ALTER PROCEDURE getUserByEmail @email VARCHAR(255)
AS
BEGIN
    Select * FROM Users WHERE email = @email
END

USE [Stackoverflow]
GO
EXEC getUserByEmail 'MELt@gmail.com'