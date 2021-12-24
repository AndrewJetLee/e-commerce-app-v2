import React from 'react'
import { useLocation } from "react-router-dom"

const Success = () => {
    const location = useLocation();
    const data = location.state.stripeData; 
    const cart = location.state.cart; 
    console.log(data, cart);
    console.log(location);
    return (
        <div>
            You did it buddy
        </div>
    )
}

export default Success
