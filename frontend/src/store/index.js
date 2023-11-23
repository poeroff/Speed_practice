import {configureStore} from "@reduxjs/toolkit"


import LoginReducer from "./Login-action";

const store = configureStore({
    reducer : { login :  LoginReducer},

});

export default store