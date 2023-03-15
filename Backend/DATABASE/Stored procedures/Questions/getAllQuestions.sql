USE [Stackoverflow]
GO
CREATE OR ALTER PROCEDURE getAllQuestions
AS
BEGIN
    Select * FROM Question WHERE is_deleted=0

END

USE [Stackoverflow]
GO
EXEC getAllQuestions