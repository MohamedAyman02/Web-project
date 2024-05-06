import React from "react";
//import NavBar from "../homepage/NavBar";
import Slider from "../component/slider/Slider";
import Book from "../component/book-slider/Book";
import data from "../DataBase/data";
const Home=()=>{
return(
<>
<Slider/>
<div className="heading-title" style={{padding:"10px 30px" }}>
        <h2 style={{color:"#1926d2",fontSize:"30px",fontWeight:"500",borderBottom:"2px solid #1926d2" ,width:"max-content",paddingBottom:"5px"}}>Best Seller</h2>
    </div>
<Book data={data}/>
</>
);
}
export default Home; 