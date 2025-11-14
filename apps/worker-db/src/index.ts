import "dotenv/config";
import { createGroup, processXRead, xAck } from "@repo/redis-stream"
import { client } from "@repo/db/client"
import { Alert, Channel, DnsStatus, IncomingMessage, PingStatus } from "./types";


async function main() {
    const workerId = process.env.WORKER_ID!;
    const stream = "uptime:db1";
    const consumerGroup = "DB";
    const len = 10;

    await createGroup(consumerGroup, stream);

    while (1) {
        const res = await processXRead(stream, workerId, consumerGroup, len) as {
            name: string;
            messages: {
                id: string;
                message: IncomingMessage;
            }[]
        }[];

        res[0]?.messages.map(async ({ id, message }) => {
           console.log(message)
            try {
                if (message.name == "create@alert") {
                    const alertMessage = await createAlertMessage(message.type);
                    createAlert(message.subType, message.id, message.userId, alertMessage!, "Email", message.type);
                }

                if (message.name == "create@ticks") {
                    if (message.type == "Dns") {
                        await client.dnsTick.create({
                            data: {
                                status: message.status as DnsStatus,
                                latency_ms: Number(message.responseTime),
                                resolver_ip: "",
                                region: "USA",
                                dns_id: message.id,
                                userId: message.userId,
                            }
                        })
                    }

                    if (message.type == "Ping") {
                        console.log("yes")
                        await client.websiteTick.create({
                            data: {
                                status: message.status as PingStatus || "Unknown",
                                response_time_ms: Number(message.responseTime),
                                region: "USA",
                                website_id: message.id,
                                userId: message.userId
                            }
                        })
                    }

                }

                await xAck(stream, consumerGroup, id);


            } catch (error) {
                console.log(error)
            }
        })
    }

}

main();


async function createAlert(type: string, id: string, userId: string, msg: string, channelType: Channel, alertType: Alert) {

    await client.alerts.create({
        data: {
            website_id: id,
            userId: userId,
            msg: msg,
            alert_type: alertType,
            type: channelType
        }
    })
}

async function createAlertMessage(type: string) {
    if (type == "Dns") {
        return "dns problem"
    }

    if (type == "Ping") {
        return "website is down"
    }
}