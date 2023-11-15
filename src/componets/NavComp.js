import React from 'react'
import { Link } from 'react-router-dom';

const NavComp = () => {
    return (
        <div>
          <Link to="myimages" className='btn btn-primary btn-sm'>MyImg</Link>{" "}
          <Link to="classcomp"  className='btn btn-primary btn-sm'>ClassComp</Link>{" "} 
          <Link to="funcomp"  className='btn btn-primary btn-sm'>FunComp</Link> {" "}
          <Link to="mystate" className='btn btn-primary btn-sm'>MyState</Link>{" "}
          <Link to="mycss"  className='btn btn-primary btn-sm'>MyCss</Link>{" "} 
          <Link to="reacthook"  className='btn btn-outline-warning btn-sm'>ReactHook</Link> {" "}
          <Link to="dashboard"  className='btn btn-outline-danger btn-sm'>CRUD</Link> {" "}
        </div>
    )
}

export default NavComp
