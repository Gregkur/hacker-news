import React, { useState } from "react";
import {Link} from 'react-router-dom'
import useApiCall from "../hooks/useApiCall";

import Story from "./Story";
import Spinner from "./Spinner";

const HomePage = () => {
  const [page, setPage] = useState(0);
  const [stories, loading] = useApiCall(page);

  const handleClick = () => {
    setPage(page + 1);
  };
  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
           <Link
              to={{
                pathname: `/top/${page}`,
                stories:stories
              }}
              onClick={handleClick}>
              next
            </Link>
          <div className="story-container">
            {stories.map((story) => (
              <Story key={story.id} data={story} />
            ))}{" "}
          </div>
        </>
      )}
    </>
  );
};
export default HomePage;
