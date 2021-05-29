import { useState, useEffect } from "react";

import { getStories } from "../helpers/api";

const useApiCall = (page) => {
  const [loading, setLoading] = useState(true);
  const [stories, setStories] = useState([]);

  useEffect(() => {
    setLoading(true);
    getStories(page).then((stories) => {
      setStories(stories);
      setLoading(false);
    });
  }, [page]);
  return [stories, loading];
};
export default useApiCall;
