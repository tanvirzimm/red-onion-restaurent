import React from 'react';
import './FoodItem.css'
import { Link } from 'react-router-dom';

const FoodItem = (props) => {

    const {id,name,shortDetails,price,image} = props.foodItem;

    return (
      
        <div className='col-lg-4'>
            <Link to={'/food-details/'+ id}>
             <div className='foodItem'>
                <img src={image} alt=""/>
                <h4>{name}</h4>
                <p>{shortDetails}</p>
                <h4>${price}</h4>
             </div>
             </Link>
        </div>
    );
};

export default FoodItem;