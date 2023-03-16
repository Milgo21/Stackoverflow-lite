USE [Stackoverflow]
GO
CREATE OR ALTER PROCEDURE deleteComment @id VARCHAR(255)
AS
BEGIN 

    UPDATE Comments SET is_deleted = 1 WHERE id = @id
END

-- USE [Stackoverflow]
-- GO
-- EXEC deleteComment '24'