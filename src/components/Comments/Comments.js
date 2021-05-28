import React from "react";
import useCommentApiCall from "../../hooks/useCommentApiCall";
import Thread from "./Thread";

const Comments = ({ ids, title }) => {
  const savedIds = JSON.parse(window.localStorage.getItem("ids"));
  const savedTitle = window.localStorage.getItem("title");

  const [comments, loading] = useCommentApiCall(savedIds || ids, title);

  const mappedThreads = comments.map((thread) => (
    <div className="thread-heading">
      <Thread thread={thread} key={thread.id} />
    </div>
  ));

  return (
    <div className="container comment-container">
      {console.log(comments)}
      {loading ? (
        <>
          <h1>Loading...</h1>{" "}
        </>
      ) : (
        <>
          <div className="thread-title">{title || savedTitle}</div>
          <div className="threads">{mappedThreads}</div>
        </>
      )}
    </div>
  );
};

export default Comments;
