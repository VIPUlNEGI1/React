import React, { useState } from 'react'
import { useTodo } from '../context/TodoContext';
 function TodoForm() {
  const [ todo, setTodo] = useState("")
  const {addTodo} = useTodo()
  const add = (e)  => {
    e.preventDefault()

    if(!todo) return
    addTodo({todo , completed: false})
    setTodo("")
  }
  return (
    <form onSubmit={add}  className="flex">
        <input
            type="text"
            placeholder="Write Todo..."
            className=" w-full  rounded-lg outline-none duration-150   text-black  font-bold h-10  "
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
        />
        <button type="submit" className =" font-bold bg-slate-600">
            Add
        </button>
    </form>
);
}

export default TodoForm;