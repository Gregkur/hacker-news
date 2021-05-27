import "./App.css";

import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

import HomePage from "./components/HomePage";
import Comments from "./components/Comments";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Link to="/">Hacker News</Link>

        <Switch>
          <Route path="/" component={HomePage} exact={true} />
          <Route
            path="/stories/:id"
            render={(routeProps) => (
              <Comments ids={routeProps.location.state} />
            )}
          />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
