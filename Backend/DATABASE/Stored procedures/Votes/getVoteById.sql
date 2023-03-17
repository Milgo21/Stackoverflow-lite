USE [Stackoverflow]
GO
CREATE OR ALTER PROCEDURE getVoteById @id VARCHAR(255)
AS
BEGIN
    Select * FROM Votes WHERE id = @id
END
USE [Stackoverflow]
GO
EXEC getVoteById '6000'