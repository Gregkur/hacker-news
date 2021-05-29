import React from "react";
import { Link } from "react-router-dom";

import { unixToDate } from "../helpers/timeHelpers";

import "../styles/StoryStyles.css";

const Story = ({
  data: { by, title, descendants, time, url, id, kids, score },
}) => {
  return (
    <div className="story">
      <h2>{score}</h2>
      <div>
        <div className="story-title">
          <a href={url} target="_blank" rel="noreferrer">
            {title}
          </a>
        </div>
        <div className="story-info">
          <p>
            by: <span>{by}</span> | {unixToDate(time)} |{" "}
            <Link
              to={{
                pathname: `/stories/${id}`,
                kids: kids,
                title: title,
                url: url,
              }}>
              {descendants} comments
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
export default Story;
