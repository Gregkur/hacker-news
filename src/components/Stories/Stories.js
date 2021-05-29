import Story from "./Story";
import Spinner from "../Parts/Spinner";
import Numbers from "../Parts/Numbers";

import useApiCall from "../../hooks/useApiCall";

const Stories = ({ match }) => {
  const [stories, loading] = useApiCall(match.params.id - 1);

  const mappedStories = stories.map((story) => (
    <Story key={story.id} data={story} />
  ));

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <div className="stories-container">{mappedStories}</div>
          <div className="footer-container">
            <div className="number-container">
              <Numbers />
            </div>
          </div>
        </>
      )}
    </>
  );
};
export default Stories;
