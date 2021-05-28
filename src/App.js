import "./App.css";

import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

import HomePage from "./components/HomePage";
import Comments from "./components/Comments/Comments";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <div className="nav">
          <Link to="/">Hacker News</Link>
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
