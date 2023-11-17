import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
const ProtectedRoute = (props) => {

    const nav = useNavigate()
   useEffect(()=>{
    let currentUser = !sessionStorage.getItem("user")
    if(currentUser){
         nav("/login")
    }
   },[])

    const {Component} = props;
    return (
        <div>
            {/* <h2>This is protected rote</h2> */}
            <Component></Component>
            
            
        </div>
    )
}

export default ProtectedRoute
