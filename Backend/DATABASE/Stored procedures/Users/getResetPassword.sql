USE [Stackoverflow]
GO
CREATE OR ALTER PROCEDURE forgotPasswordEmail @email VARCHAR(255)
AS   
BEGIN
        UPDATE Users SET forgot_sent = 1 
        WHERE email = @email
END


USE [Stackoverflow]
GO
EXEC forgotPasswordEmail 'felixmilgo21@gmail.com'