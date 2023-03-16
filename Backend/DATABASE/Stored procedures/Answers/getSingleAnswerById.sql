USE [Stackoverflow]
GO
CREATE OR ALTER PROCEDURE getAnswerById @id VARCHAR(255)
AS
BEGIN
    Select * FROM Answers WHERE @id = id AND is_deleted = 0 

END
USE [Stackoverflow]
GO
SELECT * FROM Comments
EXEC getAnswerById '45'