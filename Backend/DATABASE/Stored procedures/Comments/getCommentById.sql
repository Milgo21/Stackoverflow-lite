USE [Stackoverflow]
GO
CREATE OR ALTER PROCEDURE getCommentById @id VARCHAR(255)
AS
BEGIN
    Select * FROM Comments WHERE @id = id AND is_deleted = 0 

END
-- USE [Stackoverflow]
-- GO
-- EXEC getCommentById '23'
