import React from "react";
import './About.css';
const About=()=>{
return(
<>
 <h2 style={{color:"peru",margin:"20px",padding:"20px",fontFamily:"sans-serif"}}> About Us</h2>
<div className="content">
    <p style={{fontFamily:"sans-serif",fontSize:"25px",fontWeight:"20px",margin:"20px",padding:"20px"}}><span style={{color:"cadetblue",fontSize:"30px",fontWeight:"bold",fontFamily:"sans-serif"}}> Ketaby Store </span>is a pioneer in the field of selling books inside Egypt,and it includes an exceptional selection of the most prominent and important Arabic and foreign titles at prices accessible to the reader</p>
</div>
<div className="contacts">
<p style={{margin:"20px",padding:"20px",fontSize:"25px"}}><span style={{color:"cadetblue",fontSize:"30px"}}>Phone:</span>+0244890</p>
<p style={{margin:"20px",padding:"20px",fontSize:"25px"}}><span style={{color:"cadetblue",fontSize:"30px"}}>Email:</span>Ketaby45@gmail.com</p>
</div>

</>
);
}
export default About;