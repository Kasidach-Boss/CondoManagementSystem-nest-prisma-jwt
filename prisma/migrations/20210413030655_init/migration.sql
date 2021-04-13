/*
  Warnings:

  - You are about to drop the column `carId` on the `parking` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `parking` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `parking` DROP FOREIGN KEY `parking_ibfk_2`;

-- AlterTable
ALTER TABLE `parking` DROP COLUMN `carId`,
    DROP COLUMN `createdAt`;
