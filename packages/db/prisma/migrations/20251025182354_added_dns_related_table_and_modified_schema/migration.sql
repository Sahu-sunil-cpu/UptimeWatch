/*
  Warnings:

  - You are about to drop the column `region_id` on the `WebsiteTick` table. All the data in the column will be lost.
  - You are about to drop the `Incident` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Region` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `region` to the `WebsiteTick` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Alert" AS ENUM ('Dns', 'Ping');

-- CreateEnum
CREATE TYPE "MsgType" AS ENUM ('Email', 'Sms', 'Slack', 'Discord', 'Call');

-- CreateEnum
CREATE TYPE "DnsStatus" AS ENUM ('Ok', 'Warning', 'Fail');

-- CreateEnum
CREATE TYPE "Record" AS ENUM ('A', 'AAAA', 'MX', 'CNAME');

-- DropForeignKey
ALTER TABLE "public"."Incident" DROP CONSTRAINT "Incident_userId_fkey";

-- DropForeignKey
ALTER TABLE "public"."WebsiteTick" DROP CONSTRAINT "WebsiteTick_region_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."WebsiteTick" DROP CONSTRAINT "WebsiteTick_website_id_fkey";

-- AlterTable
ALTER TABLE "WebsiteTick" DROP COLUMN "region_id",
ADD COLUMN     "region" TEXT NOT NULL;

-- DropTable
DROP TABLE "public"."Incident";

-- DropTable
DROP TABLE "public"."Region";

-- CreateTable
CREATE TABLE "Dns" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "domain" TEXT NOT NULL,
    "ip_addr" TEXT NOT NULL,
    "resolver" TEXT,
    "interval" INTEGER NOT NULL,
    "enabled" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "authoritative" BOOLEAN NOT NULL,

    CONSTRAINT "Dns_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DnsTick" (
    "id" TEXT NOT NULL,
    "latency_ms" INTEGER NOT NULL,
    "status" "DnsStatus" NOT NULL,
    "region" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "dns_id" TEXT NOT NULL,
    "check_id" TEXT,
    "resolver_ip" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "CreatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "DnsTick_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DnsRecord" (
    "id" TEXT NOT NULL,
    "type" "Record" NOT NULL,
    "response" TEXT,
    "region" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "dns_id" TEXT NOT NULL,

    CONSTRAINT "DnsRecord_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Alerts" (
    "id" TEXT NOT NULL,
    "website_id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "alert_type" "Alert" NOT NULL,
    "type" "MsgType" NOT NULL,
    "verified" BOOLEAN DEFAULT false,
    "msg" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Alerts_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Alerts" ADD CONSTRAINT "Alerts_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
