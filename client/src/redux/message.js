import { createAsyncThunk } from "@reduxjs/toolkit";
import { sendMessageApi } from "../api/api";
import { createSlice } from "@reduxjs/toolkit";

export const sendMessage = createAsyncThunk(
    "message/sendMessage",
    async (message) => {
        return sendMessageApi(message);
    }
);

export const messageSlice = createSlice({
    name: "message",
    initialState: {
        msg: "",
        isLoading: false,
        error: null,
    },

    reducers: {
        setMessage: (state, action) => {
            state.msg = action.payload;
        },
    },

    builder: {
        [sendMessage.pending]: (state) => {
            state.isLoading = true;
        },
        [sendMessage.fulfilled]: (state,) => {
            state.isLoading = false;
            state.msg = ""
        },
        [sendMessage.rejected]: (state) => {
            state.isLoading = false;
        },
    },
});

export const { setMessage } = messageSlice.actions;
export default messageSlice.reducer;