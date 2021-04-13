/*
  Warnings:

  - You are about to drop the column `parkingId` on the `parking` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[lotId]` on the table `Parking` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `lotId` to the `Parking` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `parking` DROP FOREIGN KEY `parking_ibfk_3`;

-- AlterTable
ALTER TABLE `parking` DROP COLUMN `parkingId`,
    ADD COLUMN     `lotId` INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Parking_lotId_unique` ON `Parking`(`lotId`);

-- AddForeignKey
ALTER TABLE `Parking` ADD FOREIGN KEY (`lotId`) REFERENCES `Lot`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
