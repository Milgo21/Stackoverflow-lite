USE [Stackoverflow]
GO
CREATE OR ALTER PROCEDURE highlightAnswer @id VARCHAR(255)
AS
BEGIN 

    UPDATE Answers SET is_highlighted= 1 WHERE id = @id
END
-- EXEC highlightAnswer '3e741d8e-7368-4b3d-a07c-e9a7dde50439'