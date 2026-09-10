import * as runtime from "@prisma/client/runtime/client";
import * as $Class from "./internal/class.js";
import * as Prisma from "./internal/prismaNamespace.js";
export * as $Enums from './enums.js';
export * from "./enums.js";
/**
 * ## Prisma Client
 *
 * Type-safe database client for TypeScript
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Websites
 * const websites = await prisma.website.findMany()
 * ```
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export declare const PrismaClient: $Class.PrismaClientConstructor;
export type PrismaClient<LogOpts extends Prisma.LogLevel = never, OmitOpts extends Prisma.PrismaClientOptions["omit"] = Prisma.PrismaClientOptions["omit"], ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = $Class.PrismaClient<LogOpts, OmitOpts, ExtArgs>;
export { Prisma };
/**
 * Model Website
 *
 */
export type Website = Prisma.WebsiteModel;
/**
 * Model Dns
 *
 */
export type Dns = Prisma.DnsModel;
/**
 * Model WebsiteTick
 *
 */
export type WebsiteTick = Prisma.WebsiteTickModel;
/**
 * Model DnsTick
 *
 */
export type DnsTick = Prisma.DnsTickModel;
/**
 * Model DnsRecord
 *
 */
export type DnsRecord = Prisma.DnsRecordModel;
/**
 * Model User
 *
 */
export type User = Prisma.UserModel;
/**
 * Model Alerts
 *
 */
export type Alerts = Prisma.AlertsModel;
/**
 * Model Region
 *
 */
export type Region = Prisma.RegionModel;
//# sourceMappingURL=client.d.ts.map