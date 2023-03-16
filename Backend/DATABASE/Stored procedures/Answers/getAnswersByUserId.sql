USE [Stackoverflow]
GO
CREATE OR ALTER PROCEDURE getAnswersByUserId @user_id VARCHAR(255)
AS
BEGIN
    Select * FROM Answers WHERE @user_id = user_id AND is_deleted = 0 

END

USE [Stackoverflow]
GO
EXEC getAnswersByUserId '6000'