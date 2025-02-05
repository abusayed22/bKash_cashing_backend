-- CreateTable
CREATE TABLE "Sendmoney" (
    "id" SERIAL NOT NULL,
    "clientid" INTEGER,
    "number" TEXT,
    "amount" DECIMAL(65,30),
    "method" TEXT,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Sendmoney_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Receivedmoney" (
    "id" SERIAL NOT NULL,
    "clientid" INTEGER,
    "amount" DECIMAL(65,30),
    "note" TEXT,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Receivedmoney_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Sendmoney_id_key" ON "Sendmoney"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Receivedmoney_id_key" ON "Receivedmoney"("id");
