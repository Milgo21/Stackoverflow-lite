USE [Stackoverflow]
GO
CREATE OR ALTER PROCEDURE setForgetDefault @id VARCHAR(255)
AS
BEGIN
    Update Users
    SET forgot_sent =0
    WHERE id = @id

END
USE [Stackoverflow]
GO
EXEC setForgetDefault '2527752a-1633-4b94-87da-a5bbdea6126'