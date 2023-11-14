import React from 'react';
import './Cart.css'
import { useTShirtsContext } from '../context/useTShirtsContext';

const Cart = () => {
    const { cart ,deleteToCart} = useTShirtsContext();
    const handleRemove = (id) => {
        deleteToCart(id)
    }
    return (
        <div>
            <h1>Selected Items : {cart?.length}</h1>
            {cart?.map((cart, index) => <p key={cart?._id}>
               
                <>{cart?.name}</>
                <button onClick={()=>handleRemove(cart?._id)}>x</button>
            </p>)}
        </div>
    );
};

export default Cart;