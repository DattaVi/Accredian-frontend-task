
import Signup from "./Signup.jsx";
import Login from "./Login.jsx";
import { useEffect,useState } from "react";
import Intro from "./Intro";
import Success from "./Success.jsx";

function App() {
const[handleSignup,setHandleSignup]=useState(false)
const[handleLogin,setHandleLogin]=useState(false)
const[data,setData]=useState()
const[intropage,setintropage]=useState(true)
const[successhandle,setsuccesshandle]=useState(false)

function signupFlag(){
  setHandleSignup(false)
  setHandleLogin(true)
}

function updatedata(arr){
  console.log(arr)
  setData(arr)
}
function handleintro(){
  setintropage(false)
  setHandleSignup(true)
}

function handlesuccess(){
  setHandleSignup(false)
  setHandleLogin(false)
  setintropage(false)
  setsuccesshandle(true)
}



  return (
    <div style={{WebkitBackdropFilter:"blur(8px)"}}>
      {intropage? <Intro action1={handleintro}/>:null}
     {handleSignup ? <Signup flag={signupFlag} flag2={updatedata} />:null}
     {handleLogin ? <Login  info={data} action2={handlesuccess}/>: null}
     {successhandle? <Success/>:null}
     </div>
  );
}

export default App;
