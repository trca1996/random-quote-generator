import React from "react";
import Author from "../components/Author";
import Quote from "../components/Quote";

function Home() {
  return (
    <>
      <Quote text="The first rule of any technology used in a business is that automation applied to an efficient operation will magnify the efficiency. The second is that automation applied to an inefficient operation will magnify the inefficiency." />
      <Author name="Bill Gates" genre="business" />
    </>
  );
}

export default Home;
