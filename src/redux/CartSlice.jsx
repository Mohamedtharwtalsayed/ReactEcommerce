import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    items: []
};

export const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers: {
        addtocart : (state,action)=>{
            state.items.push (action.payload)
            console.log(state.items);
        },
        removeCart: (state,action)=>{
             const newArrary = state.items.filter((items)=> items.id !== action.payload.id)
    state.items = newArrary
 } 


    }
})
