USE [Stackoverflow]
GO
CREATE OR ALTER PROCEDURE getAllComments
AS
BEGIN
    Select * FROM Comments WHERE is_deleted=0

END

USE [Stackoverflow]
GO
EXEC getAllComments