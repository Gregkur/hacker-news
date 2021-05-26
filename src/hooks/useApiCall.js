import { useState, useEffect } from "react";

import { getStories } from "../helpers/api";

const useApiCall = () => {
  const [loading, setLoading] = useState(true);
  const [stories, setStories] = useState([]);

  useEffect(() => {
    getStories().then((stories) => {
      setStories(stories);
      setLoading(false);
    });
  }, []);
  return [stories, loading];
};
export default useApiCall;
