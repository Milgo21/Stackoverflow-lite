export interface Message{
  message:string
}
export interface LogUser{
  username:string
  email:string
  password:string

}
export interface loginnewUser{
  email:string
  password:string
}
export interface LoginSuccess{
  message:string
  token:string
  is_admin:boolean
  username:string
}
export interface User{
  id:string
  username:string
  email:string
  password:string
  is_deleted:boolean
  is_admin:boolean
  date_created:string
  welcome_sent:boolean
  forgot_sent:boolean
}
// Interfaces
