/*
  Warnings:

  - Added the required column `userId` to the `Parking` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `parking` ADD COLUMN     `userId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `Parking` ADD FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
