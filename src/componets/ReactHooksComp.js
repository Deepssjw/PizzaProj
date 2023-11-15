import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const ReactHooksComp = () => {
    return (
        <div>
            <h2>This is React Hooks Component</h2>
            <div className='card border-primary'>
                <div className='card-header border-primary'>
                    <Link to="usestate" className='btn btn-info btn-sm'>UseState</Link>{" "}
                    <Link to="useeffect" className='btn btn-info btn-sm'>UseEffect</Link>
                </div>
                <div className='card-body border-primary'>
                <Outlet></Outlet>
                </div>
            </div>
            
        </div>
    )
}

export default ReactHooksComp
