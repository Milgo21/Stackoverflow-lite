USE [Stackoverflow]
GO
CREATE TABLE Answers(
id VARCHAR(255) PRIMARY KEY,
answer VARCHAR(MAX) NOT NULL,
user_id VARCHAR(255) NOT NULL,
question_id VARCHAR(255) NOT NULL,
is_highlighted BIT NOT NULL DEFAULT 0,
is_deleted BIT NOT NULL DEFAULT 0,
date_created DATE NOT NULL DEFAULT GETDATE(),
FOREIGN KEY(user_id) REFERENCES Users(id),
FOREIGN KEY (question_id) REFERENCES Question(id)
);
DROP  TABLE Answers
SELECT * FROM Answers