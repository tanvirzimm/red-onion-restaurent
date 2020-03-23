import React, { useState, createContext, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import foodData from '../../foodData';
import './FoodDetails.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';



// const QuantityContext =  createContext();
// export const QuantityContextProvider = (props) => {
    
// return <QuantityContext.Provider> {props.children}</QuantityContext.Provider>
// }



// export const useCart = () => useContext(QuantityContext);



const FoodDetails = (props) => {
   const {id} = useParams();
   const [itemcount,setItemcount] = useState(0);
   const selectedItem = foodData.find(fd => fd.id == id);
   const {name,details,image,price} = selectedItem;

   
  



           
   
    return (

        <div className='row'>

            <div className="col-lg-6">
                <h1>{name}</h1>
                <p>{details}</p>

                <div className="row">

                    <div className="col-2">
                    <h2>${price}</h2>
                    </div>

                    <div className="col-10">
                      <div className="addRemove">
                          <button className='counter' onClick={() => itemcount>0 ? setItemcount(itemcount-1):  setItemcount(0)}>-</button>
                          <input type="text" value={itemcount} readOnly/>
                          <button className='counter' onClick={() => setItemcount(itemcount+1)}>+</button>
                        </div>  
                    </div>
                   <Link to='/'> <button className='addButton' onClick={() => props.addSelectedItem(itemcount,id)}><FontAwesomeIcon icon={faShoppingCart} /> Add</button></Link>
                </div>

            </div>


            <div className="col-lg-6">
                <img src={image} alt=""/>
            </div>
            
        </div>
    );
};

export default FoodDetails;