import { createAction, props } from "@ngrx/store";

import { loginnewUser, Message, LogUser, LoginSuccess} from "src/app/Interfaces/user.interface";


export const loginUser = createAction('[loginUser]-loginUser', props<{newUser:loginnewUser}>());
export const loginUserSuccess = createAction('[loginUser]-loginUser', props<{res:LoginSuccess}>())
export const loginFail= createAction('[loginUser]-loginUserFail',props<{error:string}>())


export const register = createAction('[register]-register-user', props<{user:LogUser}>())
export const registerSuccess = createAction('[register]-register-Success', props<{res:Message}>())
export const registerFailure = createAction('[register]-register-Failure', props<{errorMessage:string}>())
