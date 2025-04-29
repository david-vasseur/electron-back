/*
  Warnings:

  - A unique constraint covering the columns `[hmac]` on the table `user` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `public` to the `event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `firstname` to the `user` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hmac` to the `user` table without a default value. This is not possible if the table is not empty.
  - Added the required column `isverified` to the `user` table without a default value. This is not possible if the table is not empty.
  - Made the column `email` on table `user` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `event` ADD COLUMN `public` BOOLEAN NOT NULL;

-- AlterTable
ALTER TABLE `user` ADD COLUMN `firstname` VARCHAR(255) NOT NULL,
    ADD COLUMN `hmac` VARCHAR(255) NOT NULL,
    ADD COLUMN `isverified` BOOLEAN NOT NULL,
    MODIFY `email` VARCHAR(255) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `user_hmac_key` ON `user`(`hmac`);
