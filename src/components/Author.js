import { IconButton } from "@material-ui/core";
import { ArrowForward } from "@material-ui/icons";
import React from "react";
import { useHistory } from "react-router";
import "./Author.scss";

function Author({ name, genre }) {
  const history = useHistory();

  return (
    <div className="author">
      <div className="author__text">
        <h4>{name}</h4>
        <p>{genre}</p>
      </div>

      <IconButton onClick={() => history.push("/author")}>
        <ArrowForward
          className="author__button"
          fontSize="large"
          color="action"
        />
      </IconButton>
    </div>
  );
}

export default Author;
