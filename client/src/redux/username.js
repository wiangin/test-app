import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

export const usernameSlice = createSlice({
    name: "username",
    initialState: {
        user: "",
        userList: [],
        isLoading: false,
        userId: "",
    },
    reducers: {
        setUsername: (state, action) => {
            state.user = action.payload;
            state.userId = uuidv4();
        },

        setUserList: (state, action) => {
            if (state.userList.find((u) => u === action.payload)) {
                return state;
            }
            return {
                ...state,
                userList: [...state.userList, action.payload],
            };
        },

        deleteUserFromList: (state, action) => {
            return {
                ...state,
                userList: state.userList.filter((u) => u !== action.payload),
            };
        },

        updateUserList: (state) => {
           state.userList = [];
        },
    },
});

export const { setUsername, setUserList, deleteUserFromList, updateUserList } = usernameSlice.actions;
export default usernameSlice.reducer;