import React, { useState } from 'react';
import fakeData from '../../fakeData';
import './Category.css';
import UdemyBusiness from '../UdemyBusiness/UdemyBusiness';
import Cart from '../Cart/Cart';

const Category = () => {
  const first10=fakeData.slice(0,10);
  const [udemyBusinesses, setUdemyBusiness]=useState(first10);
  const [cart,setCart]= useState([]);

  const handleAddProduct=(product)=>{
    
    const newCart=[...cart,product];
    setCart(newCart);
  }
  return (
    <div  className='udemyBusiness-container'>
     <div className='techOnUdemy-container'>
     
      {
        udemyBusinesses.map(udemyBusiness=> <UdemyBusiness

          handleAddProduct={handleAddProduct}
           udemyBusiness={udemyBusiness}>

           </UdemyBusiness>)
      }
      
     </div>
    <div className='cart-container'>
        <Cart cart={cart}></Cart>
    </div>
     
    </div>
  );
};

export default Category;