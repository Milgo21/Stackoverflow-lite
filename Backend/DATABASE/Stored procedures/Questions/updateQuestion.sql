USE [Stackoverflow]
GO
CREATE OR ALTER PROCEDURE updateQuestion
@id VARCHAR(255),
@question_title VARCHAR(255),
@question_desc VARCHAR(MAX),
@question_trial VARCHAR(MAX),
@question_tags VARCHAR(MAX)

AS
BEGIN
    UPDATE Question SET question_title = @question_title,question_desc = @question_desc, question_trial = @question_trial, question_tags = @question_tags WHERE id = @id
    SELECT * FROM Question WHERE id = @id
END