USE [Stackoverflow]
GO
CREATE OR ALTER PROCEDURE getHiglightedUser
AS 
BEGIN
    SELECT u.username, u.email FROM Users u
    INNER JOIN Answers a ON u.id = a.user_id
    WHERE a.is_highlighted = 1 AND a.is_sent = 0
END

USE [Stackoverflow]
GO
EXEC getHiglightedUser