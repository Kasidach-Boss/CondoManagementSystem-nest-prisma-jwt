/*
  Warnings:

  - A unique constraint covering the columns `[carId]` on the table `Parking` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `carId` to the `Parking` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `parking` ADD COLUMN     `carId` INTEGER NOT NULL,
    ADD COLUMN     `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- CreateIndex
CREATE UNIQUE INDEX `Parking_carId_unique` ON `Parking`(`carId`);

-- AddForeignKey
ALTER TABLE `Parking` ADD FOREIGN KEY (`carId`) REFERENCES `Car`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
