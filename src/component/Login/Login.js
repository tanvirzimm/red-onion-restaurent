import React, { useState, useEffect } from 'react';
import logo from '../../images/logo2.png';
import { useForm } from 'react-hook-form';
import './Login.css'
import { useAuth } from './useAuth';
import { Link } from 'react-router-dom';

const Login = () => {
    const auth =  useAuth();
    const { register, handleSubmit, watch, errors } = useForm();
    const [signtoggle,setSigntoggle] = useState(false);
   

//    useEffect(()=>{
//     if(auth.user){
//         setSigntoggle(true);
//     }

//     else{
//         setSigntoggle(false);
//     }
//    })
    const onSubmit = data => { 

                if(signtoggle){
                    auth.SignIn(data.emai,data.password)
                }
                else{
                    auth.SignUp(data.email,data.password)
                }
                
     }

     console.log(signtoggle);
     
     
    return (
        <div  className='form'>
            <div className="form-logo">
                <img src={logo} alt=""/>
            </div>
            <div>


            {

           signtoggle ?
           <form onSubmit={handleSubmit(onSubmit)}>
           
           <input name="email" ref={register({ required: true })} placeholder='Email' />
           {errors.email && <span>This field is required</span>}
           <input name="password" ref={register({ required: true })} placeholder='Password' />
           {errors.password && <span>This field is required</span>}
           <input type="submit" value='Sign in'/>
           <label onClick={()=>setSigntoggle(false)}>Sign up ?</label>
          </form>

            :

      

 
            <form onSubmit={handleSubmit(onSubmit)}>
           <input name="name" ref={register} placeholder='Name'/>
           {errors.name && <span>This field is required</span>}
           <input name="email" ref={register({ required: true })} placeholder='Email' />
           {errors.email && <span>This field is required</span>}
           <input name="password" ref={register({ required: true })} placeholder='Password' />
           {errors.password && <span>This field is required</span>}
           <input name="confirmpassword" ref={register({ required: true })} placeholder='confirm password' />
           {errors.confirmpassword && <span>This field is required</span>}
           <input type="submit" value='Sign up'/>
           <label onClick={()=> setSigntoggle(true)}>Sign In ?</label>
           </form>


      
       }
            </div>
        </div>
    );
};

export default Login;
