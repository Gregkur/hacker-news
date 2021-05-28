import React from "react";
import useApiCall from "../hooks/useApiCall";

import Story from "./Story";
import Spinner from "./Spinner";

const HomePage = () => {
  const [stories, loading] = useApiCall();
  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div className="story-container">
          {stories.map((story) => (
            <Story key={story.id} data={story} />
          ))}{" "}
        </div>
      )}
    </>
  );
};
export default HomePage;
