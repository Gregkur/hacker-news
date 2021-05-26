import React from "react";
import useApiCall from "../hooks/useApiCall";

import Story from "./Story";

const HomePage = () => {
  const [stories, loading] = useApiCall();
  return (
    <div className="story-container">
      {console.log(stories)}
      {console.log(loading)}
      <Story />
      <Story />
      <Story />
      <Story />
    </div>
  );
};
export default HomePage;
