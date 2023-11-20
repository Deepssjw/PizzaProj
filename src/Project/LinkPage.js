import { useState,useEffect } from 'react';
import React from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const LinkPage = () => {


    const nav = useNavigate();
  const [currentUser,setCurentUser] = useState("")
    useEffect(()=>{
       setCurentUser(sessionStorage.getItem("user"));
       console.log(currentUser)
    },[]);
    const logout = ()=>{
      if(window.confirm("Are You Sure to Logout")){
          sessionStorage.clear();
           nav("");
           setCurentUser("");
      }
    }



    return (
        <div>
            <h5 className='tittle' style={{float:"left"}} >Tasty Pizza</h5> {" "}
            <img src="https://image.similarpng.com/very-thumbnail/2020/05/Pizza-logo-design-template-Vector-PNG.png" width="50"height="40" 
            style={{float:"left"}} />
            <Link to="" className='btn btn-secondary btn-sm'>HOME</Link>{" "}
            <Link to="about" className='btn btn-secondary btn-sm'>About us</Link>{" "}
            <Link to="Contact" className='btn btn-secondary btn-sm'>Contact</Link>{" "}
            <Link to="Menu" className='btn btn-secondary btn-sm'>Menu</Link>{" "}
            <Link to="LoginSignup" className='btn btn-secondary btn-sm'>Login/Signup</Link>{" "}
            {/* <Link to="dashboard1" className='btn btn-secondary btn-sm'>Dashboard</Link> */}
            
            {/* <Link to="dashboard" className='btn btn-secondary btn-sm'>Dashboard</Link>{" "} */}
           {/* <Link to="home" className='btn btn-secondary btn-sm'>CARD PAGE</Link>{" "} */}


            {/* <Link to="LoginPage" className='btn btn-secondary btn-sm'>LOGINPAGE</Link> */}



            <button style={{float:"right"}} type='button' onClick={logout} className='btn btn-danger btn-sm'>Logout</button>
           <button type='button' className='btn' >
            <strong>{currentUser}</strong>
           </button> 
        </div>

        
    )
}

export default LinkPage
