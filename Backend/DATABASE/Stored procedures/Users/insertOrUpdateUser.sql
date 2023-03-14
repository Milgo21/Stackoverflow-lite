USE [Stackoverflow]
GO
CREATE OR ALTER PROCEDURE insertOrUpdateUser @id VARCHAR(255),@username VARCHAR(255),@email VARCHAR(255),@password VARCHAR(255)
-- ,@is_deleted BIT,@is_admin BIT,@date_created DATETIME,@welcome_sent BIT
AS
BEGIN
    IF EXISTS (SELECT * FROM Users WHERE id = @id) 
    BEGIN
        UPDATE Users SET username = @username,email = @email, password = @password WHERE id = @id
        -- ,  is_deleted = @is_deleted, is_admin = @is_admin,  date_created = @date_created, welcome_sent = @welcome_sent  
        SELECT * FROM Users WHERE id = @id
    END
    ELSE
    BEGIN
        INSERT INTO Users (id,username,email, password) VALUES (@id, @username, @email, @password)
        SELECT * FROM Users WHERE id = @id
    END
END