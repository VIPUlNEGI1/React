import { useState ,useCallback,useEffect,useRef } from "react";

function App() {
  // step - 1 first we are a collect the all varible
  const [length,setLength] = useState(8)
  const[numberAllowed , setNumberAllowed] = useState(false)
  const[charAllowed , setCharAllowed] = useState(false)
  const[ password , setPasword] = useState("")
// how to make password genetor in react
//useRef hook this is is used to cotain the reference and part of code

// step-2 then we are wright our password generater method
// useRef method is is used to make the referenc for coppy0p,
const passwordRef = useRef(null)
// useCallback hook is used to call different type of function's usedstates 
const passwordGeneration = useCallback(()=>{
let pass = ''
let str ='QWERTYUIOPLKJHGFDSSAMNBVCXZqwertyuioplkjhgfdsamnbvcxz' 

// step-3 then we are wright the loop for our check boxes
if(numberAllowed) str += "0123456789"
if(numberAllowed) str += "/*-+!@#$%^&*()_-+=?/.<,>|0"
for(let i = 1; i<= length; i++) {
  let char = Math.floor(Math.random() * str.length + 1) 

  // step-4 then we wright charAt method
pass += str.charAt(char)
}
setPasword(pass)
// we are used setPassword for optmization in our code 
}, [length, numberAllowed, charAllowed,setPasword])


// step-5 then we are right the useCallback which is help to optmize and memerize the code
const copyPasswordToClipbord = useCallback(()=> {
  passwordRef.current?.select()
  passwordRef.current?.setSelectionRange(0,20)
  window.navigator.clipboard.writeText(password)
}, 
[password])

// step-6 then we are used this useEffect hook which is used to hele to working the all components of code 
useEffect(() => {
  passwordGeneration()
},[length,numberAllowed,charAllowed])
  return (
   

    <div className=" w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-white bg-blue-950 pb-11">

<h1 className="text-4xl text-center text-white mt-12 pt-8 ">Password genetar</h1>
<div className="flex shadow rounded-lg overflow-hidden mb-4">

    <input
     type="text"
     value={password}
    className="outline-none w-full py-1 px-3 mb-12 text-black rounded-md mt-8"
    placeholder="password"
    readOnly
    ref={passwordRef}
     />
    {/* step-7 then we used copyPasswordToClipbord for coppy functionalaty */}
     <button onClick={copyPasswordToClipbord}
      className="bg-black h-9 mt-7 w-28 ml-3 rounded-lg">copy</button>

</div>
   <div className="flex text-sm gap-x-2">
     <div className="flex text-sm gap-x-1">
      <input
       type="range" 
       min={0}
       max={100}
       value={length}
       className="cursor-pointer"
       onChange={(e)=>{setLength(e.target.value)}}/>
       <label >length: {length}</label>
    </div>
    <div className="flex text-sm gap-x-1">
      <input 
      type="checkbox" 
      defaultChecked={numberAllowed}
      id="numberInput"
      onClick = {() => {
       setNumberAllowed((prev) => !prev )
      }}
       />
        <label htmlFor="numberInput">Number</label>
    </div>
    <div className="flex text-sm gap-x-1">
      <input
       type="checkbox" 
      defaultChecked={charAllowed}
      id="characterInput"
      onChange={()=>{
         setCharAllowed((prev) => !prev)
      }} 
      />
      <label htmlFor="characterInput">Charcters</label>
       </div>
   
    </div>
   </div>

  );
}

export default App;
