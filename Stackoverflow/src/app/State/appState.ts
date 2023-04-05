import { QuestionInterface } from "./Reducers/questionReducer";
import { UserInterface } from "./Reducers/userReducer";


export interface AppState{
  user:UserInterface
  question:QuestionInterface
}
