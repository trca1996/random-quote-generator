import axios from "axios";

const quotesBase = axios.create({
  baseURL: "https://quote-garden.herokuapp.com/api/v3/quotes",
});

export default quotesBase;
