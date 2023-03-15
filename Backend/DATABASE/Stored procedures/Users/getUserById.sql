USE [Stackoverflow]
GO
CREATE OR ALTER PROCEDURE getUserById @id VARCHAR(255)
AS
BEGIN
    Select * FROM Users WHERE id = @id
END
USE [Stackoverflow]
GO
EXEC getUserById '6000'