import moment from "moment";

export const unixToDate = (unix) => {
  const miliseconds = unix * 1000;
  const dateObj = new Date(miliseconds);
  const date = dateObj.toLocaleString("en-US", { timeZoneName: "short" });
  const timeAgo = moment(date).fromNow();
  return timeAgo;
};
