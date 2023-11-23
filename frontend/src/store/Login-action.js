import { createSlice } from "@reduxjs/toolkit";

let sessionStorage = window.sessionStorage;

const Loginslice = createSlice({
    name : "login",
    initialState : {
        Loginvalid : "",
    },
    reducers : {
        Loginvalid(state) {
            state.Loginvalid = sessionStorage.getItem("loginId");
        },
        Logoutvalid(state){
            state.Loginvalid =  sessionStorage.getItem("loginId");
        }
    }
})

export const LoginActions = Loginslice.actions;

export default Loginslice.reducer