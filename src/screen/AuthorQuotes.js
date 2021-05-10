import { CircularProgress, IconButton } from "@material-ui/core";
import { ArrowBack } from "@material-ui/icons";
import React, { useEffect } from "react";
import "./AuthorQuotes.scss";
import { useHistory } from "react-router-dom";
import Quote from "../components/Quote";
import { useDispatch, useSelector } from "react-redux";
import { getAuthorQuotes } from "../features/quoteSlice";

function AuthorQuotes() {
  const history = useHistory();
  const authorQuotes = useSelector((state) => state.quote.authorQuotes);
  const randomQuote = useSelector((state) => state.quote.randomQuote);
  const dispatch = useDispatch();

  const handelClick = () => {
    history.push("/");
  };

  const renderAuthorQuotes = (author) => {
    return author.map((quote) => (
      <Quote text={quote.quoteText} key={quote._id} small />
    ));
  };

  useEffect(() => {
    if (randomQuote) {
      dispatch(getAuthorQuotes(randomQuote.quoteAuthor));
    }
  }, [dispatch, randomQuote]);

  return (
    <div className="authorQuotes">
      <div className="authorQuotes__name">
        <IconButton onClick={handelClick}>
          <ArrowBack fontSize="large" />
        </IconButton>

        <h1>{randomQuote?.quoteAuthor}</h1>
      </div>

      <div className="authorQuotes__quotes">
        {authorQuotes ? renderAuthorQuotes(authorQuotes) : <CircularProgress />}
      </div>
    </div>
  );
}

export default AuthorQuotes;
