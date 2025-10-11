import FormData from "form-data"; // form-data v4.0.1
import Mailgun from "mailgun.js"; // mailgun.js v11.1.0
import "dotenv/config";
import { createGroup, processXRead } from "@repo/redis-stream"


async function main() {
    const workerId = process.env.WORKER_ID!;
    const stream = "uptime:notification";
    const consumerGroup = "NOTIFY-1";
    const len = 10;

   // await createGroup(consumerGroup, stream);

    while (1) {
        const res = await processXRead(stream, workerId, consumerGroup, len) as {
            name: string;
            messages: {
                id: string;
                message: {
                    url: string,
                    email: string,
                };
            }[]
        }[];

        res[0]?.messages.map(async ({ id, message }) => {
            const url = message.url;
            const email = message.email;

            if (!url || !email) {
                return;
            }

            sendSimpleMessage(email, url);

        })
    }

}

main();

async function sendSimpleMessage(email: string, url: string) {
    console.log(email)
    const mailgun = new Mailgun(FormData);
    const mg = mailgun.client({
        username: "api",
        key: process.env.API_KEY_1!,
        // When you have an EU-domain, you must specify the endpoint:
        // url: "https://api.eu.mailgun.net"
    });
    try {
        const data = await mg.messages.create("sandboxcb8ee02ea9df4f408ae6471ef0e32b2e.mailgun.org", {
            from: "Mailgun Sandbox <postmaster@sandboxcb8ee02ea9df4f408ae6471ef0e32b2e.mailgun.org>",
            to: [`sunil sahu <${email}>`],
            subject: `Alert!!! url: ${url} `,
            text: "Congratulations sunil sahu, you just have an alert from Uptime Watch",
        });

        console.log(data); // logs response data
    } catch (error) {
        console.log(error); //logs any error
    }
}

