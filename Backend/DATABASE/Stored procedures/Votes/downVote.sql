USE [Stackoverflow]
GO
CREATE OR ALTER PROCEDURE insertOrUpdateVote 
@id VARCHAR(255),
@vote INT,
@answer_id VARCHAR(255),
@user_id VARCHAR(255)
AS
BEGIN
    IF EXISTS (SELECT * FROM Votes WHERE id = @id AND answer_id= @answer_id) 
    BEGIN
        UPDATE Votes SET vote = @vote, answer_id = @answer_id, user_id = @user_id WHERE id = @id
        SELECT * FROM Votes WHERE id = @id
    END
    ELSE
    BEGIN
        INSERT INTO Votes (id,vote,answer_id,user_id) VALUES (@id, @vote, @answer_id, @user_id)
        SELECT * FROM Votes WHERE id = @id
    END
END

USE [Stackoverflow]
GO
EXEC insertOrUpdateVote '1',1,'4567','2527752a-1633-4b94-87da-a5bbdea6126e'
