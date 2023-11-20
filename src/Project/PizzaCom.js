import React, { useState } from 'react'
import pizzas from './Pizzas'
// import { Modal } from '@mui/base';
import { Modal } from 'react-bootstrap'
// import { Modal} from 'react-redux'

export default function Pizzacomp({ pizza }) {
    const [quantity, setquantity] = useState(1)
    const [varient, setvarient] = useState("small")
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div style={{ margin: '70' }} className="shadow-lg p-3 mb-5 bg-body rounded">
            <div onClick={handleShow}>
                <h1>{pizza.name}</h1>
                <img src={pizza.image} className='img-fluid' style={{ height: '200px', width: '200px' }} />
            </div>
            <div className='flex-container '>
                <div className='w-100 m-1'>
                    <p>varients</p>
                    <select className='form-control' value={varient} onChange={(e) => { setvarient(e.target.value) }}>
                        {pizza.varients.map(varient => {
                            return <option value={varient}>{varient}</option>
                        })}
                    </select>
                </div>
                <div className='w-100 m-1'>
                    <p>Quantity</p>
                    <select className='form-control' value={quantity} onChange={(e) => { setquantity(e.target.value) }}>
                        {[...Array(10).keys()].map((x, i) => {
                            return <option value={i + 1}>{i + 1}</option>
                        })}
                    </select>
                </div>

            </div>
            <div className='flex-container '>
                <div className='m-1 w-100'>
                    <h1>price : {pizza.prices[0][varient] * quantity} Rs/-</h1>
                </div>
                <div className='m-1 w-100'>
                    <button className='btn1'  href="https://www.zomato.com/users/durai-murugan-b-s-321955308/bookmarks" >ADD TO CART</button>
                    {/* <a className="btn1 " href="https://www.zomato.com/users/durai-murugan-b-s-321955308/bookmarks">CART</a> */}
                </div>

            </div>

            <Modal show={show}>
                <Modal.Header closeButton>
                    <Modal.Title>{pizza.name}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <img src={pizza.image} className='img-fluid' style={{height:'400px'}}/>
                    <p>{pizza.description}</p>
                </Modal.Body>

                <Modal.Footer>
                    <button className='btn' onClick={handleClose}>CLOSE</button>
                </Modal.Footer>
            </Modal>
            
        </div>
    )
}