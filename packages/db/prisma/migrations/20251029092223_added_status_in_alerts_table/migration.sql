-- CreateEnum
CREATE TYPE "AlertStatus" AS ENUM ('Ongoing', 'Resolved');

-- AlterTable
ALTER TABLE "Alerts" ADD COLUMN     "status" "AlertStatus" NOT NULL DEFAULT 'Ongoing';
