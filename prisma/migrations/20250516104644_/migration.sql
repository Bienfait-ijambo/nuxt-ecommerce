-- CreateTable
CREATE TABLE "productStarPercent" (
    "id" SERIAL NOT NULL,
    "productId" INTEGER NOT NULL,
    "times" INTEGER NOT NULL,
    "star" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "productStarPercent_pkey" PRIMARY KEY ("id")
);


ALTER TABLE "productStarPercent" ADD CONSTRAINT "productStarPercent_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
