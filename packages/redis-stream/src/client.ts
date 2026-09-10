import { createClient, RedisClientType } from "redis";
import "dotenv/config"

export const redis: RedisClientType = createClient({
  url: process.env.REDIS_URL,
});

redis.on("error", (err) => {
  console.error("Redis error:", err);
});

let connecting: Promise<any> | null = null;

export async function connectRedis() {
  if (redis.isOpen) return;

  if (!connecting) {
    connecting = redis.connect();
  }

  await connecting;
}