import { processXAdd } from "@repo/redis-stream"
import { client } from "@repo/db/client"

/**
 * get websites from db
 * pass to the xAdd function
 */

// export interface Website {
//     id: string,
//     url: string,
//     timeAdded: Date,
//     userId: string
// }


async function main() {

    const stream = "uptime:app"
    const dns_stream = "uptime:dns1"

    setInterval(async () => {
        const websites = await client.website.findMany();

        websites.map(async (w) => {
            console.log(w)
            if (w.active == false) return;
            const data = {
                id: w.id,
                url: w.url,
                timeAdded: w.updatedAt.toISOString(),
                userId: w.userId
            }

            processXAdd(data, stream)
        })

        const dns = await client.dns.findMany();

        dns.map(async (d) => {
            
            if (d.active == false) return;
            const data = {
                id: d.id,
                userId: d.userId,
                domain: d.domain,
                ip_addr: d.ip_addr,
                resolver: d.resolver,
                interval: d.interval.toString(),
                authoritative: 'false'
            }

            processXAdd(data, dns_stream)
            console.log(d)

        })
    }, 1000 * 30)

    //TODO: optimize it to better cron job


}

main();