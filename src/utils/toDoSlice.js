import { createSlice } from "@reduxjs/toolkit";


const toDoSlice=createSlice({
    name:'toDo',
    initialState:{
        items:{
          
        }
    },
    reducers:{
      addItem :(state,action)=>{
        const dynamicKey = Object.keys(action.payload)[0];
        const dynamicValue = action.payload[dynamicKey];
        state.items[dynamicKey]=dynamicValue
      },

      removeItem:(state,action)=>{
          const obj=state.items;

          delete obj[action.payload]
      }
    }
});


export const {addItem , removeItem}=toDoSlice.actions;
export default toDoSlice.reducer;