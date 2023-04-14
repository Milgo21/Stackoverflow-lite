import { createAction, createFeatureSelector, on } from "@ngrx/store"
import * as questionActions from "../Actions/questionActions"

export interface QuestionInterface {
  questionData: null
  errorMessage:string
  getQuestionsSuccessMessage:string
  getQuestionsFailMessage:string
}
const initialState:QuestionInterface ={
  questionData:null,
  errorMessage:'',
  getQuestionsSuccessMessage:'',
  getQuestionsFailMessage:''
}

const questionSlice = createFeatureSelector<QuestionInterface>('Question')

export const questionReducer = createAction<QuestionInterface>(
  initialState,
  on(questionActions.getAllUsersQuestionsSuccess, (state, actions):QuestionInterface =>{
    return{
      ...state,
      getQuestionsSuccessMessage:actions.res.message,
      getQuestionsFailMessage:''
    }
  })
)

// Reducer
