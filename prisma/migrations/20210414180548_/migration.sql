/*
  Warnings:

  - Added the required column `keycard_no` to the `Sticker` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `sticker` ADD COLUMN     `keycard_no` VARCHAR(191) NOT NULL;
