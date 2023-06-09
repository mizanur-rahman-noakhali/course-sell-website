import React from 'react';

const Cart = (props) => {
     const cart=props.cart
     let total=0;
     for(let i=0;i<cart.length;i++){
      const product=cart[i];
      total=total+product.price;
     }
      
      const formateNumber=num =>{
        const precision=num.toFixed(2);
        return Number (precision);
      }
    
  return (
    <div>
      <h4>Order Sumary</h4>
      <p>Item Ordered:{cart.length}</p>
      <p>Total Price:{formateNumber(total)}</p>
    </div>
  );
};

export default Cart;