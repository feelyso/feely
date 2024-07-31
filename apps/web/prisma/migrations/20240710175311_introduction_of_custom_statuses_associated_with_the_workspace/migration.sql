/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `workspace` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `workspaceId` to the `status` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "status" ADD COLUMN     "workspaceId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "workspace_name_key" ON "workspace"("name");

-- AddForeignKey
ALTER TABLE "status" ADD CONSTRAINT "status_workspaceId_fkey" FOREIGN KEY ("workspaceId") REFERENCES "workspace"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
