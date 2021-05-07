import React from "react";
import "./App.scss";
import { Route, Switch } from "react-router-dom";
import { Cached } from "@material-ui/icons";
import { Button } from "@material-ui/core";
import Quote from "./components/Quote";
import Author from "./components/Author";
import AuthorQuotes from "./screen/AuthorQuotes";

function App() {
  return (
    <div className="app">
      <div className="app__header">
        <Button
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
            <Quote text="The first rule of any technology used in a business is that automation applied to an efficient operation will magnify the efficiency. The second is that automation applied to an inefficient operation will magnify the inefficiency." />
            <Author name="Bill Gates" genre="business" />
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
