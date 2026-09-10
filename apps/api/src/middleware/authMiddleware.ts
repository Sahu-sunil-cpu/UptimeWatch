import { RequestHandler } from "express";
import jwt from "jsonwebtoken";

export const authMiddleware: RequestHandler = (req, res, next) => {
    const token =
        req.headers.authorization ?? req.cookies?.token;

    if (!token) {
        res.status(401).json({
            message: "No token provided",
        });
        return;
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET!) as jwt.JwtPayload;

        req.userId = decoded.userId;

        next();
    } catch (err: any) {
        if (err.name === "TokenExpiredError") {
            res.status(401).json({
                message: "Access token expired",
            });
            return;
        }

        res.status(401).json({
            message: "Invalid token",
        });
        
    }
};