/*
  Warnings:

  - You are about to alter the column `expire` on the `sticker` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `DateTime(3)`.

*/
-- AlterTable
ALTER TABLE `sticker` MODIFY `expire` DATETIME(3) NOT NULL;
