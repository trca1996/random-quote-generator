import React from "react";
import "./App.scss";
import { Route, Switch, useHistory } from "react-router-dom";
import { Cached } from "@material-ui/icons";
import { Button } from "@material-ui/core";
import AuthorQuotes from "./screen/AuthorQuotes";
import Home from "./screen/Home";

function App() {
  const history = useHistory();

  const handleClick = () => {
    history.push("/");
  };

  return (
    <div className="app">
      <div className="app__header">
        <Button
          onClick={handleClick}
          className="app__button"
          disableElevation
          endIcon={<Cached className="rotate" />}
        >
          Random
        </Button>
      </div>

      <div className="app__body">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/author">
            <AuthorQuotes />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
