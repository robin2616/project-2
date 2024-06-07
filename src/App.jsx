import React from "react"
import { useEffect, useState } from "react"
import axios from "axios"
import './App.css'
import { ImCross } from "react-icons/im";
import pic from './image.jpg'

function App() {
   const[api,updatedata]=useState([]);
   const[show,updateshow]=useState(false)
useEffect(()=>{

  axios.get('https://602e7c2c4410730017c50b9d.mockapi.io/users')
  .then((res)=>{
    updatedata(res.data)
  })
  .catch((err)=>{console.log("error occured")})


},[])
var finaldata=api;
console.log(finaldata)
useEffect(()=>{
  finaldata.splice(0,10)
},[])
var lastfinaldata=finaldata;


const[x,y]=useState({})

  return (
    <>

    {show && 
     <div id="showbox" className="fixed top-[75px] left-[700px] w-[auto] h-[auto] bg-blue-100 rounded-xl shadow-2xl border-black border-4">


<img src={x.avatar} className="w-40 h-40 rounded-full border-black border-4 relative top-3 left-[28%]" alt="No Image" />

<div className=" flex flex-col translate-x-3 translate-y-1   ">
   <button className=" relative left-[88%] translate-y-[-150px] "><ImCross onClick={()=>{updateshow(false)}}/></button>
  <span className="text-3xl font-bold m-4  relative left-[10%] text-red-800 ">{x.profile.firstName}  {x.profile.lastName}</span>
  <span className="text-xl font-semibold mr-5 mb-2"><span className=" text-blue-900">Job :</span> {x.jobTitle}</span>
  <span className="text-xl font-semibold mr-5 mb-2"><span className=" text-blue-900">Email :</span> {x.profile.email}</span>
  <div className="text-xl font-semibold mr-5 mb-2"><span className=" text-blue-900">Username :</span> {x.profile.username}</div>
  <div className="text-xl font-semibold mr-5 w-80 mb-5"><span className=" text-blue-900">Bio :</span> {x.Bio}</div>
</div>

</div> }

    <h1 id="heading" className=" relative top-6 left-48 text-4xl text-white font-bold">User Detail</h1>

{finaldata.map((i)=>(
    <div id="mainbox" onClick={()=>{
      y(i)
      updateshow(true)
    }}  className="flex bg-[#bfdbfe] items-center hover:scale-105 mt-5 translate-y-7 ml-20 w-[400px] p-4  rounded-lg shadow-lg border-red-500 border-2">
      <img
        className="w-16 hover:scale-110 border-black border-2 h-16 rounded-full mr-4"
        src={i.avatar}
        alt="No Image"
  
      />
      <div className=" flex flex-col translate-x-3">
      <div className="text-lg font-bold">{i.profile.firstName}  {i.profile.lastName}</div>
      <div className="text-sm font-semibold">{i.jobTitle}</div>
      <div className="text-sm">{i.profile.email}</div>
      </div>
    </div>

))}




    </>
  )
}

export default App
