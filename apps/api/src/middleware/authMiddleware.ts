import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import 'dotenv/config';

export function authMiddleware(req: Request, res: Response, next: NextFunction) {

    const token = req.headers.authorization!;
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET!);
        
      //TODO: remove ts ignore
        //@ts-ignore
        req.userId = decoded.userId as string;
        next();
    } catch (error) {
        console.log(error);
    }

}