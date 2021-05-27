import React from "react";
import "../../styles/CommentStyles.css";
const Thread = ({ thread }) => {
  const replies = () => thread.comments.filter((t) => t.parent === thread.id);
  return (
    <>
      <div className="thread">thread</div>
      {replies().map((reply) => (
          <div className="reply">
              <Thread thread={reply} key={reply.id}/>
          </div>
      ))}
    </>
  );
};
export default Thread;
