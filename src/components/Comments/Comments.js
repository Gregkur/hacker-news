import useCommentApiCall from "../../hooks/useCommentApiCall";

import { v4 as uuidv4 } from "uuid";

import Spinner from "../Parts/Spinner";
import Thread from "./Thread";

const Comments = ({ ids, title, url }) => {
  // Using LocalStorage to help with refreshing errors
  const savedIds = JSON.parse(window.localStorage.getItem("ids"));
  const savedTitle = window.localStorage.getItem("title");
  const savedUrl = window.localStorage.getItem("url");

  const [comments, loading] = useCommentApiCall(ids || savedIds, title, url);

  const mappedThreads = comments.map((thread) => (
    <div className="thread-heading" key={uuidv4()}>
      <Thread thread={thread} key={uuidv4()} />
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
