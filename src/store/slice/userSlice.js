import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userInfo: {},
    accessToken: "",
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        login: (state, action) => {
            state.userInfo = action.payload;
        },
        setToken: (state, action) => {
            state.accessToken = action.payload;
        },
        logout: (state) => {
            state.userInfo = {}
            state.accessToken = ''
        }
    },
});

export const { login, setToken, logout } = userSlice.actions;

export default userSlice.reducer;
