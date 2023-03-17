USE [Stackoverflow]
GO
CREATE OR ALTER PROCEDURE getVotesByAnswerId @answer_id VARCHAR(255)
AS
BEGIN
    Select * FROM Votes WHERE answer_id = @answer_id
END
USE [Stackoverflow]
GO
EXEC getVotesByAnswerId '4567'