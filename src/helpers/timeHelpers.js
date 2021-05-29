import moment from "moment";

export const unixToDate = (unix) => {
  const miliseconds = unix * 1000;
  const dateObj = new Date(miliseconds);
  const timeAgo = moment(dateObj).fromNow();
  return timeAgo;
};
