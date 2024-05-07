import React,{useState} from "react";
import { Carousel, ExampleCarouselImage } from "react-bootstrap";
//import img1 from '../../images/c170307b2959a2052dc5bfe69fa71025.jpg;
import img2 from '../../imgs/pexels-photo-1181671.jpg';
import img3 from '../../imgs/pexels-jess-bailey-designs-762686.jpg';
import img4 from '../../imgs/pexels-photo-207662.jpeg';
//import Book from "../book-slider/Book";
const Slider = () => {
    const [index,setIndex]=useState(0)
    const handleselect=(selectedidx)=>{
    setIndex(selectedidx)
    }
    return (
       
        <Carousel activeIndex={index} onSelect={handleselect}>
            <Carousel.Item interval={1000}>
            <div className="d-flex flex-row justify-content-center align-items-center" style={{backgroundImage:`url(${img2})`,height:'80vh',backgroundRepeat:'no-repeat',backgroundSize:'cover',width:"100%"}}>
                    {/* <img
                        style={{ height: "50", width: "100%" }}
                        className=""
                        src={img4}
                        alt="firstslid"
                    /> */}
                    
                </div>
            </Carousel.Item>
            <Carousel.Item interval={1000}>
                <div className="d-flex flex-row justify-content-center align-items-center" style={{backgroundImage:`url(${img3})`,height:'80vh',backgroundRepeat:'no-repeat',backgroundSize:'cover'}}>
                </div>
            </Carousel.Item>
            <Carousel.Item interval={1000}>
            <div className="d-flex flex-row justify-content-center align-items-center" style={{backgroundImage:`url(${img4})`,height:'80vh',backgroundRepeat:'no-repeat',backgroundSize:'cover'}}>
                    
                </div>
                
            </Carousel.Item>
          
        </Carousel>
        
       
    )
}
export default Slider;