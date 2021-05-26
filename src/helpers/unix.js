const unixToDate = (unix) => {
  const miliseconds = unix * 1000;
  const dateObj = new Date(miliseconds);
  const date = dateObj.toLocaleString("en-US", { timeZoneName: "short" });
  return date;
};
export default unixToDate;
