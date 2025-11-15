import { Router } from "express";
import { client } from "@repo/db/client";
import { UserLoginSchema, userSignupSchema } from "./type";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import 'dotenv/config'


export const userAuthRouter: Router = Router();

userAuthRouter.get("/details", async (req, res) => {

    try {
        const user = await client.user.findFirst({
            where: {
                id: req.userId,
            }
        })

        if (!user) {
            res.json({
                message: "User doesn't exist, try signup"
            });

            return;
        }

        res.json({
            message: user
        })
    } catch (error) {
        res.status(401).json({
            message: "Internal Error",
        })
    }

})

userAuthRouter.post("/login", async (req, res) => {

    const { success, data } = UserLoginSchema.safeParse(req.body);
    if (!success) {
        res.status(411).json({
            error: "Invalid Input"
        });
        return;
    }


    try {
        const userExist = await client.user.findFirst({
            where: {
                email: data.email,
            }
        })

        if (!userExist) {
            res.json({
                message: "User doesn't exist, try signup"
            });

            return;
        }

        //password check
        const result = await bcrypt.compare(data.password, userExist.password);

        if (!result) {
            res.json({
                message: "Invalid Credentials"
            });

            return;
        }

        const userId = userExist.id;

        //TODO: expiry time is pending
        const token = jwt.sign({ userId }, process.env.JWT_SECRET!);

        res.json({
            message: token
        })
    } catch (error) {
        res.status(401).json({
            message: "Internal Error",
        })
    }
})

userAuthRouter.post("/signup", async (req, res) => {

    const { success, data } = userSignupSchema.safeParse(req.body);
    if (!success) {
        res.status(411).json({
            error: "Invalid Input"
        });
        return;
    }

    try {
        const userExist = await client.user.findFirst({
            where: {
                email: data.email,
            }
        })
       

        if (userExist) {
            res.json({
                message: "User Already Exist, try login"
            });

            return;
        }

        //hash password
        const saltRounds = 10;
        const password = await bcrypt.hash(data.password, saltRounds);

        const user = await client.user.create({
            data: {
                username: data.username,
                password: password,
                email: data.email
            }
        })



        const userId = user.id;

        //TODO: expiry time is pending

        const token = jwt.sign({ userId }, process.env.JWT_SECRET!);

        res.json({
            message: token
        })
    } catch (error) {
        console.log(error)
        res.status(401).json({
            message: "Internal Error",
        })
    }
})