import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import quotesBase from "../api/quotes";

export const getRandomQuote = createAsyncThunk(
  "quote/getRandomQuote",
  async () => {
    const response = await quotesBase.get("/random");
    const randomQuotes = await response.data.data[0];

    return randomQuotes;
  }
);

export const getAuthorQuotes = createAsyncThunk(
  "quote/getAuthorQuotes",
  async (authorName) => {
    const response = await quotesBase.get("", {
      params: { author: authorName },
    });
    const authorQuotes = await response.data;

    return authorQuotes;
  }
);

const initialState = {
  randomQuote: null,
  authorQuotes: null,
};

const quoteSlice = createSlice({
  name: "quote",
  initialState,
  reducers: {},
  extraReducers: {
    [getRandomQuote.fulfilled]: (state, action) => {
      state.randomQuote = action.payload;
    },

    [getAuthorQuotes.fulfilled]: (state, action) => {
      state.authorQuotes = action.payload.data;
    },
  },
});

export default quoteSlice.reducer;
