USE [Stackoverflow]
GO
CREATE TABLE Question(
id VARCHAR(255) PRIMARY KEY,
question_title VARCHAR(255) NOT NULL,
question_desc VARCHAR(MAX) NOT NULL,
question_trial VARCHAR(MAX) NOT NULL,
question_tags VARCHAR(MAX) NOT NULL,
user_id VARCHAR(255) NOT NULL,
is_deleted BIT NOT NULL DEFAULT 0,
date_created DATE NOT NULL DEFAULT GETDATE(),
FOREIGN KEY (user_id)  REFERENCES Users(id)

);
SELECT * FROM Question
DROP TABLE Question