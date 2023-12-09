import React from "react";

function Intro(props) {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "100vh", textAlign: "center", padding: "20px", fontFamily: "Arial, sans-serif", color: "#333" }}>
      <h1 className="display-2" style={{ fontSize: "2.5rem", marginBottom: "20px" }}>Hello! Read about this React application below!</h1>
      <ul style={{ textAlign: "left", listStylePosition: "inside", fontSize: "1.2rem" }}>
        <li>This is a React application with signup, login, and success pages</li>
        <li>Please enter the username and password without spaces</li>
        <li>The password should be at least 8 characters long</li>
        <li>You have to enter the same credentials you entered in the Signup page in the login page also.</li>
        <li>You will go to the Signup page by clicking on the button below!</li>
      </ul>
      <button style={{ fontSize: "1rem", marginTop: "20px", padding: "10px 20px", backgroundColor: "#4CAF50", color: "#fff", border: "none", borderRadius: "5px", cursor: "pointer" }} onClick={() => { props.action1() }}>Go to sign up page</button>
    </div>
  );
}

export default Intro;
