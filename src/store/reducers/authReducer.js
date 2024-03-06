import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    token: localStorage.getItem('token'),
    user: null,
   
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginSuccess: (state, action) => {
            localStorage.setItem('token', action.payload.token);
            localStorage.setItem('type', action.payload.user.type);
            state.token = action.payload.token;
            state.user = action.payload.user;
          
        },
        getUserSuccess: (state, action) => {
            localStorage.setItem('type', action.payload.user.type);
            state.user = action.payload.user;
            state.role = action.payload.role;
        },
        logout: (state) => {
            localStorage.removeItem('token');
            localStorage.removeItem('type');
            localStorage.clear();
            state.token = null;
            state.user = null;
            state.activeNavObj = {};
        },
        activeNav: (state, action) => {
            state.activeNavObj = action.payload.activeNavObj;
        },
        printMultipleInvoice: (state, action) => {
            state.printMultipleInvoicesArray = action.payload.printMultipleInvoicesArray;
        },
        navbarToggle: (state) => {
            state.mynavbar = !state.mynavbar;
        },
    },
});

export const {
    loginSuccess,
    getUserSuccess,
    logout,
    activeNav,
    printMultipleInvoice,
    navbarToggle,
} = authSlice.actions;

export default authSlice.reducer;
