USE [Stackoverflow]
GO
CREATE OR ALTER PROCEDURE getAllCommentsByUserId @user_id VARCHAR(255)
AS
BEGIN
    Select * FROM Comments WHERE @user_id = user_id AND is_deleted = 0 

END

-- USE [Stackoverflow]
-- GO
-- EXEC getAllCommentsByUserId "2527752a-1633-4b94-87da-a5bbdea6126e"