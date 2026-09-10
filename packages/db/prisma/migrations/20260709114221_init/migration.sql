-- CreateEnum
CREATE TYPE "Alert" AS ENUM ('Dns', 'Ping');

-- CreateEnum
CREATE TYPE "AlertStatus" AS ENUM ('Ongoing', 'Resolved');

-- CreateEnum
CREATE TYPE "MsgType" AS ENUM ('Email', 'Sms', 'Slack', 'Discord', 'Call');

-- CreateEnum
CREATE TYPE "WebsiteStatus" AS ENUM ('Up', 'Down', 'Unknown');

-- CreateEnum
CREATE TYPE "DnsStatus" AS ENUM ('Ok', 'Warning', 'Fail');

-- CreateEnum
CREATE TYPE "Record" AS ENUM ('A', 'AAAA', 'MX', 'CNAME');

-- CreateTable
CREATE TABLE "Website" (
    "id" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Website_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Dns" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "domain" TEXT NOT NULL,
    "ip_addr" TEXT NOT NULL,
    "resolver" TEXT,
    "interval" INTEGER NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "authoritative" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Dns_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WebsiteTick" (
    "id" TEXT NOT NULL,
    "response_time_ms" INTEGER NOT NULL,
    "status" "WebsiteStatus" NOT NULL,
    "region" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "website_id" TEXT NOT NULL,
    "CreatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "WebsiteTick_pkey" PRIMARY KEY ("id")
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
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Alerts" (
    "id" TEXT NOT NULL,
    "website_id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "alert_type" "Alert" NOT NULL,
    "type" "MsgType" NOT NULL,
    "verified" BOOLEAN DEFAULT false,
    "status" "AlertStatus" NOT NULL DEFAULT 'Ongoing',
    "msg" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Alerts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Region" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Region_name_key" ON "Region"("name");

-- AddForeignKey
ALTER TABLE "Website" ADD CONSTRAINT "Website_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WebsiteTick" ADD CONSTRAINT "WebsiteTick_website_id_fkey" FOREIGN KEY ("website_id") REFERENCES "Website"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DnsTick" ADD CONSTRAINT "DnsTick_dns_id_fkey" FOREIGN KEY ("dns_id") REFERENCES "Dns"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Alerts" ADD CONSTRAINT "Alerts_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
