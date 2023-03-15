import { Router } from "express";
import { registerUser , login, getAllUsers, deleteUser, updatePassword, getUserById} from "../controllers/user";
const userRouter = Router();

userRouter.post('/register', registerUser);
userRouter.post('/login', login);
userRouter.get('', getAllUsers);
userRouter.get('/:id', getUserById);
userRouter.delete('/:id', deleteUser)
userRouter.put('/:id', updatePassword)
export default userRouter;