-- AlterTable
ALTER TABLE "Website" ALTER COLUMN "timeAdded" SET DEFAULT CURRENT_TIMESTAMP;

-- CreateTable
CREATE TABLE "Incident" (
    "id" TEXT NOT NULL,
    "website_id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Incident_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Incident" ADD CONSTRAINT "Incident_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
