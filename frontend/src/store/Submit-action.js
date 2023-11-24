import { createSlice } from "@reduxjs/toolkit";


const submitsclice = createSlice({
    name : "submit",
    initialState : {
        mypageEdit : false
    },
    reducers:{
        mypageimghandler(state){
            state.mypageEdit = !state.mypageEdit
        },
      
    }
})


export const SumbitAction = submitsclice.actions;

export default submitsclice.reducer