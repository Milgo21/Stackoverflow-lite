import { Router } from "express";
import { registerUser , login} from "../controllers/user";
const userRouter = Router();

userRouter.post('/register', registerUser);
userRouter.post('/login', registerUser);
export default userRouter;