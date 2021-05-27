import { useState, useEffect } from "react";

import { getComments } from "../helpers/api";

const useCommentApiCall = (ids) => {
  const [loading, setLoading] = useState(true);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getComments(ids).then((comments) => {
      setComments(comments);
      setLoading(false);
    });
  }, [ids]);
  return [comments, loading];
};
export default useCommentApiCall;
