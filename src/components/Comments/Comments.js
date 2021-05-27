import React from "react";
import useCommentApiCall from "../../hooks/useCommentApiCall";
import Thread from "./Thread";

const Comments = ({ ids }) => {
  const [comments, loading] = useCommentApiCall(ids);

  const mappedThreads = comments.map((thread) => (
    <div className="thread-heading">
      <Thread thread={thread} key={thread.id} />
    </div>
  ));

  return (
    <div className="container comment-container">
      {loading ? (
        <>
          <h1>Loading...</h1>{" "}
        </>
      ) : (
        <div className="threads">{mappedThreads}</div>
      )}
    </div>
  );
};

export default Comments;
