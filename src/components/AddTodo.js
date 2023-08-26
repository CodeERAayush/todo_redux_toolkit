import React,{useState,useRef} from 'react'
import { useDispatch } from 'react-redux'
import { addTodo,removeTodo } from '../Features/todoSlice'
function AddTodo() {


    const [input,setInput]=useState('')
    const dispatch=useDispatch()

    const ref=useRef()
    const addTodoHandler=(e)=>{
        e.preventDefault()
        dispatch(addTodo(input))
        setInput('')
        ref.current.focus()
    }
    console.log(ref.current.value)
    
  return (
    <div>
      <input
      ref={ref}
      placeholder='Add Text'
      onChange={(e)=>setInput(e.target.value)}
      value={input}
      />
      <button onClick={addTodoHandler}>
        submit
      </button>
    </div>
  )
}

export default AddTodo
