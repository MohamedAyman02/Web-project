 import Category from "./Category/Category";
import Price from "./Price/Price";
import Publisher from "./Publisher/Publisher"
import "./Sidebar.css";
 
 function Sidebar({handleChange}) {
  
  return( <>
 <section className='sidebar'>
 
  <div className="logo-container">
    <h1>🛒</h1>
  </div>
 {/* making fn available in each one in sidebar*/}
  <Category handleChange={handleChange}/>
  <Price handleChange={handleChange}/>
  <Publisher handleChange={handleChange}/>


  </section>
  </>
  );
}

export default Sidebar;