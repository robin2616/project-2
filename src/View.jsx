import React, { useState } from "react";

function View({x}){
console.log(x)
// const[saves,updatesaves]=useState({});
// updatesaves(x)
return(<>
<h1>{x.Bio}</h1>
{/* 
<h1>sdgajdhhadfaf</h1><br/>


 <div className="fixed top-24 left-[530px] w-[690px] h-[440px] bg-blue-100 rounded-xl shadow-2xl border-black border-2">

<div className=" flex flex-col">
<img src={x.avatar} className="w-20 h-20 rounded-full" alt="Not Found" />
<span>{x.profile.username}</span>
<span>{x.Bio}</span>
</div>

<div className=" flex flex-col">
  <span>{x.profile.firstName}  {x.profile.lastName}</span>
  <span>{x.jobTitle}</span>
  <span>{x.profile.email}</span>
  
</div>

</div> */}




</>)
}
export default View;