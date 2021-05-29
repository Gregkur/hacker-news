import { useState } from "react";

import "./App.css";

import { useHistory, Route, Switch, Link, Redirect } from "react-router-dom";

import Comments from "./components/Comments/Comments";
import Stories from "./components/Stories";

function App() {
  const [page, setPage] = useState(0);
  const history = useHistory();

  const changePage = (direction) => {
    if (direction === "previous") {
      setPage(page - 1);
      history.push(`/top/${page}`);
    } else {
      setPage(page + 1);
      history.push(`/top/${page}`);
    }
  };
  return (
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
      <Route
        path="/top/:id"
        render={() => (
          <div className="button-container">
            <button
              onClick={() => changePage("previous")}
              disabled={page === 0}
              className="btn">
              {`< prev`}
            </button>
            <button
              onClick={() => changePage("next")}
              disabled={page === 25}
              className="btn">
              {`more >`}
            </button>
          </div>
        )}
      />
      <Switch>
        <Route
          exact
          path="/top/:id"
          render={(routeProps) => <Stories {...routeProps} />}></Route>

        <Route
          path="/stories/:id"
          render={(routeProps) => (
            <Comments
              ids={routeProps.location.kids}
              title={routeProps.location.title}
            />
          )}
        />

        <Route path="*">
          <Redirect to={`top/${0}`} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
