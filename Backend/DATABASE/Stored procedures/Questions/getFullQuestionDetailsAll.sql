USE [Stackoverflow]
GO
CREATE OR ALTER PROCEDURE GetQuestionDetailsAll
AS
BEGIN
    SELECT 
        u.id AS user_id, 
        u.username, 
        q.question_title,     
        q.question_desc,
        q.question_trial,
        q.question_tags,
        q.date_created,
        a.answer, 
        SUM(v.vote) AS vote_count,
        c.comment
    FROM Question q
    
        INNER JOIN Users u ON q.user_id = u.id
        LEFT JOIN Answers a ON q.id = a.question_id
        LEFT JOIN Votes v ON a.id = v.answer_id
        LEFT JOIN Comments c ON a.id = c.answer_id
   
    GROUP BY u.id, u.username, q.question_title,q.date_created,        q.question_desc,
        q.question_trial,
        q.question_tags, a.answer, c.comment
END



USE [Stackoverflow]
GO
EXEC GetQuestionDetailsAll 