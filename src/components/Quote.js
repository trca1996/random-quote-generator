import React from "react";
import "./Quote.scss";

function Quote({ text, small }) {
  return (
    <div className="quote">
      <div className={`${small ? "quote__line--small" : "quote__line"}`}></div>
      <div className={`${small ? "quote__text--small" : "quote__text"}`}>
        "{text}"
      </div>
    </div>
  );
}

export default Quote;
