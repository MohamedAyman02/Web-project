import React, { useState } from "react";
import { useContext } from "react";
import './Modal.css';
import { IoMdClose } from "react-icons/io";
import Rating from "../book-slider/Rating";
import { IoCartOutline } from "react-icons/io5";
import CartContext from "../../context/cartContext.js";
const Modal = ({ bookData, setopenModal }) => {
    const{addToCart}=useContext(CartContext);
    const[qty,setQty]= useState(1);
    const { img, title, publisher, category, rate, reviews, newPrice } = bookData;
    return (
        <div className="modal-container">
            <div className="modal-content">
                <IoMdClose onClick={() => setopenModal(false)} className="modal-icon" />
                <div className="modal-img">
                    <img src={img} />
                </div>
                <div className="Modal-info">
                    <h5 className="modal-info-title" style={{fontSize:"40px"}} >{title}</h5>
                    <div className="publisher-modal" style={{fontSize:"40px",fontWeight:"600",color:"teal"}}><h5 className="modal-info"><span style={{color:"black",fontWeight:"bold"}} >Publisher:</span>{publisher}</h5></div>
                    <div className="publisher-modal"><h5 className="modal-info"> <span style={{color:"black",fontWeight:"bold"}} >Category:</span>{category}</h5></div>
                    <Rating rating={rate} review={reviews} />
                    <h5><span style={{color:"black",fontWeight:"bold"}} >Price:</span> {newPrice}</h5>
                    <div className="modal-addtocart">
                        <input type="number" min="1" max="100" className="modal-addinput"  placeholder="number" style={{border:"1px solid black"}} value={qty} onChange={e=>setQty(e.target.value)}/>
                        <button onClick={()=>addToCart({...bookData,quantity:qty})} className=" modal-addtocartbtn" style={{padding:"10px"}}> Add To cart   <IoCartOutline className="s-icons" /> </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Modal;