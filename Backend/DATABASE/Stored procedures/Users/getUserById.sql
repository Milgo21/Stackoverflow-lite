USE [Stackoverflow]
GO
CREATE OR ALTER PROCEDURE getUserById @id VARCHAR(255)
AS
BEGIN
    Select * FROM Users WHERE id = @id AND is_deleted = 0
END
USE [Stackoverflow]
GO
EXEC getUserById '6000'