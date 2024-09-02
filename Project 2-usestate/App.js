
import { useState } from 'react';
import './App.css';

function App() {
  const [color , setcolor] = useState("green")
  return (
    <div className=" w-full h-screen duration-200"  style={{backgroundColor: color}}>
     <div className="fixed flex flex-wrap justify-center bottom-11 inset-x-0 px-2 ">
      <div className="flex  flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
        <button onClick={()=> setcolor("red")} className='outline-none px-4  py-2 rounded-full text-emerald-50 shadow-lg' style={{backgroundColor : "red"}}>RED</button>

        <button onClick={()=> setcolor("green")} className='outline-none px-4  py-2 rounded-full text-emerald-50 shadow-lg' style={{backgroundColor : "green"}}>GREEN</button> 

        <button onClick={()=> setcolor("blue")} className='outline-none px-4  py-2 rounded-full  text-emerald-50 shadow-lg' style={{backgroundColor : "blue"}}>RED</button>

        <button  onClick={()=>setcolor("black")} className='outline-none px-4  py-2 rounded-full text-emerald-50 shadow-lg' style={{backgroundColor : "black"}}>BLACK</button>

        <button onClick={()=>setcolor("pink")} className='outline-none px-4  py-2 rounded-full text-emerald-50 shadow-lg' style={{backgroundColor : "pink"}}>PINK</button>
      </div>
     </div>
    </div>
  );
}

export default App;
