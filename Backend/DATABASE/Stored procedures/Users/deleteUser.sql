USE [Stackoverflow]
GO
CREATE OR ALTER PROCEDURE deleteUser @id VARCHAR(255)
AS
BEGIN 

    UPDATE Users SET is_deleted = 1 WHERE id = @id
END

USE [Stackoverflow]
GO
EXEC deleteUser '1429558a-c4b7-4663-b758-de751c79df7f'