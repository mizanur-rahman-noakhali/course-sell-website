import React, { useState } from 'react';
import fakeData from '../../fakeData';
import './Category.css';

const Category = () => {
  const first10=fakeData.slice(0,10);
  const [udemyBusinesses, setUdemyBusiness]=useState(first10);
  return (
    <div  className='udemyBusiness-container'>
     <div className='techOnUdemy-container'>
     <ul>
      {
        udemyBusinesses.map(udemyBusiness=> <li>{udemyBusiness.name}</li>)
      }
      </ul>
     </div>
    <div className='cart-container'>
         <h1>This is cart</h1>
    </div>
     
    </div>
  );
};

export default Category;