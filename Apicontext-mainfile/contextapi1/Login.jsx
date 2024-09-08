import { useState, useContext } from 'react'
import UserContext from '../Context/Usercontext'
function Login() {

  const [username, setUsername]= useState('')
  const [password, setPassword] = useState('')

const {setuser}= useContext(UserContext)

  const handlesubmit = (e) => {
       e.preventDefault()
     setuser({username,password})
  }
 

  return (

    <div  >

    <h2>Log In</h2>
    
    <input value={username} onChange={(e) => setUsername(e.target.value)}
     type="text" placeholder='username' />
{" "}
    <input value={password} onChange={(e) => setPassword(e.target.value)}  type="text" placeholder='pasword' />


    <button onClick={handlesubmit}>submit</button>
       

    </div>
  )
}

export default Login