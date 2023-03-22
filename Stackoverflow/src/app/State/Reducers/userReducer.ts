import { createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import { LoginSuccess } from "src/app/Interfaces/user.interface";
import * as userActions from "../Actions/userActions"


export interface UserInterface{
  userData:LoginSuccess| null
  errorMessage:string
  registerSuccessMessage:string
  registerFailMessage:string
}

const initialState:UserInterface={
  userData:null,
  errorMessage:'',
  registerSuccessMessage:'',
  registerFailMessage:''

}
const userSlice=createFeatureSelector<UserInterface>('user')

// export const nameSelector= createSelector(userSlice, state=>state.userData?.username)


export const userReducer = createReducer<UserInterface>(
  initialState,

  on(userActions.registerSuccess, (state,actions):UserInterface =>{
    return {
      ...state,
      registerSuccessMessage:actions.res.message,
      registerFailMessage:''
    }
  }),
  on(userActions.registerFailure, (state,actions):UserInterface =>{
    return {
      ...state,
      registerSuccessMessage:'',
      registerFailMessage: actions.errorMessage
    }
  }),



  on(userActions.loginUserSuccess, (state,actions):UserInterface =>{
    return{
      ...state,
      errorMessage:'',
      userData:actions.res
    }
  }),
  on(userActions.loginFail, (state,actions):UserInterface =>{
    return{
      ...state,
      errorMessage:actions.errorMessage,
      userData:null
    }
  })
)






// State
