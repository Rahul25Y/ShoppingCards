import { createSlice } from '@reduxjs/toolkit'

const CardSlice=createSlice({
    name:"card",
    initialState:[],
    reducers:{
        add(state,action){
         state.push(action.payload);
        },
        remove(state,action){
            const index = state.findIndex((product) => product.id === action.payload);
            if (index !== -1) {
              state.splice(index, 1);
            }
        },
    }
})

export const {add,remove}=CardSlice.actions;
export default CardSlice.reducer;