import React, { useEffect } from "react";
import "./App.scss";
import { useDispatch } from "react-redux";
import { getRandomQuote } from "./features/quoteSlice";
import { Route, Switch } from "react-router-dom";
import { Cached } from "@material-ui/icons";
import { Button } from "@material-ui/core";
import AuthorQuotes from "./screen/AuthorQuotes";
import Home from "./screen/Home";

function App() {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(getRandomQuote());
  };

  useEffect(() => {
    dispatch(getRandomQuote());
  }, [dispatch]);

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
      <p className="app__createBy">
        created by <span className="app__userName">trca1996</span> -
        devChallenges.io
      </p>
    </div>
  );
}

export default App;
