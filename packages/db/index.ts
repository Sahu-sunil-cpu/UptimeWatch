import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "./generated/prisma/client.js";

console.log("cwd:", process.cwd());
const connectionString = `${process.env.DATABASE_URL}`;
console.log("database url: " + connectionString)

const adapter = new PrismaPg({ connectionString });
const client: PrismaClient = new PrismaClient({ adapter });

export { client };

//console.log(process.env["DATABASE_URL"])