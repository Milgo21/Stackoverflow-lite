USE [Stackoverflow]
GO
CREATE OR ALTER PROCEDURE insertComment 
@id VARCHAR(255),
@comment VARCHAR(MAX),
@answer_id VARCHAR(255),
@user_id VARCHAR(255) 
AS
BEGIN
        INSERT INTO Comments(id,comment,answer_id,user_id) VALUES (@id, @comment, @answer_id, @user_id)
        SELECT * FROM Comments WHERE id = @id
END
USE [Stackoverflow]
GO
EXEC insertComment '24','Second comment','b0045cc4-09df-4635-909c-67f2f3de4f5d','2527752a-1633-4b94-87da-a5bbdea6126e'