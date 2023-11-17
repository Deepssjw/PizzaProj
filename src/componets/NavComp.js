import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const NavComp = () => {
  const nav = useNavigate();
  const [currentUser,setCurentUser] = useState("")
    useEffect(()=>{
       setCurentUser(sessionStorage.getItem("user"));
       console.log(currentUser)
    },[]);
    const logout = ()=>{
      if(window.confirm("Are You Sure to Logout")){
          sessionStorage.clear();
           nav("/login");
           setCurentUser("");
      }
    }
    return (
        <div>
          <Link to="myimages" className='btn btn-primary btn-sm'>MyImg</Link>{" "}
          <Link to="classcomp"  className='btn btn-primary btn-sm'>ClassComp</Link>{" "} 
          <Link to="funcomp"  className='btn btn-primary btn-sm'>FunComp</Link> {" "}
          <Link to="mystate" className='btn btn-primary btn-sm'>MyState</Link>{" "}
          <Link to="mycss"  className='btn btn-primary btn-sm'>MyCss</Link>{" "} 
          <Link to="cakecontainer"  className='btn btn-outline-danger btn-sm'>CakeContainer</Link> {" "}
          <Link to="reacthook"  className='btn btn-outline-warning btn-sm'>ReactHook</Link> {" "}
          <Link to="dashboard"  className='btn btn-outline-danger btn-sm'>CRUD</Link> {" "}
          
          
          <button style={{float:"right"}} type='button' onClick={logout} className='btn btn-danger btn-sm'>Logout</button>
          <button type='button' className='btn' style={{float:"right"}}>
            <strong>{currentUser}</strong>
          </button>
        </div>
    )
}

export default NavComp
