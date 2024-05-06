import React, { useContext } from "react";
import { FaAngleRight } from "react-icons/fa6";
import { FaChevronLeft } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { FaRegEye } from "react-icons/fa";
import { useState } from "react";
import Rating from "./Rating";
import Modal from "../Modal/Modal.js"
import './Book.css';
import CartContext from "../../context/cartContext.js";
const Book=({data})=>{
    //const{cartItems}=useContext(CartContext);
    const{addToCart}=useContext(CartContext);
    const [slideindex,SlidesetIndex]=useState(0);
    //handlemodal
    const handleModal=(book)=>{
        setopenModal(true);
        setbookData(book);
    }
    //handlclick
    const handlClick=(direction)=>{
    if(direction==="left"){
        SlidesetIndex(slideindex-1);
    }
    else{
        SlidesetIndex(slideindex+1);
    }
    }
    const [openModal,setopenModal]=useState(false);
    const[bookData,setbookData]=useState(null);
return(
<div className="book-container">
    {slideindex>=0 &&<FaChevronLeft onClick={()=>handlClick("left")} className="arrow-left"/>}
<div style={{transform:`translateX(${slideindex*-340}px)`}} className="slider-wrapper">
    {data.map((item) => 
    <div key={item.id} className="book-item">
        <img src={`/images/${item.img}`} alt={item.title} className="book-img"></img>
        <h3 className="book-title">{item.title}</h3>
        <Rating rating={item.rate} review={item.reviews}/>
        <div className="book-price"><span className="prev-price" style={{textDecoration:"line-through"}}>{item.prevPrice}</span>  {item.newPrice}EGP</div>
        
        <div className="slider-icons">
        <IoCartOutline onClick={()=>addToCart({...item,quantity:1})} className="s-icons" />
        <FaRegEye onClick={()=>handleModal(item)} className="s-icons" />
        </div>
        </div>) }
</div>
{slideindex<=data.length-1 &&<FaAngleRight  onClick={()=>handlClick("right")} className="arrow-right" /> }
{openModal && <Modal bookData={bookData} setopenModal={setopenModal}/>}
</div>

);
}
export default Book;