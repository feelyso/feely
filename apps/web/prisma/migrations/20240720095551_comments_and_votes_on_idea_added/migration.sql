-- AlterTable
ALTER TABLE "status" ALTER COLUMN "order" DROP DEFAULT;

-- CreateTable
CREATE TABLE "comment" (
    "id" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "authorId" TEXT NOT NULL,
    "ideaId" TEXT NOT NULL,
    "parentId" TEXT,

    CONSTRAINT "comment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "votedComment" (
    "commentId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "votedComment_pkey" PRIMARY KEY ("commentId","userId")
);

-- AddForeignKey
ALTER TABLE "comment" ADD CONSTRAINT "comment_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "comment" ADD CONSTRAINT "comment_ideaId_fkey" FOREIGN KEY ("ideaId") REFERENCES "idea"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "comment" ADD CONSTRAINT "comment_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "comment"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "votedComment" ADD CONSTRAINT "votedComment_commentId_fkey" FOREIGN KEY ("commentId") REFERENCES "comment"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "votedComment" ADD CONSTRAINT "votedComment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
