import { createSlice } from '@reduxjs/toolkit'
//createSlice()-automatically returns reducer as well as action.
export const counterSlice = createSlice({
    name:"counter",
    initialState:{
        value:0
    },
    /*logic(actions)*/
    reducers:{
        increment:(state)=>{
            state.value+=1
        },
        decrement:(state)=>{
            state.value-=1
        },
        reset:(state)=>{
            state.value=0
        },
        changeRange:(state,action)=>{
            state.value += action.payload
        }
    }
})
//actions are needed to component
//reducers are needed to store to update state

export const {increment,decrement,reset,changeRange}=counterSlice.actions

export default counterSlice.reducer