import axios from 'axios';
import React, { useEffect ,useState} from 'react'
import { useParams,useNavigate } from 'react-router-dom';

const EditComp = () => {
    const {id} = useParams();
    const nav = useNavigate();
    
    const [product,setProduct] =useState({
        pname:"",
        pprice:"",
        psize:"",
        poffer:""
    })
    useEffect(()=>{
        axios.get("http://localhost:8888/product").then((res)=>{
            // console.log(res.data);
            setProduct(res.data)
        }).catch((err)=>{})
    },[])

    const inputHandler = (event)=>{
        //  console.log(event.target.type)
        //  console.log(event.target.name)
        //  console.log(event.target.value)
        setProduct({...product,[event.target.name]:event.target.value})
        }
        const updateproduct = (event)=>{
            event.preventDefault();
            axios.put("http://localhost:8888/product",product).then(()=>{
                window.alert("Product Updated successfully");
                nav("/Dashboard");
            }).catch((err)=>{})
        }
    return (
        <div>
            <h2>This is Edit Component</h2>
            <form onSubmit={updateproduct}>
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

export default EditComp
