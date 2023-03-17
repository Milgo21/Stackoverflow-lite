USE [Stackoverflow]
GO
CREATE OR ALTER PROCEDURE insertVote
@id VARCHAR(255),
@vote INT,
@answer_id VARCHAR(255),
@user_id VARCHAR(255) 
AS
BEGIN
        INSERT INTO Votes(id,vote,answer_id,user_id) VALUES (@id, @vote, @answer_id, @user_id)
        SELECT * FROM Votes WHERE id = @id
END


USE [Stackoverflow]
GO
EXEC insertVote '002','-1','4567','2527752a-1633-4b94-87da-a5bbdea6126e'