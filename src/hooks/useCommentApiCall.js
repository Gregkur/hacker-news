import { useState, useEffect } from "react";

import { getComments } from "../helpers/api";

const useCommentApiCall = (ids, title) => {
  const [loading, setLoading] = useState(true);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getComments(ids).then((comments) => {
      console.log(title);
      setComments(comments);
      setLoading(false);
      window.localStorage.setItem("ids", JSON.stringify(ids));
      title !== undefined && window.localStorage.setItem("title", title);
    });
  }, []);
  return [comments, loading];
};
export default useCommentApiCall;
