import {createSlice} from "@reduxjs/toolkit"

const initialUserState = {name: "", email: "", plan: -1};

export const userSlice = createSlice({
name: "user",
initialState: {value: initialUserState},
reducers: {
    login: (state, action) => {
        state.value = action.payload;
    },
    logout: (state) => {
        state.value = initialUserState;
    }
}
});

export default userSlice.reducer;
export const {login, logout} = userSlice.actions;
