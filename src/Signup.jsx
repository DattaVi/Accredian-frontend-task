// import React from "react";
// import { ReactDOM } from "react";
// import { useState } from "react";
// import { useEffect } from "react";


// function Signup(props){
//     const[username,setusername]=useState("");
//     const[password,setpassword]=useState("");
//     const[confirmpassword,setconfirmpassword]=useState("");
    
//     function handleUsername(e){
//         setusername(e.target.value)
//     }

//     function handlePassword(e){
//         setpassword(e.target.value)
//     }

//     function handleConfirmPassword(e){
//         setconfirmpassword(e.target.value)
//     }

//     function handleSubmit(){
//         if(username=="" && password=="" && confirmpassword==""){
//           window.alert("You left all the fields empty, please enter all the values as directed.")
//         }
//         else if(username=="" || password=="" || confirmpassword==""){
//             if(username==""){
//                 window.alert("You have to enter a username to continue")
//             }
//             if(password==""){
//                 window.alert("You have to enter a password to continue")
//             }
//             if(confirmpassword==""){
//                 window.alert("You have to enter a confirmpassword to continue")
//             }
//         }
//         else if(password.length<8 || confirmpassword.length<8){
//           window.alert("The password and the confirm password should be atleast 8 characters long!")
//     }
//     else if(password!=confirmpassword){
//         window.alert("Password entered should be exactly equal to the confirmpassword entered.")
//     }
//     else{
//         window.alert("Signup Successful")
//         props.flag()
//     }
// }

// return(
// <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", backgroundColor: "rgba(255, 255, 255, 0.5)"}}>
      
//       <div className="card text-center" style={{width:"450px", height:"500px"}} >
//           <div className="card-header">
//           <h1 style={{ fontFamily: "sans-serif", fontWeight: 300 }}>Signup Page</h1>
//           </div>
//           <div className="card-body d-flex flex-column justify-content-evenly" >
      
//       <input className="form-control form-control-lg" type="text" placeholder="enter the desired username" onChange={handleUsername} style={{ textAlign: "center" }}/>
//       <input className="form-control form-control-lg" type="password" placeholder="enter the password" onChange={handlePassword} style={{ textAlign: "center" }}/>
//       <input className="form-control form-control-lg" type="password" placeholder="retype the password" onChange={handleConfirmPassword} style={{ textAlign: "center" }}/>
//       <button onClick={handleSubmit} className="btn btn-info btn-lg" >Create account</button>
//       </div>
//       </div>
      
      
      
//       </div>  
// );
 
    
        

// }

// export default Signup;




import React from "react";
import { ReactDOM } from "react";
import { useState } from "react";
import { useEffect } from "react";


function Signup(props) {
    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");
    const [confirmpassword, setconfirmpassword] = useState("");

    function handleUsername(e) {
        setusername(e.target.value)
    }

    function handlePassword(e) {
        setpassword(e.target.value)
    }

    function handleConfirmPassword(e) {
        setconfirmpassword(e.target.value)
    }

    function handleSubmit() {
        if (username == "" && password == "" && confirmpassword == "") {
            window.alert("You left all the fields empty, please enter all the values as directed.")
        }
        else if (username == "" || password == "" || confirmpassword == "") {
            if (username == "") {
                window.alert("You have to enter a username to continue")
            }
            if (password == "") {
                window.alert("You have to enter a password to continue")
            }
            if (confirmpassword == "") {
                window.alert("You have to enter a confirmpassword to continue")
            }
        }
        else if (password.length < 8 || confirmpassword.length < 8) {
            window.alert("The password and the confirm password should be atleast 8 characters long!")
        }
        else if (password != confirmpassword) {
            window.alert("Password entered should be exactly equal to the confirmpassword entered.")
        }
        else {
            window.alert("Signup Successful")
            props.flag()
            props.flag2([username,password])
        }
    }

    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", backgroundColor: "rgba(255, 255, 255, 0.5)" ,
        backgroundImage: "url(https://upload.wikimedia.org/wikipedia/commons/8/88/Kotagiri%2CNilgiris.jpg)"
        }}>

            <div className="card text-center" style={{
                width: "450px", height: "500px"
                ,
                backdropFilter: "blur(7px)",
                backgroundColor: "rgb(159 159 159 / 12%)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                borderRadius: "10px",

            }} >
                <div className="card-header">
                    <h1 style={{ fontFamily: "sans-serif", fontWeight: 300 }}>Signup Page</h1>
                </div>
                <div className="card-body d-flex flex-column justify-content-evenly" >

                    <input className="form-control form-control-lg" type="text" placeholder="enter the desired username without spaces" onChange={handleUsername} style={{ textAlign: "center" }} />
                    <input className="form-control form-control-lg" type="password" placeholder="enter the password without spaces" onChange={handlePassword} style={{ textAlign: "center" }} />
                    <input className="form-control form-control-lg" type="password" placeholder="retype the password without spaces" onChange={handleConfirmPassword} style={{ textAlign: "center" }} />
                    <button onClick={handleSubmit} className="btn btn-info btn-lg" >Create account</button>
                </div>
            </div>



        </div>
    );




}

export default Signup;
