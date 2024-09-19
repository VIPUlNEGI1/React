import './App.css';
import { useEffect, useState } from 'react';
import { Todoprovider } from './context/TodoContext';
import TodoForm from './components/TodoForm';
import TodoItem from './components/TodoItem';

function App() {
  const [ todos , setTodos] = useState([])
  const addTodo = (todo) => {
    setTodos((prev) => [{id: Date.now(), ...todo}, ...prev])
  }

  const updateTodo = (id, todo)=>{
    setTodos((prev) => prev.map((prevTodo) =>(prevTodo.id === id ? todo : prevTodo)))
   
  }
  const deleteTodo = (id) => {
    setTodos((prev)=>prev.filter((todo) => todo.id !== id))
  }
const toggleComplete = (id) => {
  setTodos((prev) => prev.map((prevTodo) => prevTodo.id === id ? {...prevTodo, completed : !prevTodo.completed} : prevTodo))
}
useEffect(() => {
 const todos = JSON.parse(localStorage.getItem("todos"))

 if(todos && todos.length > 0){
  setTodos(todos)
 }
},[])

useEffect(() =>{
localStorage.setItem("todos",JSON.stringify(todos))
},[todos])
  return (
    <Todoprovider value={{todos,addTodo,updateTodo,deleteTodo,toggleComplete}}>

<div className="bg-[rgb(191,191,247)] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-amber-50 bg-slate-300 pb-24  mt-14">
                    <h1 className="text-2xl font-bold text-center mb-14 mt-14">Manage Your Todos</h1>
                    <div className=" p-10 ">
                      <TodoForm/>
                    </div>
                    <div className="flex flex-wrap gap-y-3 mb-10">
                       {todos.map((todo) => (
                        <div  key={todo.id}
                        className='w-full h-12 p-3'>
                       <TodoItem  todo={todo}/>
                        </div>
                       ))}
                    </div>
                </div>
            </div>

    </Todoprovider>
  );
}

export default App;
