/*
  Warnings:

  - You are about to drop the column `enabled` on the `Dns` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Dns" DROP COLUMN "enabled",
ADD COLUMN     "active" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "Website" ADD COLUMN     "active" BOOLEAN NOT NULL DEFAULT false;
