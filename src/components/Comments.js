import React from "react";
import useCommentApiCall from "../hooks/useCommentApiCall";

const Comments = ({ ids }) => {
  const [comments, loading] = useCommentApiCall(ids);

  return (
    <div>
      {console.log("loading", loading, "comments", comments)}
      Comments page
    </div>
  );
};

export default Comments;
