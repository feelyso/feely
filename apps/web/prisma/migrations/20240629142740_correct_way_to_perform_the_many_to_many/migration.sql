/*
  Warnings:

  - You are about to drop the `_voters` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_voters" DROP CONSTRAINT "_voters_A_fkey";

-- DropForeignKey
ALTER TABLE "_voters" DROP CONSTRAINT "_voters_B_fkey";

-- DropTable
DROP TABLE "_voters";

-- CreateTable
CREATE TABLE "votedIdea" (
    "ideaId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "votedIdea_pkey" PRIMARY KEY ("ideaId","userId")
);

-- AddForeignKey
ALTER TABLE "votedIdea" ADD CONSTRAINT "votedIdea_ideaId_fkey" FOREIGN KEY ("ideaId") REFERENCES "idea"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "votedIdea" ADD CONSTRAINT "votedIdea_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
