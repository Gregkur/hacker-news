import React from "react";
import useCommentApiCall from "../../hooks/useCommentApiCall";
import Spinner from "../Spinner";
import Thread from "./Thread";

const Comments = ({ ids, title, url }) => {
  const savedIds = JSON.parse(window.localStorage.getItem("ids"));
  const savedTitle = window.localStorage.getItem("title");
  const savedUrl = window.localStorage.getItem("url");

  const [comments, loading] = useCommentApiCall(ids || savedIds, title, url);

  const mappedThreads = comments.map((thread) => (
    <div className="thread-heading">
      <Thread thread={thread} key={thread.id} />
    </div>
  ));

  return (
    <div className="container comment-container">
      {loading ? (
        <Spinner />
      ) : (
        <>
          <div className="thread-title">
            <a href={url || savedUrl} target="_blank" rel="noreferrer">
              {title || savedTitle}
            </a>
          </div>
          <div className="threads">{mappedThreads}</div>
        </>
      )}
    </div>
  );
};

export default Comments;
