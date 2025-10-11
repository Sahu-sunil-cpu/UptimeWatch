import { processXAdd } from "@repo/redis-stream"
import { client } from "@repo/db/client"

/**
 * get websites from db
 * pass to the xAdd function
 */

export interface Website {
    id: string,
    url: string,
    timeAdded: Date,
    userId: string
}

async function main() {

    const stream = "uptime:app"

    setInterval(async () => {
        const websites: Website[] = await client.website.findMany();

        websites.map(async (w) => {
            console.log(w)
            const data = {
                id: w.id,
                url: w.url,
                timeAdded: w.timeAdded.toISOString(),
                userId: w.userId
            }
    
            processXAdd(data, stream)
        })
    }, 1000 * 60 * 2)
}

main();