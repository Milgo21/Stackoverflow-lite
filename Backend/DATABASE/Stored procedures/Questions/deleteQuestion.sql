USE [Stackoverflow]
GO
CREATE OR ALTER PROCEDURE deleteQuestion @id VARCHAR(255)
AS
BEGIN 

    UPDATE Question SET is_deleted = 1 WHERE id = @id
END

USE [Stackoverflow]
GO
EXEC deleteQuestion '234'