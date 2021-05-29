import React from "react";

import { unixToDate } from "../../helpers/timeHelpers";

import "../../styles/CommentStyles.css";
const Thread = ({ thread }) => {
  const replies = () => thread.comments.filter((t) => t.parent === thread.id);
  return (
    <>
      <div className="reply-by">
        <span>{thread.by}</span> | {unixToDate(thread.time)}
      </div>
      <div
        className="thread"
        dangerouslySetInnerHTML={{ __html: thread.text }}></div>
      {replies().map((reply) => (
          <div className="reply" innerHTML={{ __html: reply.text }}>
            <Thread thread={reply} key={reply.id} />
          </div>
      ))}
    </>
  );
};
export default Thread;
