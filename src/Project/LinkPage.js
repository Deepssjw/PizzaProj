import React from 'react'
import { Link } from 'react-router-dom';

const LinkPage = () => {
    return (
        <div>
            <Link to="" className='btn btn-secondary btn-sm'>HOME</Link>{" "}
            <Link to="about" className='btn btn-secondary btn-sm'>About us</Link>{" "}
            <Link to="Contact" className='btn btn-secondary btn-sm'>Contact</Link>{" "}
            <Link to="Menu" className='btn btn-secondary btn-sm'>Menu</Link>{" "}
            <Link to="Login" className='btn btn-secondary btn-sm'>Login</Link>{" "}
        </div>

        
    )
}

export default LinkPage
