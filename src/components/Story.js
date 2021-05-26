import React from "react";
import unixToDate from "../helpers/unix";

import "../styles/StoryStyles.css";

const Story = ({ data: { by, title, descendants, time } }) => {
  return (
    <div className="story">
      <div className="story-title">
        <p>{title}</p>
      </div>
      <div className="story-info">
        <p>
          by: {by} | {unixToDate(time)} | {descendants} comments
        </p>
      </div>
    </div>
  );
};
export default Story;
