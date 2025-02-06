/*
  Warnings:

  - You are about to alter the column `amount` on the `History` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Decimal(30,2)`.
  - You are about to alter the column `amount` on the `Receivedmoney` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Decimal(30,2)`.
  - You are about to alter the column `amount` on the `Sendmoney` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Decimal(30,2)`.

*/
-- AlterTable
ALTER TABLE "History" ALTER COLUMN "amount" SET DATA TYPE DECIMAL(30,2);

-- AlterTable
ALTER TABLE "Receivedmoney" ALTER COLUMN "amount" SET DATA TYPE DECIMAL(30,2);

-- AlterTable
ALTER TABLE "Sendmoney" ALTER COLUMN "amount" SET DATA TYPE DECIMAL(30,2);
