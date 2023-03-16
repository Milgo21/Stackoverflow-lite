USE [Stackoverflow]
GO
CREATE OR ALTER PROCEDURE getAllCommentsByAnswerId @answer_id VARCHAR(255)
AS
BEGIN
    Select * FROM Comments WHERE @answer_id = answer_id AND is_deleted = 0 

END

-- USE [Stackoverflow]
-- GO
-- EXEC getAllCommentsByAnswerId 'b0045cc4-09df-4635-909c-67f2f3de4f5d'