import React from "react";

function Success(props) {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "100vh", textAlign: "center", padding: "20px", fontFamily: "Arial, sans-serif", color: "#333" }}>
      <h1 className="display-2" style={{ fontSize: "2.5rem", marginBottom: "20px", color: "#4CAF50" }}>Success!</h1>
      <p style={{ fontSize: "1.2rem" }}>Congratulations! You have successfully logged in.</p>
      {/* <button style={{ fontSize: "1rem", marginTop: "20px", padding: "10px 20px", backgroundColor: "#4CAF50", color: "#fff", border: "none", borderRadius: "5px", cursor: "pointer" }} onClick={() => { props.action2() }}>Logout</button> */}
    </div>
  );
}

export default Success;
