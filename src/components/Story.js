import React from "react";
import { Link } from "react-router-dom";

import unixToDate from "../helpers/unix";

import "../styles/StoryStyles.css";

const Story = ({ data: { by, title, descendants, time, url, id } }) => {
  return (
    <div className="story">
      <div className="story-title">
        <a href={url} target="_blank" rel="noreferrer">
          {title}
        </a>
      </div>
      <div className="story-info">
        <p>
          by: {by} | {unixToDate(time)} |{" "}
          <Link to={`/stories/${id}`}>{descendants} comments</Link>
        </p>
      </div>
    </div>
  );
};
export default Story;
