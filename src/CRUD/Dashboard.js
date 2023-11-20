import axios from 'axios';
import React, { useEffect, useState } from 'react';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import EditIcon from '@mui/icons-material/Edit';
import { Link } from 'react-router-dom';

const Dashboard = () => {
          const [product,setProduct]  = useState([])
       
          useEffect(()=>{
            fetchData();
          },[])
         const fetchData = ()=>{
            axios.get("http://localhost:8888/product").then((res)=>{
                // console.log(res.data);
                setProduct(res.data);
            }).catch((err)=>{})
         }
         const deleteProduct =(id)=>{
             if(window.confirm(`Are you sure to delete product with id : ${id}`)){
                axios.delete(`http://localhost:8888/product/${id}`).then(()=>{
                    window.alert("Product Deleted Successfully");
                    fetchData();
                   }).catch((err)=>{})
             }
         }




    return (
        <div>
           {/* <h2>This is Dashboard offer</h2>  */}
           {/* <Link to={'/dashboard/dashboard1'} className='btn btn-primary mb-2'>Dashboard</Link> */}
           <Link to={`/addcomp/`} className='btn btn-primary mb-2'>Add</Link>
           <table className='table table-hover table-striped'>
            <thead>
                <tr className='table-dark'>
                    <th>S.No</th><th>PizzaName</th><th>Price</th><th>Size</th><th>Offer</th><th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    product.map((val,index)=>{
                        return <tr>
                            <td>{index+1}</td>
                            <td>{val.pname}</td>
                            <td>{val.pprice}</td>
                            <td>{val.psize}</td>
                            <td>{val.poffer}</td>
                            <td>
                                <Link to={`/EditComp/${val.id}`} className='btn btn-outline-success btn-sm' >
                                <EditIcon></EditIcon>
                                </Link> | 
                                <button type='button' onClick={()=>deleteProduct(val.id)} className='btn btn-outline-danger btn-sm'>
                                    <DeleteRoundedIcon ></DeleteRoundedIcon >
                                </button>
                            </td>
                        </tr>
                    })
                }
            </tbody>
           </table>


   
        </div>
    )
}

export default Dashboard
