import "./App.css";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import HomePage from "./components/HomePage";
import Comments from "./components/Comments";

function App() {
  const findStory = (id) => {
    console.log("TODO", id);
  };

  return (
    <BrowserRouter>
      <div className="container">
        <h1>Hacker News</h1>
        <Switch>
          <Route path="/" component={HomePage} exact={true} />
          <Route
            path="/stories/:id"
            render={(routeProps) => (
              <Comments
                story={findStory(routeProps.match.params.id)}
                {...routeProps}
              />
            )}
          />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
