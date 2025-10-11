import "dotenv/config";
import { createGroup, processXRead, xAck } from "@repo/redis-stream"
import { client } from "@repo/db/client"

type IncomingMessage = {
    name: "create@ticks",
    status: "Up" | "Down",
    responseTime: string,
    regionId: string,
    websiteId: string,
    userId: string
} | {
    name: "create@alert",
    userId: string,
    url: string,
    websiteId: string
}

async function main() {
    const workerId = process.env.WORKER_ID!;
    const stream = "uptime:db1";
    const consumerGroup = "DB";
    const len = 10;

   // await createGroup(consumerGroup, stream);

    while (1) {
        const res = await processXRead(stream, workerId, consumerGroup, len) as {
            name: string;
            messages: {
                id: string;
                message: IncomingMessage;
            }[]
        }[];

        res[0]?.messages.map(async ({ id, message }) => {

            try {
                if (message.name == "create@alert") {
                    await client.incident.create({
                        data: {
                            website_id: message.websiteId,
                            userId: message.userId,
                        }
                    })
                }

                if (message.name == "create@ticks") {

                    await client.websiteTick.create({
                        data: {
                            status: message.status || "Unknown",
                            response_time_ms: Number(message.responseTime),
                            region_id: message.regionId,
                            website_id: message.websiteId,
                            userId: message.userId
                        }
                    })
                }

                await xAck(stream, consumerGroup, id);


            } catch (error) {
                console.log(error)
            }
        })
    }

}

main();
