import { BASE_URL } from "./constants";

// Get info about every story
const getStory = async (id) => {
  try {
    // Getting info about one story
    const response = await fetch(`${BASE_URL}/item/${id}.json`);

    // Resolving the promise
    const story = await response.json();

    return story;
  } catch (error) {
    console.log("Api error (getting a single story)");
  }
};

// Getting the ID's of top stories
export const getStories = async () => {
  try {
    // Getting all the ID/s
    const response = await fetch(`${BASE_URL}/topstories.json`);

    // Getting the response in json
    const data = await response.json();

    // Getting info about every story
    const stories = await Promise.all(
      data.slice(0, 30).map((id) => getStory(id))
    );

    return stories;
  } catch (error) {
    console.log("Api error");
  }
};

// Getting the Comments from the IDs of a story
export const getComments = async (ids) => {
  try {
    // Get details about every comment
    const response = ids.map(async (id) => {
      const comment = await getStory(id);
      if (!comment.kids) return null;

      // recursion to dig a level deeper
      const comments = await getComments(comment.kids);
      const object = {
        ...comment,
        comments: comments,
      };
      return object;
    });

    // Resolve all promises
    const allComments = await Promise.all(response);

    // Filtering the nil, dead and deleted comments
    const filteredComments = allComments.filter(
      (comment) => comment && !comment.dead && !comment.deleted
    );

    return filteredComments;
  } catch (error) {
    console.log("Api error (getting comments)");
  }
};
