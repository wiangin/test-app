import { createSlice } from "@reduxjs/toolkit";

export const chatlogSlice = createSlice({
    name: "chatlog",
    initialState: {
        chatlog: [],
    },
    reducers: {
        setChatlog: (state, action) => {
           return {
                ...state,
                chatlog: [...state.chatlog, action.payload],
            };
        },
    },
});

export const { setChatlog } = chatlogSlice.actions;
export default chatlogSlice.reducer;