import { client } from "@repo/db/client";
import { Router } from "express";
import { deleteSchema, dnsSchema, toggleSchema, websiteSchema } from "./type";
import { authMiddleware } from "../middleware/authMiddleware";

export const coreRouter: Router = Router();

coreRouter.post("/website", authMiddleware, async (req, res) => {

    const { error, data } = websiteSchema.safeParse(req.body);
    if (error) {
        res.status(401).json({ error: "Invalid data" });
        return;
    }

    try {
        const website = await client.website.create({
            data: {
                url: data.url,
                updatedAt: new Date(),
                userId: req.userId,
                active: true
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


coreRouter.post("/dns", authMiddleware, async (req, res) => {
    const { error, data } = dnsSchema.safeParse(req.body);
    if (error) {
        res.status(401).json({ error: "Invalid data" });
        return;
    }

    try {
        const dns = await client.dns.create({
            data: {
                userId: req.userId,
                domain: data.domain,
                ip_addr: data.ip_addr,
                resolver: data.resolver,
                interval: data.interval,
                updatedAt: new Date().toISOString(),
            }
        })

        res.json({
            id: dns.id
        })
    } catch (error) {
        console.log(error)
        res.status(401).json({
            error: "internal error"
        })
    }

});

// coreRouter.get("/status/:websiteId", authMiddleware, async (req, res) => {

//    const id = req.params.websiteId;

//    try {
//     const result = await client.website.findFirst({
//         where: {
//             userId: req.userId,
//             id: id
//         },
//         include: {
//             ticks: {
//                 orderBy: [{
//                     CreatedAt: 'desc'
//                 }],
//                 take: 1
//             }
//         }
//     })

//     if(!result) {
//         res.status(409).json({
//             message: "Not Found"
//         })
//     }

//     res.json({
//         message: result
//     })
//    } catch (error) {

//    }
// })


coreRouter.get("/user/websites", authMiddleware, async (req, res) => {

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

        if (!result) {
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


coreRouter.get("/user/dns", authMiddleware, async (req, res) => {

    try {
        const result = await client.dns.findMany({
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

        if (!result) {
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

coreRouter.post("/dns/delete", authMiddleware, async (req, res) => {
    const { error, data } = deleteSchema.safeParse(req.body);
    if (error) {
        res.status(401).json({ error: "Invalid data" });
        return;
    }

    try {
        await client.dnsTick.deleteMany({
            where: {
             dns_id: data.id
            }
         })

        const dns = await client.dns.delete({
           where: {
            id: data.id
           }
        })

        res.json({
            message: "successful"
        })
    } catch (error) {
        console.log(error)
        res.status(401).json({
            error: "internal error"
        })
    }

})


coreRouter.post("/website/delete", authMiddleware, async (req, res) => {
    const { error, data } = deleteSchema.safeParse(req.body);
    if (error) {
        res.status(401).json({ error: "Invalid data" });
        return;
    }
    try {
        
        await client.websiteTick.deleteMany({
            where: {
             website_id: data.id
            }
         })

         await client.website.delete({
           where: {
            id: data.id
           }
        })

        res.json({
            message: "successful"
        })
    } catch (error) {
        console.log(error)
        res.status(401).json({
            error: "internal error"
        })
    }

})


coreRouter.post("/website/toggle", authMiddleware, async (req, res) => {
    const { error, data } = toggleSchema.safeParse(req.body);
    if (error) {
        res.status(401).json({ error: "Invalid data" });
        return;
    }
    try {
         await client.website.update({
           where: {
            id: data.id
           },

           data: {
            active: data.active
           }
        })

        res.json({
            message: "successful"
        })
    } catch (error) {
        console.log(error)
        res.status(401).json({
            error: "internal error"
        })
    }

})


coreRouter.post("/dns/toggle", authMiddleware, async (req, res) => {
    const { error, data } = toggleSchema.safeParse(req.body);
    if (error) {
        res.status(401).json({ error: "Invalid data" });
        return;
    }
    try {
         await client.dns.update({
           where: {
            id: data.id
           },

           data: {
            active: data.active
           }
        })

        res.json({
            message: "successful"
        })
    } catch (error) {
        console.log(error)
        res.status(401).json({
            error: "internal error"
        })
    }

})


coreRouter.get("/website/ticks/:websiteId", authMiddleware, async (req, res) => {
    
    
    const websiteId = req.params.websiteId;

    try {
        const result = await client.websiteTick.findMany({
            where: {
                userId: req.userId,
                website_id: websiteId
            },
        })

        if (!result) {
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


coreRouter.get("/dns/ticks/:dnsId", authMiddleware, async (req, res) => {
   
    const websiteId = req.params.dnsId;

    try {
        const result = await client.dnsTick.findMany({
            where: {
                userId: req.userId,
                dns_id: websiteId
            },
        })

        if (!result) {
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


// TODO : url name is required to show on frontend, but in present schema there is no such field
// many to one relation is not possible because alert is common for dns and website
// may be tables can be separated 
coreRouter.get("/alerts", authMiddleware, async (req, res) => {
   
    const websiteId = req.params.dnsId;

    try {
        const result = await client.alerts.findMany({
            where: {
                userId: req.userId,
            },
        })

        if (!result) {
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
