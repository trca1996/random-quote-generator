import { CircularProgress } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import Author from "../components/Author";
import Quote from "../components/Quote";

function Home() {
  const randomQuote = useSelector((state) => state.quote.randomQuote);

  return (
    <>
      {randomQuote ? (
        <>
          <Quote text={randomQuote?.quoteText} />
          <Author
            name={randomQuote?.quoteAuthor}
            genre={randomQuote?.quoteGenre}
          />
        </>
      ) : (
        <CircularProgress />
      )}
    </>
  );
}

export default Home;
