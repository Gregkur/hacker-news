import { BASE_URL } from "./constants";

// Get info about every story
const getStory = async (id) => {
  try {
    // Getting info about one story
    const response = await fetch(`${BASE_URL}/item/${id}.json`);
    // Resolving the promise
    const story = await response.json();
    console.log(story);
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

// Getting the Comments from the ID of a story
export const getComments = async (ids) => {
  try {
    console.log("ids", ids);
    const response = await Promise.all(ids.map((id) => getStory(id)));
    console.log(response);
    return response;
  } catch (error) {
    console.log("Api error (getting comments)");
  }
};
