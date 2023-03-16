USE [Stackoverflow]
GO
CREATE OR ALTER PROCEDURE insertAnswer 
@id VARCHAR(255),
@answer VARCHAR(MAX),
@user_id VARCHAR(255),
@question_id VARCHAR(255)
AS
BEGIN
        INSERT INTO Answers(id,answer,user_id,question_id) VALUES (@id, @answer, @user_id, @question_id)
        SELECT * FROM Answers WHERE id = @id
END
USE [Stackoverflow]
GO
EXEC insertAnswer '4567899090078','answegggggggggggggggggg','6000','77'