INSERT INTO Users(id,username,email,password)
VALUES('545454','mamba21','mamba@gmail.com','crocodile');
use [Stackoverflow]
GO
EXEC getAllUsers
EXEC deleteUser '545454'
EXEC insertOrUpdateUser '6000','TINAA21','MELt@gmail.com','KANYAGAA';
SELECT * FROM Users