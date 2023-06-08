import React, { useState } from 'react';
import fakeData from '../../fakeData';
import './Category.css';
import UdemyBusiness from '../UdemyBusiness/UdemyBusiness';

const Category = () => {
  const first10=fakeData.slice(0,10);
  const [udemyBusinesses, setUdemyBusiness]=useState(first10);

  const handleAddProduct=(product)=>{
    console.log("course Added",product);
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
         <h1>This is cart</h1>
    </div>
     
    </div>
  );
};

export default Category;