USE [Stackoverflow]
GO
CREATE OR ALTER PROCEDURE getAnwersByQuestionId @question_id VARCHAR(255)
AS
BEGIN
    Select * FROM Answers WHERE @question_id = question_id AND is_deleted = 0 

END

USE [Stackoverflow]
GO
EXEC getAnwersByQuestionId '80'