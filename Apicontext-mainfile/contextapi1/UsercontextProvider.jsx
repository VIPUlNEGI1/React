import React from 'react'
import UserContext from './Usercontext'


const UsercontextProvider = ({children})=>{
    const [user, setuser]= React.useState(null)
return(
    //provider is the property
    //value is used to pass teh value 
    <>
    <UserContext.Provider value={{user,setuser}}>
      {children}
    </UserContext.Provider>
    </>
)
}
export default UsercontextProvider
