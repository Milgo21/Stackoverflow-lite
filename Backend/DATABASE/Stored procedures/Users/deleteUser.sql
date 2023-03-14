USE [Stackoverflow]
GO
CREATE OR ALTER PROCEDURE deleteUser @id VARCHAR(255)
AS
BEGIN 

    UPDATE Users SET is_deleted = 1 WHERE id = @id
END
