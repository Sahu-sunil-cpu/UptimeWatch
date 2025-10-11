import { client } from "@repo/db/client"

export async function pollWebsite(url: string): Promise<{status: boolean, responseTime: number} | undefined> {

    try {
        const startTime = Date.now();
    const res = await fetch(url);
    const endTime = Date.now();
    const responseTime = endTime - startTime;

    // console.log(`Status: ${res.status}`);
    // console.log(`url: ${url}`);
    // console.log(`Response time: ${endTime - startTime} ms`);

    const status = res.status == 200 ? true : false
    return { status, responseTime };
    
    } catch (error) {
        console.log(error)
    }
   
}

export async function createRegion(name: string): Promise<string> {
    const regionExist = await client.region.findFirst({
        where: {
            name: name
        }
    })

    if (regionExist) {
        return regionExist.id;
    }

    const result = await client.region.create({
        data: {
            name: name
        }
    })

    return result.id;
}