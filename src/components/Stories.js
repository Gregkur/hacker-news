import React from "react";

import Story from "./Story";
import Spinner from "./Spinner";

import useApiCall from "../hooks/useApiCall";

const Stories = ({ match }) => {
  const [stories, loading] = useApiCall(match.params.id);

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
export default Stories;
