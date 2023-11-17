import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'



const LoginSignup = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })
    const [errors, setErrors] = useState({})
    const [valid, setValid] = useState(true)
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        let isvalid = true;
        let validationErrors = {}

        if (formData.email === "" || formData.email === null) {
            isvalid = false;
            validationErrors.email = "Email is required"
        } else if (!/^[A-Z0-9._%+-]+@[A-Z.-]+\.[A-Z]$/i) {
            isvalid = false;
            validationErrors.email = "Email is Not valid"
        }
        if (formData.password === "" || formData.password === null) {
            isvalid = false;
            validationErrors.password = "Password required"
        } else if (formData.password.length < 6) {
            isvalid = false;
            validationErrors.password = "Password length must above 6 characters"
        }



        axios.get('http://localhost:8888/admin')
            .then(result => {
                result.data.map(user => {
                    if (user.email === formData.email) {
                        if (user.password === formData.password) {
                            alert("Welcome Admin Page")
                            navigate('/dashboard')
                        }
                        else if ((user.password !== formData.password)) {
                            isvalid = false;
                            validationErrors.password = "Wrong Password"
                        }
                    }
                    else if (formData.email !== "") {
                        isvalid = false;
                        validationErrors.email = "Wrong Email"
                    }
                })
                setErrors(validationErrors)
                setValid(isvalid)
            })
            .catch(err => console.log(err))




        axios.get('http://localhost:8888/users1')
            .then(result => {
                result.data.map(user => {
                    if (user.email === formData.email) {
                        if (user.password === formData.password) {
                            alert("Welcome User ")
                            navigate('/dashboard1')
                        }
                        else if ((user.password !== formData.password)) {
                            isvalid = false;
                            validationErrors.password = "Wrong Password"
                        }
                    }
                    else if (formData.email !== "") {
                        isvalid = false;
                        validationErrors.email = "Wrong Email"
                    }
                })
                setErrors(validationErrors)
                setValid(isvalid)
            })
            .catch(err => console.log(err))

    }

    return (
        <div>
            <div class="container">
                <div class="row">
                    <div class="col-md-6 offset-md-3">
                        <div class="signup-form">
                            <form class="mt-5 border p-4 bg-light shadow" onSubmit={handleSubmit}>
                                <h4 class="mb-5 text-secondary">Login</h4>
                                <div class="row">


                                    <div class="mb-3 col-md-12">
                                        <label>Email<span class="text-danger">*</span></label>
                                        <input type="email" name="email" class="form-control" placeholder="Enter Email"
                                            onChange={(event) => setFormData({ ...formData, email: event.target.value })} />
                                    </div>{valid ? <></> : <span className="text-danger">{errors.email}</span>}

                                    <div class="mb-3 col-md-12">
                                        <label>Password<span class="text-danger">*</span></label>
                                        <input type="password" name="password" class="form-control" placeholder="Enter Password"
                                            onChange={(event) => setFormData({ ...formData, password: event.target.value })} />
                                    </div>{valid ? <></> : <span className="text-danger">{errors.password}</span>}

                                    <div class="col-md-12">
                                        <button class="btn btn-primary" style={{ allign: 'center' }}>Login</button>
                                    </div>
                                </div>
                            </form>
                            <p class="text-center mt-3 text-secondary">If you don't have an account, Please <Link to="/Registration">Register</Link></p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default LoginSignup



// import React, { useRef, useState } from 'react'
// import '../Edit.css'
// import axios from 'axios';
// // import { useNavigate } from 'react-router-dom';
// import { Link, useNavigate } from 'react-router-dom';

// const Login = () => {
//     const nav = useNavigate();
//     let userId = useRef();
//     let userPass = useRef();
//     const [userData,setUserData] = useState([])
//     const loginUser =()=>{
//         // console.log(userId.current.value)
//         // console.log(userPass.current.value)
//         let uid = userId.current.value;
//         let upass = userPass.current.value;
//         axios.get("http://localhost:8888/users").then((res)=>{
//             // console.log(res.data);
//             setUserData(res.data);
//            const data = userData.filter((val)=>{ return val.uname===uid && val.upass===upass});
//            if(data.length > 0){
//             sessionStorage.setItem("user",uid);
//             nav("/dashboard");
//            }else{
//             window.alert("Wrong Crendentail");
//             userId.current.value="";
//             userPass.current.value="";
//            }

//         }).catch((err)=>{})
//     }
//     return (
//         <div>
//             <h1>Login</h1>

//            <form className='myform'>
//             <label>Enter User Id</label>
//             <input type='text' name='userid' ref={userId} className='form-control' />
//             <label>Enter User Password</label>
//             <input type='text' name='userpass' ref={userPass} className='form-control' />
//             <button type='button' className='btn btn-success mt-2' onClick={loginUser}>Login</button>
//             {/* <a href='reactpro\src\Project\Verification\Register.js'>Register</a> */}
//             <p class="text-center mt-3 text-secondary">If you don't have an account, Please <Link to="/Registration">Register</Link></p>
//            </form>
           
//         </div>
//     )
// }

// export default Login