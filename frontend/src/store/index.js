import {configureStore} from "@reduxjs/toolkit"


import LoginReducer from "./Login-action";
import SubmitReducer from "./Submit-action"

const store = configureStore({
    reducer : { login :  LoginReducer , submit : SubmitReducer},

});

export default store