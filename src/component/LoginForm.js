import React from 'react'
import'./LoginForm.css';
import Register from './Register';
import { Link } from 'react-router-dom';
export const LoginForm = () => {
  return (

<div class="container">
    
    <form id="loginForm" action="login.php" method="post">
      <h2>LOGIN</h2>
      <div class="form-group">
        <label for="username">Username</label>
        <input type="text" id="username" name="username" required/>
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" id="password" name="password" required/>
      </div>
      <button type="submit" id="loginBtn">Login</button>
      <Link to="/Register" style={{textDecoration:"none",textAlign:"center",color:"#005eff",paddingTop:"10px"}}>
     <span className='sign_Up '>Sign Up</span> 
    </Link>
    </form>
    
  </div>
  )
}
