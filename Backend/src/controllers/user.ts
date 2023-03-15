import Jwt from "jsonwebtoken";
import bcrypt from 'bcrypt'
import {Request, Response} from 'express'
// import { RegistrationSchema } from "../helpers";
import dotenv from 'dotenv'
import path from 'path';
import {v4 as uuid} from 'uuid'
import _db from "../databaseHelpers";
import { User } from "../models/users";
// const  _db = new DatabaseHelper()
dotenv.config({ path: path.resolve(__dirname, '../../.env') })


interface ExtendedRequest extends Request{
    body:{username:string ,email:string,password:string},
    params:{id:string}
    // info?:User
}

// Register a new user
export const registerUser =async (req:ExtendedRequest,res:Response) => {
    try {
        const id = uuid()
        const {username,email,password} = req.body
        const hashedpassword = await bcrypt.hash(password,10)
        const newUser ={
            id:uuid(),
            username:username,
            email:email,
            password: hashedpassword 
        }
    if (_db.checkConnection() as unknown as boolean){
        const registeredUser = await _db.exec('insertOrUpdateUser', {id,username,email,password:hashedpassword})
        console.log(registeredUser);
        if(registeredUser){
            const token = Jwt.sign(newUser, process.env.JWT_SECRET as string, {expiresIn: '1d'});
            res.status(200).json({status:"User registered successfully",
            data:{
                token
            }
        });
        }else{
            res.status(500).json({message:"There was an error creating user"})
        }
            
    }
    else{
        res.status(500).json({message: 'Did not connect to the database'})
    }


    } catch (error) {
        console.log('error');
        
    }
}

// Log in a new user

export const login =async (req:ExtendedRequest, res: Response) => {
    try {
        const {email, password} = req.body
        
        if (_db.checkConnection() as unknown as boolean) {
            const loggingUser = (await _db.exec('getUserByEmail', { email: email})).recordset;
            
            if(loggingUser[0]){
                // Compare the two passwords
                const validPassword = await bcrypt.compare(password, loggingUser[0].password);


                if(validPassword){
                    const token = Jwt.sign(loggingUser[0], process.env.JWT_SECRET as string, {expiresIn:'1d'})
                    res.status(200).json({"new token": token , loggingUser})
                }else{
                    res.status(500).json({message: "You entered a wrong password"})
                }
                // return res.status(404).json({message:"User is 404"})
            }else{
                res.status(500).json({message: "Email not found"})
            }
        }else{
            res.status(500).json({message: "Cannot connect to the database at this moment"})
        }

    } catch (error) {
        
        res.status(500).json(error)
    }
}



// Get all users
export const getAllUsers =async (req:ExtendedRequest, res:Response) => {
    try {
        if(_db.checkConnection() as unknown as boolean){
            const users = await _db.exec('getAllUsers');
            if (users) {
                res.status(200).json(users)
            } else {
                res.status(200).json({message:"Currently there are no users"})
            }
        }else{
            res.status(500).json({message:"Kindly check your database connection"})
        }
    } catch (error) {
        res.status(500).json(error)
    }
}

// Delete a user

export const deleteUser =async (req:ExtendedRequest, res:Response) => {
    try {
        const id = req.params.id
        if (_db.checkConnection() as unknown as boolean) {
            const userDeleted = await _db.exec('deleteUser', {id})
            if (!userDeleted) {
                res.status(500).json({message: "User is 404"})
                
            } else {
                res.status(200).json({message: "User deleted successfuly"})
            }
        } else {
            res.status(500).json({message:"Kindly check your database connection"})
        }
    } catch (error) {
        res.status(500).json(error)
    }
}

// Get a user by id
export const getUserById =async (req:ExtendedRequest, res:Response) => {
    try {
        const id = req.params.id
        const userById:User[] = await (await _db.exec('getUserById', {id})).recordset
        if (userById.length < 0) {
            res.status(404).json({message: 'User is 404'})
        } else {
            res.status(200).json(userById[0])
        }
        
    } catch (error) {
        res.status(500).json(error)
    }
}

// Update a user
export const updatePassword =async (req:ExtendedRequest, res:Response) => {
    try {

        const id = req.params.id
        if (_db.checkConnection() as unknown as boolean) {

            const updatedUser:User[] = await (await _db.exec('getUserById', {id})).recordset
            if (updatedUser.length > 0) {
                const hashedpassword = await bcrypt.hash(req.body.password,10);
                await _db.exec('updatePassword', {id:updatedUser[0].id, password:hashedpassword})
                res.status(200).json({message: "Password updated"})
            }else{
                res.status(404).json({message: 'User is 404'})
            }
            
        } else {
            res.status(500).json({message:"Kindly check your database connection"})
        }

    } catch (error) {
        
    }
}

