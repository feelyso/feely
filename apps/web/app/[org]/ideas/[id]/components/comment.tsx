import React, { useCallback, useState } from "react";
import { CommentType } from "app/types/comment";
import { useReplyComment, useVoteComment } from "app/api/controllers/commentController";
import { Input } from "@feely/ui/components/input";
import { Button } from "@feely/ui/components/button";
import { Loader } from "@feely/ui/components/icon";

interface IProps {
  comment: CommentType;
}

const CommentCard = ({ comment }: IProps) => {
  const { mutate: voteComment } = useVoteComment();
  const handleClickVoteComment = useCallback(() => {
    voteComment({ id: comment.id, isVoted: !comment.isVoted, ideaId: comment.ideaId });
  }, [comment.id, comment.isVoted, comment.ideaId, voteComment]);

  const [showReplySection, setShowReplySection] = useState(false);

  const [reply, setReply] = useState<string>("");

  const { mutateAsync: createCommentAsync, isLoading: isLoadingCreateComment } = useReplyComment();

  const handleComment = async () => {
    try {
      await createCommentAsync({
        ideaId: comment.ideaId,
        reply: reply,
        id: comment.id,
      });
      setReply("");
    } catch (e) {}
  };

  return (
    <div className="flex flex-col">
      <div className="flex w-full justify-between">
        <span>{comment.author.name}</span>
        <span>{new Date(comment.created_at).toLocaleString()}</span>
      </div>
      <span>{comment.text}</span>
      <div className="flex  gap-2">
        <span className="cursor-pointer" onClick={handleClickVoteComment}>
          {comment.isVoted ? "Downvote" : "Upvote"}
          {` (${comment.votes.length})`}
        </span>
        <span className="cursor-pointer" onClick={() => setShowReplySection((prev) => !prev)}>
          Reply
        </span>
      </div>
      {showReplySection && (
        <div className="flex flex-col items-end gap-2">
          <Input
            placeholder={`Reply to ${comment.author.name}`}
            value={reply}
            onChange={(ev) => setReply(ev.target.value)}
            className="w-full"
          />
          <Button
            disabled={!reply}
            onClick={() => {
              if (!isLoadingCreateComment) handleComment();
            }}
            className="w-fit">
            {isLoadingCreateComment ? <Loader /> : "Comment"}
          </Button>
        </div>
      )}
      <div className="flex flex-col gap-2 pl-12">
        {comment.childComments.map((childComment) => {
          return (
            <div key={childComment.id} className="flex flex-col">
              <span>{childComment.author.name}</span>
              <span>{new Date(childComment.created_at).toLocaleString()}</span>
              <span>{childComment.text}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CommentCard;
