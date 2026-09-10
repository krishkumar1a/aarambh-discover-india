import { useState } from "react";
export default function Profile(){
 const [name,setName]=useState(()=>localStorage.getItem("aarambh-profile-name")||"");
 const [saved,setSaved]=useState(false);
 const save=()=>{localStorage.setItem("aarambh-profile-name",name.trim());setSaved(true);setTimeout(()=>setSaved(false),1800)};
 return <main className="simple-page"><section className="simple-card"><span className="page-kicker">YOUR AARAMBH PROFILE</span><h1>Make your journeys personal.</h1><p>Save a display name for your community contributions and trip planning experience.</p><label>Display name<input value={name} onChange={e=>setName(e.target.value)} placeholder="Your name" /></label><button onClick={save}>Save profile</button>{saved&&<div className="success-note">Profile saved locally.</div>}</section></main>
}
