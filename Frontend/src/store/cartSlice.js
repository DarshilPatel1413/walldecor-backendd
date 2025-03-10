import { createSlice } from "@reduxjs/toolkit";


let initialState = JSON.parse(localStorage.getItem("cart")) || [{quantity:1}];
let cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers : {
        add(state,action) {
                state.push(action.payload) 
                window.scrollTo(0,0)
                
                 localStorage.setItem("cart", JSON.stringify(state));
        },
        remove(state,action){
            let rmv = state.filter((item)=> item.id !== action.payload)        
              localStorage.setItem("cart", JSON.stringify(rmv));
            return rmv
        },
        increment(state,action){
            let item=state.find((item)=>item.id === action.payload)
            if(item ){
               item.quantity = parseInt(item.quantity , 10) + 1;
            }
            localStorage.setItem("cart", JSON.stringify(state));
        },

        decrement(state,action){
            let item=state.find((item)=>item.id === action.payload)
            if(item && item.quantity > 1){
                item.quantity -=1
            }
            localStorage.setItem("cart", JSON.stringify(state));
        },
    }
})

export let {add,remove,increment,decrement }= cartSlice.actions
export default cartSlice.reducer