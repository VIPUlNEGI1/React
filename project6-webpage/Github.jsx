import React, { useEffect, useState } from 'react'

function Github() {
// how to show the data in webpage
const[data, setdata] = useState([])
  // how to call api
  useEffect(()=>{
  fetch('https://api.github.com/users/VIPUlNEGI1')
  .then(response=>response .json())
  .then(data => {
    console.log(data)
    setdata(data)
  })
  }, [])

  return (
    <div className='text-center m-7 pt-10 bg-gray-600 text-white'>

Github followers:{data.followers}

<img className='jo h-40 pl-6 pb-9' src={data.avatar_url} alt="" />
    </div>
  )
}

export default Github

export const githubinfoloder = async () => {}