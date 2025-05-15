-- CreateTable
CREATE TABLE "productStar" (
    "id" SERIAL NOT NULL,
    "productId" INTEGER NOT NULL,
    "receivedStars" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "productStar_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "productStar" ADD CONSTRAINT "productStar_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
