import { useState, useEffect } from "react";

import { getComments } from "../helpers/api";

const useCommentApiCall = (ids, title, url) => {
  const [loading, setLoading] = useState(true);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getComments(ids).then((comments) => {
      setComments(comments);
      setLoading(false);
      // Using LocalStorage to help with refreshing errors
      window.localStorage.setItem("ids", JSON.stringify(ids));
      title !== undefined && window.localStorage.setItem("title", title);
      title !== undefined && window.localStorage.setItem("url", url);
    });
  }, [ids, title, url]);
  return [comments, loading];
};
export default useCommentApiCall;
