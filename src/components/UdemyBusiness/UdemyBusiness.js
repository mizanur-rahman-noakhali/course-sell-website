import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './UdemyBusiness.css';
const UdemyBusiness = (props) => {
  //console.log(props);
  const { name, price } = props.udemyBusiness;
  return (
    <div className='udemy-business'>
      <h3 className='udemy-business-name'>{name}</h3> <br />
      <p>${price}</p>
      <button
         className='main-button' onClick={() => props.handleAddProduct(props.udemyBusiness)}
          >           
                       <FontAwesomeIcon icon={faShoppingCart}/>Enroll now</button>
    </div>
  );
};

export default UdemyBusiness;