import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  options: [
    { id: 1, name: "Javascript", numberOfVotes: 32 },
    { id: 2, name: "Python", numberOfVotes: 25 },
    { id: 3, name: "Java", numberOfVotes: 32 },
    { id: 4, name: "C#", numberOfVotes: 12 },
    { id: 5, name: "C++", numberOfVotes: 14 },
  ],
  voted: false,
};

export const voteSlice = createSlice({
  name: 'votes',
  initialState,
  reducers: {
    addVote: (state, action) => {
      const option = state.options.find(c => c.id == action.payload);

      if (option) {
        option.numberOfVotes += 1;
        state.voted = true;
      }
    },
  },
});

export const { addVote } = voteSlice.actions;
export default voteSlice.reducer;