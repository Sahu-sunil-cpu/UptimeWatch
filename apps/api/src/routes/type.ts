import { z } from "zod";

export const UserLoginSchema = z.object({
    email: z.email(),
    password: z.string().min(8),
})

export const userSignupSchema = z.object({
    username: z.string(),
    email: z.email(),
    password: z.string().min(8),
})

export const websiteSchema = z.object({
    url: z.string(),
})
