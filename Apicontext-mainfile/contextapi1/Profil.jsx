import React, {useContext} from "react"
import UserContext from "../Context/Usercontext"

function Profil() {
    const {user}= useContext(UserContext)
 if(!user) return <div className="">pleacs login</div>

 return <div className="">Welcome {user.username}</div>
}


export default Profil