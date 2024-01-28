import React, { useState } from 'react'
import { BUTTON_LOGO_URL ,DELETE_BUTTON_URL } from '../utils/constant'
import { useDispatch, useSelector } from 'react-redux'
import { addItem, removeItem } from '../utils/toDoSlice';

const ToDoCard = () => {

 const [toDoWork ,setToDoWork]=useState("");
 const dispatch=useDispatch();
 const todoList=useSelector(store=>store.toDo.items);




 const handleAddItems =()=>{
  if(!toDoWork)return
    console.log(toDoWork, "this is your todowork")

    dispatch(addItem({
      [toDoWork]:toDoWork
    }))
    setToDoWork("")



 }

 const deleteItem =(key)=>{

   dispatch(removeItem(key));
   


 }


  return (
    <>
      <h1 className='p-8 ml-96 text-xl font-bold text-purple-600'>Write down here what do you want to do today ?</h1>
      <div className='p-8 mt-4 ml-72 w-1/2 border border-blue-400 rounded-2xl'>
       
       <div className='flex flex-row items-center'>
        <input onChange={(e)=>setToDoWork(e.target.value)}
        className='w-[85%]  p-2 border border-purple-300 rounded-lg'
        type='text' 
        value={toDoWork}
        placeholder='Add items'/>

        <button className=''
        onClick={handleAddItems} ><img className='w-16'   src={BUTTON_LOGO_URL}/></button>

        </div>

         <ul className='w-full'>

            
                {Object.entries(todoList).map(([key, value]) => (
                  <div className='flex flex-row items-center' key={key}>
                    <li
                   className='text-lg text-black w-[85%] p-1 pl-2 mt-2 border border-purple-200 rounded-lg'>
                         {value} </li>
                    <img
                      onClick={() => deleteItem(key)}
                      className='w-16 '
                      src={DELETE_BUTTON_URL}
                             />
            </div>
               ))}
               
        </ul>

      </div>
    

      
    </>
  )
}

export default ToDoCard