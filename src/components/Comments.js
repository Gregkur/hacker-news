import React from "react";
import useCommentApiCall from "../hooks/useCommentApiCall";

const Comments = ({ ids }) => {
  const [comments, loading] = useCommentApiCall(ids);

  return (
    <div className="container comment-container">
      {loading ? (
        <>
          <h1>Loading...</h1>{" "}
        </>
      ) : (
        <>
          <p>mapped comments</p>
        </>
      )}
    </div>
  );
};

export default Comments;
