import { createClient, RedisClientType } from "redis";
import { createRegion, pollWebsite } from "./helper";
import { Alert, Status, Website } from "./types";
import { client } from "@repo/db/client";

//TODO: redis client connection is made every time function triggers
// export async function processTask(regionId: string, stream: string, workerId: string, consumerGroup: string, len: number) {
//     const redisClient = await createClient()
//         .on("error", (err) => console.log("Redis Client Error", err))
//         .connect();
//     //creating group
//     //await createGroup('india-1');

//     //const regionId = await createRegion('India');

//     //TODO: blocking until particular amount of message receives
//     while (true) {
//         const res = await redisClient.xReadGroup(
//             consumerGroup,
//             workerId, {
//             key: stream,
//             id: '>'
//         }, {
//             COUNT: len,
//             BLOCK: 0
//         }
//         ) as {
//             name: string;
//             messages: {
//                 id: string;
//                 message: {
//                     id: string,
//                     url: string,
//                     timeAdded: string,
//                     userId: string
//                 };
//             }[]
//         }[];
//         //  console.log(res[0]?.messages);

//         res[0]?.messages.map(async ({ id, message }) => {
//             const websiteId = message.id;
//             const url = message.url;
//             const userId = message.userId;

//             if (!websiteId || !url || !userId) {
//                 return;
//             }

//             const result = await pollWebsite(url);
//             const status = result!.status == true ? "Up" : "Down"

//             if (status == "Down") {
//                 //send notification if status is down
//                 //two streams, store incident in db and notification

//                 //sending message to notification worker
//                 const result = await client.user.findFirst({
//                     where: {
//                         id: userId
//                     }
//                 })

//                 const email = result?.email

//                 const stream = "uptime:notification";
//                 const notifyData = {
//                     url: url,
//                     email: email!
//                 }
//                 await sendToWorker(notifyData, stream);

//                 //sending message to db worker
//                 const stream1 = "uptime:db";
//                 const AlertData = {
//                     name: "create@alert",
//                     userId: userId,
//                     url: url,
//                     websiteId: websiteId
//                 }

//                 await sendToWorker(AlertData, stream1);

//             }

//             const responseTime = result!.responseTime;
//             const stream = "uptime:db"
//             const data = {
//                 name: "create@ticks",
//                 status: status,
//                 responseTime: responseTime.toString(),
//                 regionId: regionId,
//                 websiteId: websiteId
//             }
//             await sendToWorker(data, stream);

//             await client.websiteTick.create({
//                 data: {
//                     status: status || "Unknown",
//                     response_time_ms: result!.responseTime,
//                     region_id: regionId,
//                     website_id: websiteId,
//                     userId: userId
//                 }
//             })

//             const res1 = await redisClient.xAck(`${stream}`, `${consumerGroup}`, id);
//             console.log("ack --> ", res1);
//         })


//     }
// }



export async function processXAdd(message: any, stream: string) {
    const redisClient = await createClient()
        .on("error", (err) => console.log("Redis Client Error", err))
        .connect();

    const res = await redisClient.xAdd(
        stream, '*', message
    )

    //console.log(res);

    //not destrying connection because connection is needed to be again and again
    //redisClient.destroy();
}

export async function processXRead(stream: string, workerId: string, consumerGroup: string, len: number) {
    try {
        const redisClient = await createClient()
        .on("error", (err) => console.log("Redis Client Error", err))
        .connect();


    const res = await redisClient.xReadGroup(
        consumerGroup,
        workerId, {
        key: stream,
        id: '>'
    }, {
        COUNT: len,
        BLOCK: 0
    }
    )

    return res; 
    } catch (error) {
        console.error(error)
    }

}


export async function createGroup(consumerGroup: string, stream: string) {
    const redisClient = await createClient()
        .on("error", (err) => console.log("Redis Client Error", err))
        .connect();

    const res = await redisClient.xGroupCreate(stream, consumerGroup, '0', {
        MKSTREAM: true
    })
    console.log(res);
    redisClient.destroy();
}


export async function xAck(stream: string, consumerGroup: string, id: string) {
    const redisClient = await createClient()
        .on("error", (err) => console.log("Redis Client Error", err))
        .connect();

    const res1 = await redisClient.xAck(`${stream}`, `${consumerGroup}`, `${id}`);
    console.log("ack --> ", res1);
}

