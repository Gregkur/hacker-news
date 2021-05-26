import React from "react";
import useApiCall from "../hooks/useApiCall";

import Story from "./Story";

const HomePage = () => {
  const [stories, loading] = useApiCall();
  return (
    <div className="story-container">
      {loading ? (
        <>
          <h1>Loading...</h1>{" "}
        </>
      ) : (
        <>
          {stories.map((story) => (
            <Story key={story.id} data={story} />
          ))}{" "}
        </>
      )}
    </div>
  );
};
export default HomePage;
