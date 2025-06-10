/*
  Warnings:

  - Changed the type of `category` on the `product` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "ProductCategory" AS ENUM ('MOBILE', 'LAPTOP', 'WATCH', 'OTHER');

-- AlterTable
ALTER TABLE "product" DROP COLUMN "category",
ADD COLUMN     "category" "ProductCategory" NOT NULL;
