USE [Stackoverflow]
GO
CREATE OR ALTER PROCEDURE getAllUserQuestions @user_id VARCHAR(255)
AS
BEGIN
    Select * FROM Question WHERE user_id =@user_id

END



USE [Stackoverflow]
GO
EXEC getAllUserQuestions '35a8f9fb-4865-40af-a4cb-709cf688f306'