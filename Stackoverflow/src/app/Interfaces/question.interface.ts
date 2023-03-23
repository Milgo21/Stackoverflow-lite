export interface AskQuestion{
  id?:string
  question_title:string
  question_desc:string
  question_trial:string
  question_tags:string
  user_id:string
}

export interface Question{
id:string
question_title:string
question_desc :string
question_trial:string
question_tags :string
user_id:string
is_deleted:boolean
date_created:string
}


export interface FullQuestion{
user_id:string
username:string
question_title:string
question_desc:string
question_trial:string
question_tags:string
date_created:string
answer:string
vote_count:number
comment:string

}
