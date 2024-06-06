function View({view}){
return(<>



<div className="fixed top-24 left-[530px] w-[690px] h-[440px] bg-blue-100 rounded-xl shadow-2xl border-black border-2">

<div className=" flex flex-col">
<span>{view.profile.username}</span>
</div>

{/* <img src={x.avatar} className="w-20 h-20 rounded-full" alt="" /> */}
{/* <span>{view.profile.username}</span>
<span>{x.Bio}</span>
</div>

<div className=" flex flex-col">
  <span>{x.profile.firstName}  {x.profile.lastName}</span>
  <span>{x.jobTitle}</span>
  <span>{x.profile.email}</span>
  
</div> */}

</div>


</>)
}
export default View;