/*
  Warnings:

  - You are about to drop the column `lotId` on the `parking` table. All the data in the column will be lost.
  - Added the required column `slotId` to the `Parking` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `parking` DROP FOREIGN KEY `parking_ibfk_1`;

-- AlterTable
ALTER TABLE `parking` DROP COLUMN `lotId`,
    ADD COLUMN     `slotId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `Parking` ADD FOREIGN KEY (`slotId`) REFERENCES `Lot`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
