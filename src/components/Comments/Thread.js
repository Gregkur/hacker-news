import React from "react";

import { v4 as uuidv4 } from "uuid";

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
        <div className="reply" key={uuidv4()}>
          <Thread
            thread={reply}
            key={uuidv4()}
            dangerouslySetInnerHTML={{ __html: reply.text }}
          />
        </div>
      ))}
    </>
  );
};
export default Thread;
