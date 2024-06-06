import React from "react"
import { useEffect, useState, useSyncExternalStore } from "react"
import axios from "axios"

function App() {
  const[data,updatedata]=useState([])
  var finaldata=[];
  useEffect(()=>{
axios.get('https://602e7c2c4410730017c50b9d.mockapi.io/users')
.then((res)=>{
  updatedata(res.data)
})
.catch((err)=>{console.log("error found")})
  },[])
for(let i=12;i<data.length;i++){
    finaldata.push(data[i])
}
console.log(finaldata)
  return (
    <>
    <h1 className=" relative top-6 left-48 text-4xl font-bold">User Detail</h1>

{finaldata.map((i)=>(
    <div className="flex items-center hover:scale-105 mt-5 translate-y-7 ml-20 w-[400px] p-4 border rounded-lg shadow-lg">
      <img
        className="w-16 hover:scale-110 border-black border-2 h-16 rounded-full mr-4"
        src={i.avatar}
        alt={`'s profile`}
      />
      <div className=" flex flex-col translate-x-3">
      <div className="text-lg font-bold">{i.profile.firstName}  {i.profile.firstName}</div>
      <div className="text-sm font-semibold">{i.jobTitle}</div>
      <div className="text-sm">{i.profile.email}</div>
      </div>
    </div>

))}



    </>
  )
}

export default App
