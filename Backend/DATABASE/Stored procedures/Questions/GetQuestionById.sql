USE [Stackoverflow]
GO
CREATE OR ALTER PROCEDURE GetQuestionById(@id VARCHAR(255))
AS
BEGIN
SELECT * FROM Questions WHERE @id = id
END