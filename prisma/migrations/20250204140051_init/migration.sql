/*
  Warnings:

  - Added the required column `client_id` to the `Receivedmoney` table without a default value. This is not possible if the table is not empty.
  - Made the column `clientid` on table `Sendmoney` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Admin" ADD COLUMN     "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updateAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "Client" ADD COLUMN     "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updateAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "Receivedmoney" ADD COLUMN     "client_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Sendmoney" ALTER COLUMN "clientid" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "Sendmoney" ADD CONSTRAINT "Sendmoney_clientid_fkey" FOREIGN KEY ("clientid") REFERENCES "Client"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Receivedmoney" ADD CONSTRAINT "Receivedmoney_client_id_fkey" FOREIGN KEY ("client_id") REFERENCES "Client"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
