/*
  Warnings:

  - You are about to drop the column `timeAdded` on the `Website` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Dns" ALTER COLUMN "createdAt" SET DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "Website" DROP COLUMN "timeAdded",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
