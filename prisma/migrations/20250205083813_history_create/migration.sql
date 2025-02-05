/*
  Warnings:

  - Added the required column `number` to the `Receivedmoney` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Receivedmoney" ADD COLUMN     "method" TEXT,
ADD COLUMN     "number" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "History" (
    "id" SERIAL NOT NULL,
    "clientid" INTEGER NOT NULL,
    "amount" DECIMAL(65,30) NOT NULL,
    "note" TEXT,
    "status" TEXT,
    "number" TEXT,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "History_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "History_id_key" ON "History"("id");

-- AddForeignKey
ALTER TABLE "History" ADD CONSTRAINT "History_clientid_fkey" FOREIGN KEY ("clientid") REFERENCES "Client"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
