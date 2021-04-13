/*
  Warnings:

  - You are about to drop the `_cartosticker` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `carId` to the `Sticker` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `_cartosticker` DROP FOREIGN KEY `_cartosticker_ibfk_1`;

-- DropForeignKey
ALTER TABLE `_cartosticker` DROP FOREIGN KEY `_cartosticker_ibfk_2`;

-- AlterTable
ALTER TABLE `sticker` ADD COLUMN     `carId` INTEGER NOT NULL;

-- DropTable
DROP TABLE `_cartosticker`;

-- AddForeignKey
ALTER TABLE `Sticker` ADD FOREIGN KEY (`carId`) REFERENCES `Car`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
