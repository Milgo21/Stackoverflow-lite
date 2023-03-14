USE [Stackoverflow]
GO
CREATE OR ALTER PROCEDURE getAllUsers
AS
BEGIN
    Select * FROM Users WHERE is_deleted=0

END
