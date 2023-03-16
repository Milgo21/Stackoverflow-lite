USE [Stackoverflow]
GO
CREATE OR ALTER PROCEDURE getAllAnswers
AS
BEGIN
    Select * FROM Answers WHERE is_deleted=0

END

USE [Stackoverflow]
GO
EXEC getAllAnswers