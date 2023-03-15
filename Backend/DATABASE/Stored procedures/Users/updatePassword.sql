USE [Stackoverflow]
GO
CREATE OR ALTER PROCEDURE updatePassword @id VARCHAR(255),@password VARCHAR(255) 
AS   
BEGIN
        UPDATE Users SET password = @password 
        WHERE id = @id
END