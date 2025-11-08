import { createGroup, processXAdd, processXRead, xAck } from "@repo/redis-stream";
import { createRegion, pollWebsite } from "@repo/package-helper";
import "dotenv/config";
import { client } from "@repo/db/client";
/*
create region id
create worker id
read message -> return message
poll website
*/

async function main() {
    const workerId = process.env.WORKER_ID!;
    const regionId = await createRegion('usa');
    const stream = "uptime:app";
    const consumerGroup = "USA";
    const len = 10;
    const db_stream = "uptime:db1";
    const notify_stream = "uptime:notification";

    //TODO: bring poll here 
   // await createGroup(consumerGroup, stream);
    while(1) {
    const res = await processXRead(stream, workerId, consumerGroup, len) as {
        name: string;
        messages: {
            id: string;
            message: {
                id: string,
                url: string,
                timeAdded: string,
                userId: string
            };
        }[]
    }[];

    console.log(res[0]?.messages)
    res[0]?.messages.map(async ({ id, message }) => {
        const websiteId = message.id;
        const url = message.url;
        const userId = message.userId;

        if (!websiteId || !url || !userId) {
            return;
        }

        const result = await pollWebsite(url);

        if(result?.status == undefined) {
            return;
        }

        // console.log(result.status)
        const status = result.status == true ? "Up" : "Down"

        if (status == "Down") {
            //send notification if status is down
            //two streams, store incident in db and notification

            //sending message to notification worker
            const result = await client.user.findFirst({
                where: {
                    id: userId
                }
            })

            const email = result?.email

            
            const notifyData = {
                url: url,
                email: email!
            }
            await processXAdd(notifyData, notify_stream);

            //sending message to db worker
           
            const AlertData = {
                name: "create@alert",
                type: "Ping",
                subType: "",
                userId: userId,
                url: url,
                id: websiteId
            }

            await processXAdd(AlertData, db_stream);

        }

        const responseTime = result!.responseTime;
        const data = {
            name: "create@ticks",
            type: "Ping",
            subType: "",
            status: status,
            responseTime: responseTime.toString(),
            id: websiteId,
            userId: userId
        }
        await processXAdd(data, db_stream);

      //  console.log("send message ******************************************",)
        await xAck(stream, consumerGroup, id);
    })
    }
}

main()