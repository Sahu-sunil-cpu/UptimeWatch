//TODO: make class of redis 
// import { createClient, RedisClientType } from "redis";

// class RedisManager {
//     private static instance: RedisManager;
//     redisClient: RedisClientType;
//     private constructor() {
//         this.redisClient = this.initClient()
//     }

//     async initClient() {
//         const redisClient = createClient();

//         redisClient.on("error", (err) => console.log("Redis Client Error", err));
      
//         await redisClient.connect(); // Connect first
//         return redisClient;  
//     }
// }