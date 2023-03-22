USE [Stackoverflow]
GO
CREATE PROCEDURE GetQuestionDetails
@question_id VARCHAR(255)
AS
BEGIN
    SELECT 
        u.id AS user_id, 
        u.username, 
        q.question_title,     
        q.question_desc,
        q.question_trial,
        q.question_tags,
        a.answer, 
        SUM(v.vote) AS vote_count,
        c.comment
    FROM Question q
    
        INNER JOIN Users u ON q.user_id = u.id
        LEFT JOIN Answers a ON q.id = a.question_id
        LEFT JOIN Votes v ON a.id = v.answer_id
        LEFT JOIN Comments c ON a.id = c.answer_id
    WHERE q.id = @question_id
    GROUP BY u.id, u.username, q.question_title,        q.question_desc,
        q.question_trial,
        q.question_tags, a.answer, c.comment
END
USE [Stackoverflow]
GO
EXEC GetQuestionDetails 'e8d7ad83-5987-429a-9d78-9e0d78091019'
