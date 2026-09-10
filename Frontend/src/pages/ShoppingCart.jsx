// Create a shopping cart where the user can increase/decrease the quantity of a product. The quantity should not go below 0.  
import React from 'react'
import { GiShoppingCart } from "react-icons/gi";
import Counter from './Counter';
import { useNavigate } from 'react-router-dom';

function ShoppingCart() {
    const navigate = useNavigate();
  return (
    <div className='flex flex-col items-end justify-end m-2'>
        <GiShoppingCart onClick={()=> navigate("/addProduct")} className='size-10 object-top-right'/>
    </div>
  )
}

export default ShoppingCart