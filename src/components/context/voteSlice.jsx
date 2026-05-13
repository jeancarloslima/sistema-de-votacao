import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  options: [
    { id: 1, name: "Javascript", numberOfVotes: 8 },
    { id: 2, name: "Python", numberOfVotes: 7 },
    { id: 3, name: "Java", numberOfVotes: 8 },
    { id: 4, name: "C#", numberOfVotes: 3 },
    { id: 5, name: "C++", numberOfVotes: 5 },
  ],
  totalVotes: 31,
  voted: false,
};

export const voteSlice = createSlice({
  name: 'votes',
  initialState,
  reducers: {
    addVote: (state, action) => {
      const optionId = Number(action.payload);
      const option = state.options.find(c => c.id === optionId);

      if (option) {
        option.numberOfVotes += 1;
        state.totalVotes += 1;
        state.voted = true;
      }
    },
  },
});

export const { addVote } = voteSlice.actions;
export default voteSlice.reducer;