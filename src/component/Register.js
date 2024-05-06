import React from "react";
import { LoginForm } from "./LoginForm";
import { Link } from "react-router-dom";
import './Register.css'
const Register=()=>{
    return(
      
      <div class="container">
      <form id="signupForm" action="register.php" method="post">
        <h2>Sign Up</h2>
        <div class="form-group">
          <label for="fullname">Full Name</label>
          <input type="text" id="fullname" name="fullname" required/>
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" name="email" required/>
        </div>
        <div class="form-group">
          <label for="username">Username</label>
          <input type="text" id="username" name="username" required/>
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" id="password" name="password" required/>
        </div>
        <button type="submit" id="signupBtn">Sign Up</button>
      <Link to="/login" style={{textDecoration:"none",textAlign:"center",color:"#005eff"}}>
       Back to Login
    </Link>
    </form>
  </div>
 
    )
}
export default Register;