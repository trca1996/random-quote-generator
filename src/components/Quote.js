import React from "react";
import "./Quote.scss";

function Quote({ text }) {
  return (
    <div className="quote">
      <div className="quote__line"></div>
      <div className="quote__text">"{text}"</div>
    </div>
  );
}

export default Quote;
