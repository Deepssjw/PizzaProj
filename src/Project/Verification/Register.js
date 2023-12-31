import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'

const Registration = () => {
    const [formData, setFormData] = useState({
        fname: '',
        lname: '',
        email: '',
        password: '',
        cpassword: ''
    })
    const [errors, setErrors] = useState({})
    const [valid, setValid] = useState(true)
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        let isvalid = true;
        let validationErrors = {}
        if (formData.fname === "" || formData.fname === null) {
            isvalid = false;
            validationErrors.fname = "First name required"
        }
        if (formData.lname === "" || formData.lname === null) {
            isvalid = false;
            validationErrors.lname = "Last name required"
        }
        if (formData.email === "" || formData.email === null) {
            isvalid = false;
            validationErrors.email = "Email is required"
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i) {
            isvalid = false;
            validationErrors.email = "Email is Not valid"
        }
        if (formData.password === "" || formData.password === null) {
            isvalid = false;
            validationErrors.password = "Last name required"
        } else if (formData.password.length < 6) {
            isvalid = false;
            validationErrors.password = "Password length must above 6 characters"
        }
        if (formData.cpassword !== formData.password) {
            isvalid = false;
            validationErrors.cpassword = "Password not match"
        }
        setErrors(validationErrors)
        setValid(isvalid)

        if (Object.keys(validationErrors).length === 0) {
            axios.post('http://localhost:8888/users1', formData)
                .then(result => {
                    alert("Registered Successfully")
                    setFormData({
                        fname: '',
                        lname: '',
                        email: '',
                        password: '',
                        cpassword: ''
                    })
                    navigate('/LoginSignup')
                })
                .catch(err => console.log(err))
        }

    }

    return (
        <div>
            <div class="container">
                <div class="row">
                    <div class="col-md-6 offset-md-3">
                        <div class="signup-form">
                            <form class="mt-5 border p-4 bg-light shadow" onSubmit={handleSubmit}>
                                <h4 class="mb-5 text-secondary">Create Your Account</h4>
                                <div class="row">
                                    <div class="mb-3 col-md-6">
                                        <label>First Name<span class="text-danger">*</span></label>
                                        <input type="text" name="fname" class="form-control" placeholder="Enter First Name"
                                            onChange={(event) => setFormData({ ...formData, fname: event.target.value })} />
                                    </div>{valid ? <></> : <span className="text-danger">{errors.fname}</span>}

                                    <div class="mb-3 col-md-6">
                                        <label>Last Name<span class="text-danger">*</span></label>
                                        <input type="text" name="Lname" class="form-control" placeholder="Enter Last Name"
                                            onChange={(event) => setFormData({ ...formData, lname: event.target.value })} />
                                    </div> {valid ? <></> : <span className="text-danger">{errors.lname}</span>}

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

                                    <div class="mb-3 col-md-12">
                                        <label>Confirm Password<span class="text-danger">*</span></label>
                                        <input type="password" name="confirmpassword" class="form-control" placeholder="Confirm Password"
                                            onChange={(event) => setFormData({ ...formData, cpassword: event.target.value })} />
                                    </div>{valid ? <></> : <span className="text-danger">{errors.cpassword}</span>}

                                    <div class="col-md-12">
                                        <button class="btn btn-primary" style={{ allign: 'center' }}>Signup</button>
                                    </div>
                                </div>
                            </form>
                            <p class="text-center mt-3 text-secondary">If you have account, Please <Link to="/LoginSignup">Login</Link> Now</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Registration