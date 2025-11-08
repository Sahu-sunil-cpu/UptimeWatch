import { createGroup, processXAdd, processXRead, xAck } from "@repo/redis-stream";
import { createRegion, pollWebsite } from "@repo/package-helper";
import "dotenv/config";
import { client } from "@repo/db/client";
import { promises as dns } from 'dns';
import dns2, { Packet, TCPClient, UDPClient } from 'dns2';
/*
create region id
create worker id
read message -> return message
verifyDNS
*/

async function main() {
  const workerId = process.env.WORKER_ID!;
  const regionId = await createRegion('brazil');
  const stream = "uptime:dns1";
  const consumerGroup = "Brazil";
  const len = 10;
  const notify_stream = "uptime:notification";
  const db_stream = "uptime:db1";



  //TODO: bring poll here 
 // await createGroup(consumerGroup, stream);
  while (1) {

    // TODO: can create separate function instead of eriting it repeatedly
    const res = await processXRead(stream, workerId, consumerGroup, len) as {
      name: string;
      messages: {
        id: string;
        message: {
          id: string;
          userId: string;
          domain: string;
          ip_addr: string;
          resolver: string;
          interval: string;
          authoritative: string;
        };
      }[]
    }[];

    console.log(res)
    res[0]?.messages.map(async ({ id, message }) => {
      const domainId = message.id;
      const domain = message.domain;
      const userId = message.userId;
      const resolver = message.resolver;

      if (!domainId || !domain || !userId) {
        return;
      }

      const result = await verifyDns(domain, resolver);

      if (result == undefined) {
        return;
      }

      console.log("dns result:", result)
      const status = result == true ? "Ok" : "Fail"

      if (status == "Fail") {
        // send Alert if ASN (Autonomus System Number) does not match,
        // i.e. authoritative and caching/recursive
        // two streams, store incident in db and Alert 

        // sending message to Alert worker
        const result = await client.user.findFirst({
          where: {
            id: userId
          }
        })

        const email = result?.email

        const alertData = {
          url: domain,
          email: email!
        }
        await processXAdd(alertData, notify_stream);

        // sending message to db worker
        const AlertData = {
          name: "create@alert",
          type: "Dns",
          subType: "ASN", // (Autonomous System Number)
          userId: userId,
          url: domain,
          id: domainId
        }

        await processXAdd(AlertData, db_stream);

      }

      /*
       not generating alerts in case of high latency of dns request and response
       rather charts on frontend is enough
      */

      const responseTime = await getDNSResponseTime(domain);
      const data = {
        name: "create@ticks",
        type: "Dns",
        subType: "",
        status: status,
        responseTime: responseTime.toString(),
        id: domainId,
        userId: userId
      }
      await processXAdd(data, db_stream);

      console.log("send message ******************************************")
     await xAck(stream, consumerGroup, id);
   })
  }
}

  main()



// TODO: can be in separate DNS package 
async function verifyDns(domain: string, resolver: string | null): Promise<boolean | undefined> {
  try {
    console.log(domain)
    // get authoritative nameservers
    const nsRecords: string[] = await dns.resolveNs(domain);

    console.log("nsRecords: ", nsRecords);

    const authoritativeServer = nsRecords[0];

    if (!authoritativeServer) {
      console.error(`No authoritative servers found for ${domain}`);
      return;
    }

    console.log(`Authoritative server: ${authoritativeServer}`);


    // query authoritative server directly
    const authResolver = UDPClient({ dns: authoritativeServer });

    const authResponse = await authResolver(domain);

    // console.log(authResponse.answers);

    //  query public resolver (Google DNS), if resolver is null
    const customResolver = await UDPClient({ dns: resolver || "8.8.8.8" });
    const type = Packet.TYPE.A;
    const publicResponse = await customResolver(domain);

    //const publicResponse = await googleResolver(domain, "MX");

    // console.log(publicResponse.answers)

    // extract addresses
    const authAddresses = authResponse.answers
      .filter(a => a.type === Packet.TYPE.A)
      .map(a => a.address);

    const publicAddresses = publicResponse.answers
      .filter(a => a.type === Packet.TYPE.A)
      .map(a => a.address);

    // compare and log
    console.log('\nAuthoritative:', authAddresses);
    console.log('Public (Google):', publicAddresses);

    const res1: any = await getIpInfo(authAddresses[0]!);
    const res2: any = await getIpInfo(publicAddresses[0]!);

    const result = res1.org === res2.org ? true : false;

    return result;
  } catch (err) {
    console.error('Error verifying DNS:', err);
  }
}

async function getDNSResponseTime(domain: string) {
  const options = {
    // available options
    // dns: dns server ip address or hostname (string),
    // port: dns server port (number),
    // recursive: Recursion Desired flag (boolean, default true, since > v1.4.2)
  };
  const dns = new dns2(options);

  const startTime = Date.now();
  const result = await dns.resolveA(domain);
  const endTime = Date.now();

  console.log("response time:", endTime - startTime + "ms");
  return endTime - startTime;
}

async function getIpInfo(ip: string) {
  const res = await fetch(`https://ipinfo.io/${ip}/json`);
  return res.json();
}
