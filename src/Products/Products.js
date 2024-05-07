import './Products.css';

 function Products({result}) {
  return(

   <>
  {/* this is card component where has image and another info about each book  */ }
  <section className='card-container'>
 
{result}

  
</section>
  
  
</>
  
  ); 
}
export default Products;