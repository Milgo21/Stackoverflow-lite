USE [Stackoverflow]
GO
-- SELECT * FROM Answers
CREATE TABLE Answers(
id VARCHAR(255) PRIMARY KEY,
answer VARCHAR(MAX) NOT NULL,
user_id VARCHAR(255) NOT NULL,
question_id VARCHAR(255) NOT NULL,
is_highlighted BIT NOT NULL DEFAULT 0,
is_deleted BIT NOT NULL DEFAULT 0,
is_sent BIT NOT NULL DEFAULT 0,
date_created DATE NOT NULL DEFAULT GETDATE(),
FOREIGN KEY(user_id) REFERENCES Users(id),
FOREIGN KEY (question_id) REFERENCES Question(id) ON DELETE CASCADE
);
DROP  TABLE Answers

USE [Stackoverflow]
GO
UPDATE Answers SET is_sent = 0 WHERE id = 'da553744-df59-4b3c-8959-b62ee23ca4bd'