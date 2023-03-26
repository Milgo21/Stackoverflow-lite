import dotenv from 'dotenv';
import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import path from "path";

dotenv.config({ path: path.resolve(__dirname, "../../.env") });

export const verifyToken = (req: Request, res: Response, next: NextFunction) => {
    const bearerHeader = req.headers["authorization"];
    // console.log(bearerHeader)
    
try {
    if (typeof bearerHeader !== "undefined") {
        const bearer = bearerHeader.split(" ");
        const bearerToken = bearer[1];
        // console.log(bearerToken);
        jwt.verify(bearerToken,process.env.JWT_SECRET as string, (err, authData) => {
            if (err) {
                res.sendStatus(403);
            } else {
                req.body.user = authData;
            }
        }
        );
    }
} catch (error) {
return res.json(error)  
}
next();
};