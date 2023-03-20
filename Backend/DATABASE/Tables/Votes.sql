USE [Stackoverflow]
GO
SELECT * FROM Votes
CREATE TABLE Votes(
id VARCHAR(255) PRIMARY KEY,
vote INT NOT NULL,
answer_id VARCHAR(255) NOT NULL,
user_id VARCHAR(255) NOT NULL,
date_created DATE NOT NULL DEFAULT GETDATE(),
FOREIGN KEY (user_id)  REFERENCES Users(id),
FOREIGN KEY (answer_id)  REFERENCES Answers(id)
);

DROP TABLE Votes
USE [Stackoverflow]
GO
DELETE FROM Votes WHERE vote = 1