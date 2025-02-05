/*
  Warnings:

  - You are about to drop the column `client_id` on the `Receivedmoney` table. All the data in the column will be lost.
  - Made the column `clientid` on table `Receivedmoney` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Receivedmoney" DROP CONSTRAINT "Receivedmoney_client_id_fkey";

-- AlterTable
ALTER TABLE "Receivedmoney" DROP COLUMN "client_id",
ALTER COLUMN "clientid" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "Receivedmoney" ADD CONSTRAINT "Receivedmoney_clientid_fkey" FOREIGN KEY ("clientid") REFERENCES "Client"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
