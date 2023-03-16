USE [Stackoverflow]
GO
CREATE OR ALTER PROCEDURE deleteAnswer @id VARCHAR(255)
AS
BEGIN 

    UPDATE Answers SET is_deleted = 1 WHERE id = @id
END

-- USE [Stackoverflow]
-- GO
-- EXEC deleteAnswer '45'
