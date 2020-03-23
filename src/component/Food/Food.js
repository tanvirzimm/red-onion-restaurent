import React, { useState, useEffect } from 'react';
import './Food.css'
import foodData from '../../foodData';
import FoodItem from '../FoodItem/FoodItem';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import FoodDetails from '../FoodDetails/FoodDetails';
import Login from '../Login/Login';


const Food = () => {


    const data = foodData;
    const [allfood,setAllfoods] = useState(data);
    const [category,setCategory] = useState([]);
    const [checkoutbutton,setCheckoutbutton] = useState(false);
    const [added,setAdded] = useState([]);
    console.log(added);


    useEffect(()=>{
        const lunch =  allfood.filter(fd => fd.category === 'lunch')
        setCategory(lunch);
    },[])

    //    const handleAddItem = () => {

//            const sameItem = added.find(fd => fd.id == selectedItem.id);
//             let count = 1;
//             let newCart = [];
//            if(sameItem){
//             count = sameItem.quantity + 1;
//             sameItem.quantity = count;
//             const othersItem = added.filter(fd => fd.id != sameItem.id);
//             newCart = [...othersItem,sameItem]
//            }
//            else{
//                newCart = [...added,selectedItem];
//            }

//    }


    
    const addSelectedItem = (itemsnumber,id) => {
        if(itemsnumber>0){
            setCheckoutbutton(true)
           
        }

        const recentlyAdded = data.find(fd=> fd.id == id)

        const sameData = added.find(fd=>fd.id==recentlyAdded.id);
        console.log(sameData);
        
        
        let newCart = [];
        if(sameData){
                
                sameData.quantity = sameData.quantity + itemsnumber;
                const others = added.filter(fd => fd.id != sameData.id);
                newCart = [...others,sameData];
        }

        else{
            recentlyAdded.quantity = itemsnumber;
            newCart = [...added,recentlyAdded];
        }
        
        setAdded(newCart);
    }
   
    
   
    

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

        else if(value === 'dinner')
        {
          const dinnerItems =  allfood.filter(fd => fd.category === 'dinner')
          setCategory(dinnerItems);
        }
    }




    return (
        <div>
        <Router>
           <div className="container custom-style">
               <div className="row">
                   <div className="col-12">
                   <ul className='category d-flex justify-content-center'>
                        <Link to='/'><li onClick={() => findCategory('breakfast')}>Breakfast</li></Link>
                        <Link to='/'><li onClick={() => findCategory('lunch')}>Lunch</li></Link>
                        <Link to='/'><li onClick={() => findCategory('dinner')}>Dinner</li></Link>
                    </ul>
                   </div>
                
                 
                <div className="col-12">
                            <div className="row">
                              
                                   <Switch>
                                 
                                        <Route path='/food-details/:id'>
                                                <FoodDetails addSelectedItem={addSelectedItem}></FoodDetails>
                                        </Route>
                                        <Route exact path='/'>
                                            {
                                                    category.map(fd => <FoodItem foodItem={fd} key={fd.id}></FoodItem>)
                                            }

                                            <div className="col-12 d-flex justify-content-center"> 
                                            {
                                                checkoutbutton ? <Link to='/login'><button className='checkout-button' style={{backgroundColor:'crimson',color:'white'}}>Checkout Your Food</button></Link>:
                                                <button className='checkout-button' disabled>Checkout Your Food</button>
                                            }                     
                                                
                                            </div>

                                        </Route>
                                        <Route path='/login'>
                                            <Login></Login>
                                        </Route>
                  
                                   </Switch>
                               
                            </div>
                </div>      
                   
                </div>
           </div>
           </Router>
        </div>
    );
};

export default Food;