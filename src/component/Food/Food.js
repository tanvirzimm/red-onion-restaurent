import React, { useState, useEffect } from 'react';
import './Food.css'
import foodData from '../../foodData';
import FoodItem from '../FoodItem/FoodItem';

const Food = () => {


    const data = foodData;
    const [allfood,setAllfoods] = useState(data);
    const [category,setCategory] = useState([]);


    useEffect(()=>{
        const lunch =  allfood.filter(fd => fd.category === 'lunch')
        setCategory(lunch);
    },[])


    const findCategory = (value) => {
        if(value === 'breakfast')
        {
          const breakfastItems =  allfood.filter(fd => fd.category === 'breakfast')
          setCategory(breakfastItems);
          
        }
        else if(value === 'lunch')
        {
          const lunchItems =  allfood.filter(fd => fd.category === 'lunch')
          setCategory(lunchItems);
        }
    }



    return (
        <div>
           <div className="container custom-style">
               <div className="row">
                   <div className="col-12">
                   <ul className='category d-flex justify-content-center'>
                        <li onClick={() => findCategory('breakfast')}>Breakfast</li>
                        <li onClick={() => findCategory('lunch')}>Lunch</li>
                        <li onClick={() => findCategory('dinner')}>Dinner</li>
                    </ul>
                   </div>
                
                 
                <div className="col-12">
                            <div className="row">
                                
                                {
                                category.map(fd => <FoodItem foodItem={fd}></FoodItem>)
                                }
                                
                            </div>
                </div>      
                   
                </div>
           </div>
        </div>
    );
};

export default Food;