import React, { useEffect } from "react";

import Story from "./Story";

import { getStories } from "../helpers/api";

const HomePage = () => {
  useEffect(() => {
    getStories();
  });
  return (
    <div className="story-container">
      <Story />
      <Story />
      <Story />
      <Story />
    </div>
  );
};
export default HomePage;
