import { boolean, z } from "zod";

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


export const dnsSchema = z.object({
    domain: z.string(),
    ip_addr: z.string(),
    resolver: z.string(),
    interval: z.number(),
})

export const deleteSchema = z.object({
    id: z.string()
})

export const toggleSchema = z.object({
    id: z.string(),
    active: z.boolean()
})