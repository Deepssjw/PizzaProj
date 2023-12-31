import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
const AddComp = () => {
    const nav = useNavigate();
    const [product,setProduct] =useState({
        pname:"",
        pprice:"",
        psize:"",
        poffer:""
    })
    const inputHandler = (event)=>{
    //  console.log(event.target.type)
    //  console.log(event.target.name)
    //  console.log(event.target.value)
    setProduct({...product,[event.target.name]:event.target.value})
    }
    const addData = (event)=>{
        event.preventDefault();
        // console.log(product)
        axios.post("http://localhost:8888/product",product).then(()=>{
            window.alert("product added Successfully");
            nav("/Dashboard");
        }).catch((err)=>{})
    }
    return (
        <div>
           <form onSubmit={addData}>
              <div className='form-group'>
                   <label className='form-label'>Enter Pizza Name</label>
                   <input type='text' name='pname' className='form-control' onChange={inputHandler} value={product.pname}/>
              </div>
              <div className='form-group'>
                   <label className='form-label'>Enter Pizza Price</label>
                   <input type='text' name='pprice' className='form-control' onChange={inputHandler} value={product.pprice}/>
              </div>
              <div className='form-group'>
                   <label className='form-label'>Enter Pizza Size</label>
                   <input type='text' name='psize' className='form-control' onChange={inputHandler} value={product.psize}/>
              </div>
              <div className='form-group'>
                   <label className='form-label'>Enter offer</label>
                   <input type='text' name='poffer' className='form-control' onChange={inputHandler} value={product.poffer}/>
              </div>
              <button type='submit' className='btn btn-primary mt-2'>Submit</button>
            </form> 
        </div>
    )
}

export default AddComp
