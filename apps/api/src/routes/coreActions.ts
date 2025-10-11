import { client } from "@repo/db/client";
import { Router } from "express";
import { websiteSchema } from "./type";
import { authMiddleware } from "../middleware/authMiddleware";

export const coreRouter: Router = Router();

coreRouter.post("/website", authMiddleware, async (req, res) => {

    const {error, data} = websiteSchema.safeParse(req.body);
    if (error) {
        res.status(411).json({error: "Invalid data"});
        return;
    }

    try {
        const website = await client.website.create({
            data: {
                url: data.url,
                timeAdded: new Date(),
                userId: req.userId
            }
        })
    
        res.json({
            id: website.id
        }) 
    } catch (error) {
        res.status(401).json({
            error: "internal error"
        })
    }
  
});

coreRouter.get("/status/:websiteId", authMiddleware, async (req, res) => {

   const id = req.params.websiteId;

   try {
    const result = await client.website.findFirst({
        where: {
            userId: req.userId,
            id: id
        },
        include: {
            ticks: {
                orderBy: [{
                    CreatedAt: 'desc'
                }],
                take: 1
            }
        }
    })

    if(!result) {
        res.status(409).json({
            message: "Not Found"
        })
    }

    res.json({
        message: result
    })
   } catch (error) {
    
   }
})


coreRouter.get("/user/websites", authMiddleware, async (req, res) => {

    const id = req.params.websiteId;
 
    try {
     const result = await client.website.findMany({
         where: {
             userId: req.userId,
         },
         include: {
             ticks: {
                 orderBy: [{
                     CreatedAt: 'desc'
                 }],
                 take: 1
             }
         }
     })
 
     if(!result) {
         res.status(409).json({
             message: "Not Found"
         })
     }
 
     res.json({
         message: result
     })
    } catch (error) {
     
    }
 })
 
 
 coreRouter.get("/ticks/:websiteId", authMiddleware, async (req, res) => {

    const websiteId = req.params.websiteId;
 
    try {
     const result = await client.websiteTick.findMany({
         where: {
             userId: req.userId,
             website_id: websiteId
         },
     })
 
     if(!result) {
         res.status(409).json({
             message: "Not Found"
         })
     }
 
     res.json({
         message: result
     })
    } catch (error) {
     
    }
 })
 