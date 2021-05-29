import { NavLink } from "react-router-dom";

const Numbers = () => {
  const array = Array.from({ length: 25 }, (_, i) => i + 1);
  const mappedNumbers = array.map((num) => (
    <NavLink
      to={`/top/${num}`}
      key={num}
      className="number"
      activeClassName="selected">
      {num}
    </NavLink>
  ));
  return mappedNumbers;
};
export default Numbers;
