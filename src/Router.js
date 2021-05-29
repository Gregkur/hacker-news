import { Route, Switch, Redirect } from "react-router-dom";

import Comments from "./components/Comments/Comments";
import Stories from "./components/Stories/Stories";
import Navbar from "./components/Parts/Navbar";

import "./styles/Index.css";

function App() {
  return (
    <div className="container">
      <Navbar />
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
          <Redirect to={`top/${1}`} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
