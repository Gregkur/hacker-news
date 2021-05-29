import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav">
      <div className="logo-container">
        <Link to="/">
          <img
            src="https://cdn2.iconfinder.com/data/icons/social-flat-buttons-3/512/hacker_news-512.png"
            alt="logo"
            className="logo"></img>
        </Link>
        <Link to="/">
          <h1>Hacker News</h1>
        </Link>
      </div>
    </div>
  );
};
export default Navbar;
