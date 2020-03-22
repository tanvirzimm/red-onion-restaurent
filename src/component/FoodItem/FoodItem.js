import React from 'react';
import './FoodItem.css'

const FoodItem = (props) => {

    const {name,shortDetails,price,image} = props.foodItem;

    return (
        <div className='col-lg-4'>
             <div className='foodItem'>
                <img src={image} alt=""/>
                <h4>{name}</h4>
                <p>{shortDetails}</p>
                <h4>${price}</h4>
             </div>
        </div>
    );
};

export default FoodItem;