import "./App.css";

import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

import HomePage from "./components/HomePage";
import Comments from "./components/Comments/Comments";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
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

        <Switch>
          <Route path="/" component={HomePage} exact={true} />
          <Route
            path="/stories/:id"
            render={(routeProps) => (
              <Comments
                ids={routeProps.location.kids}
                title={routeProps.location.title}
              />
            )}
          />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
