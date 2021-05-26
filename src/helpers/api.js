export const BASE_API_URL = "https://hacker-news.firebaseio.com/v0";

export const getStories = async () => {
  try {
    const response = await fetch(`${BASE_API_URL}/topstories.json`);
    console.log(response);
    const data = await response.json();
    console.table(data);
    return data;
  } catch (error) {
    console.log("Api error");
  }
};
