import { createAction,props } from "@ngrx/store";
import {getUsersQuizSuccess} from "../../Interfaces/question.interface"

// Get all users questions
export const getAllUsersQuestions = createAction('[getAllUsersQuestions]-getAllUsersQuestions')
export const getAllUsersQuestionsSuccess = createAction('[getAllUsersQuestions]-getAllUsersQuestions', props<{res:getUsersQuizSuccess}>)
export const getAllUsersQuestionsFail = createAction('[getAllUsersQuestions]- getAllUsersQuestionsFail', props<{errorMessage:string}>())

// Get single user questions
export const getSingleUserQuestions = createAction('[getUserQuestions]-getUserQuestions')
export const getSingleUserQuestionsSuccess = createAction('[getUserQuestions]-getUserQuestions')
export const getSingleUserQuestionsFail = createAction('[getUserQuestions]- getUserQuestionsFail', props<{errorMessage:string}>())

// Get full question details



// state
