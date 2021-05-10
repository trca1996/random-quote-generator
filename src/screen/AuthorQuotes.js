import { IconButton } from "@material-ui/core";
import { ArrowBack } from "@material-ui/icons";
import React from "react";
import "./AuthorQuotes.scss";
import { useHistory } from "react-router-dom";
import Quote from "../components/Quote";

function AuthorQuotes() {
  const history = useHistory();

  const handelClick = () => {
    history.push("/");
  };

  return (
    <div className="authorQuotes">
      <div className="authorQuotes__name">
        <IconButton onClick={handelClick}>
          <ArrowBack fontSize="large" />
        </IconButton>

        <h1>Name !!! import from redux :D</h1>
      </div>

      <div className="authorQuotes__quotes">
        <Quote
          small
          text="The first rule of any technology used in a business is that automation applied to an efficient operation will magnify the efficiency. The second is that automation applied to an inefficient operation will magnify the inefficiency."
        />
        <Quote
          small
          text="The first rule of any technology used in a business is that automation applied to an efficient operation will magnify the efficiency. The second is that automation applied to an inefficient operation will magnify the inefficiency."
        />
        <Quote
          small
          text="The first rule of any technology used in a business is that automation applied to an efficient operation will magnify the efficiency. The second is that automation applied to an inefficient operation will magnify the inefficiency."
        />
        <Quote
          small
          text="The first rule of any technology used in a business is that automation applied to an efficient operation will magnify the efficiency. The second is that automation applied to an inefficient operation will magnify the inefficiency."
        />
        <Quote
          small
          text="The first rule of any technology used in a business is that automation applied to an efficient operation will magnify the efficiency. The second is that automation applied to an inefficient operation will magnify the inefficiency."
        />
        <Quote
          small
          text="The first rule of any technology used in a business is that automation applied to an efficient operation will magnify the efficiency. The second is that automation applied to an inefficient operation will magnify the inefficiency."
        />
        <Quote
          small
          text="The first rule of any technology used in a business is that automation applied to an efficient operation will magnify the efficiency. The second is that automation applied to an inefficient operation will magnify the inefficiency."
        />
        <Quote
          small
          text="The first rule of any technology used in a business is that automation applied to an efficient operation will magnify the efficiency. The second is that automation applied to an inefficient operation will magnify the inefficiency."
        />
      </div>
    </div>
  );
}

export default AuthorQuotes;
