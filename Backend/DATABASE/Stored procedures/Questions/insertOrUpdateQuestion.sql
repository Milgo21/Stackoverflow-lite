-- @id VARCHAR(255),
-- @question_title VARCHAR(255),
-- @question_desc VARCHAR(MAX),
-- @question_trial VARCHAR(MAX),
-- @question_tags VARCHAR(MAX),
-- @user_id VARCHAR(255)





USE [Stackoverflow]
GO
CREATE OR ALTER PROCEDURE insertOrUpdateQuestion
@id VARCHAR(255),
@question_title VARCHAR(255),
@question_desc VARCHAR(MAX),
@question_trial VARCHAR(MAX),
@question_tags VARCHAR(MAX),
@user_id VARCHAR(255)

AS
BEGIN
    IF EXISTS (SELECT * FROM Question WHERE id = @id) 
    BEGIN
        UPDATE Question SET question_title = @question_title,question_desc = @question_desc, question_trial = @question_trial, question_tags = @question_tags, user_id = @user_id WHERE id = @id
        SELECT * FROM Question WHERE id = @id
    END
    ELSE
    BEGIN
        INSERT INTO Question(id,question_title,question_desc, question_trial, question_tags, user_id ) VALUES (@id, @question_title, @question_desc, @question_trial, @question_tags, @user_id)
        SELECT * FROM Question WHERE id = @id
    END
END
USE [Stackoverflow]
GO
EXEC insertOrUpdateQuestion '80','Node','connect to db','local host???','mssql', '2527752a-1633-4b94-87da-a5bbdea6126e'