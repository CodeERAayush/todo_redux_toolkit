import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { removeTodo } from '../Features/todoSlice'
function Todos() {
    const todos=useSelector((state)=>state.todos)
    console.log(todos)


    const dispatch=useDispatch()




  return (
    <div>
      {
        todos?.map((item)=>{
            return (
            <>
            
            <div key={item.id}>{item.text}</div>
            <button onClick={()=>dispatch(removeTodo(item.id))}>delete</button>
            </>
            )
        })
      }
    </div>
  )
}

export default Todos
