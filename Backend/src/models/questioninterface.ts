export interface Question{

    id:string
    question_title :string
    question_desc:string 
    question_trial :string
    question_tags :string
    user_id:string 
    is_deleted :boolean
    date_created:string
}
export interface QuestionAsked{

    id:string
    question_title :string
    question_desc:string 
    question_trial :string
    question_tags :string
    user_id:string 
}

