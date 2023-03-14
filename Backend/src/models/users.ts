export interface User{
id:string
username:string
email:string
password:string
is_deleted:string
is_admin:string
date_created:string
welcome_sent:string
}
export interface DecodedData{
    
}

export interface LogUser{
    email:string
    password:string
}