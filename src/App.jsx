
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

//if we were to use the node backend, the below provided code has to be replaced with the code present above.

// function App() {
// const[handleSignup,setHandleSignup]=useState(false)
// const[handleLogin,setHandleLogin]=useState(false)
// const[data,setData]=useState()
// const[intropage,setintropage]=useState(false)
// const[successhandle,setsuccesshandle]=useState(false)
// const[homepage,sethomepage]=useState(true)

// function signupFlag(){
//   setHandleSignup(false)
//   setHandleLogin(true)
// }

// function updatedata(arr){
//   console.log(arr)
//   setData(arr)
// }
// function handleintro(){
//   setintropage(false)
//   setHandleSignup(true)
// }

// function handlesuccess(){
//   setHandleSignup(false)
//   setHandleLogin(false)
//   setintropage(false)
//   setsuccesshandle(true)
// }

// function handlehomesignup(){
//   sethomepage(false)
//   setHandleSignup(true)

// }

// function handlehomelogin(){
//   sethomepage(false)
//   setHandleLogin(true)
  
// }





//   return (
//     <div style={{WebkitBackdropFilter:"blur(8px)"}}>
//       {homepage? <Home act1={handlehomesignup} act2={handlehomelogin} />:null}
//       {intropage? <Intro action1={handleintro}/>:null}
//      {handleSignup ? <Signup flag={signupFlag} flag2={updatedata} act4={handlesuccess}/>:null}
//      {handleLogin ? <Login  info={data} action2={handlesuccess}/>: null}
//      {successhandle? <Success/>:null}
//      </div>
//   );
// }

export default App;
