import React, { useRef, useState } from 'react'
import './external.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const nav = useNavigate();
    let userId = useRef();
    let userPass = useRef();
    const [userData,setUserData] = useState([])
    const loginUser =()=>{
        // console.log(userId.current.value)
        // console.log(userPass.current.value)
        let uid = userId.current.value;
        let upass = userPass.current.value;
        axios.get("http://localhost:8888/users").then((res)=>{
            // console.log(res.data);
            setUserData(res.data);
           const data = userData.filter((val)=>{ return val.uname===uid && val.upass===upass});
           if(data.length > 0){
            sessionStorage.setItem("user",uid);
            nav("/dashboard");
           }else{
            window.alert("Wrong Crendentail");
            userId.current.value="";
            userPass.current.value="";
           }

        }).catch((err)=>{})
    }
    return (
        <div>
            <h1>Login</h1>

           <form className='myform'>
            <label>Enter User Id</label>
            <input type='text' name='userid' ref={userId} className='form-control' />
            <label>Enter User Password</label>
            <input type='text' name='userpass' ref={userPass} className='form-control' />
            <button type='button' className='btn btn-success mt-2' onClick={loginUser}>Login</button>
           </form>

        </div>
    )
}

export default Login
