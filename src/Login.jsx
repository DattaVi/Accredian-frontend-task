import React from "react";
import { ReactDOM } from "react";
import { useState } from "react";
import { useEffect } from "react";

function Login(props){
    const[username,setusername]=useState("");
    const[password,setpassword]=useState("");

    
    function handleUsername(e){
        setusername(e.target.value)
    }

    function handlePassword(e){
        setpassword(e.target.value)
    }



    function handleSubmit(){
        if(username=="" && password==""){
          window.alert("You left all the fields empty, please enter all the values as directed.")
        }
        else if(username=="" || password==""){
            if(username==""){
                window.alert("You have to enter a username to continue")
            }
            if(password==""){
                window.alert("You have to enter a password to continue")
            }

        }
        else if(password.length<8){
          window.alert("The password and the confirm password should be atleast 8 characters long!")
    }

    else if(username===props.info[0] && password===props.info[1]){

        window.alert("Login Successful")
        props.action2()
    }
    else if(username!==props.info[0] || password!==props.info[1]){
        window.alert("You have entered incorrect credentials")
    }
}

//for the backend api, this is the code to make post requests

//       function handleSubmit(){
//         if(username=="" && password==""){
//           window.alert("You left all the fields empty, please enter all the values as directed.")
//         }
//         else if(username=="" || password==""){
//             if(username==""){
//                 window.alert("You have to enter a username to continue")
//             }
//             if(password==""){
//                 window.alert("You have to enter a password to continue")
//             }

//         }
//         else if(password.length<8){
//           window.alert("The password and the confirm password should be atleast 8 characters long!")
//     }

//     else {
//         // Send a POST request to the login endpoint
//         axios
//           .post("http://localhost:4000/login", { username, password })
//           .then((response) => {
//             window.alert(response.data);
//             props.action2();
//           })
//           .catch((error) => {
//             console.error("Login failed:", error);
//             window.alert("Login failed. Please check your credentials.");
//           });
//       }

// }

    
    return(
<div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", backgroundColor: "rgba(255, 255, 255, 0.5)",
        backgroundImage: "url(https://upload.wikimedia.org/wikipedia/commons/8/88/Kotagiri%2CNilgiris.jpg)"}}>
      
      <div className="card text-center" style={{
                width: "450px", height: "500px"
                ,
                backdropFilter: "blur(7px)",
                backgroundColor: "rgb(159 159 159 / 12%)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                borderRadius: "10px",

            }} >
          <div className="card-header">
          <h1 style={{ fontFamily: "sans-serif", fontWeight: 300 }}>Login</h1>
          </div>
          <div className="card-body d-flex flex-column justify-content-evenly" >
      
      <input className="form-control form-control-lg" type="text" placeholder="enter your username" onChange={handleUsername} style={{ textAlign: "center" }}/>
      <input className="form-control form-control-lg" type="password" placeholder="enter the password" onChange={handlePassword} style={{ textAlign: "center" }}/>
      
      <button onClick={handleSubmit} className="btn btn-info btn-lg" >Login</button>
      </div>
      </div>
      
      
      
      </div>  
    )
}

export default Login;

{/* <div>
<h1>Login Page</h1>
<input type="text" placeholder="enter your username" onChange={handleUsername}/>
<input type="password" placeholder="enter the password" onChange={handlePassword}/>
<button onClick={handleSubmit}>Login</button>
</div> */}
