USE [Stackoverflow]
GO
CREATE OR ALTER PROCEDURE getQuestionById(@id VARCHAR(255))
AS
BEGIN
SELECT * FROM Question WHERE @id = id AND is_deleted = 0
END


USE [Stackoverflow]
GO
EXEC getQuestionById '77'