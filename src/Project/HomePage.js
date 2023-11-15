import React, { Component } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LinkPage from './LinkPage';
import './Edit.css'
import About from './About';
import Frontpage from './Frontpage';
import ProjectLogin from './Login';
import ProjectMenu from './Menu';

 class HomePage extends Component {
    render() {
        return (
            <div className='container-fuiled '>
                <BrowserRouter>
                
                   
                   
                   
                    <div className='card '>             
                   
                   
                   
                        <div className='color1'>   
                        <div className='card-header'>
                            
                            <LinkPage></LinkPage>
                        </div>
                                          
                       
                       
                        </div>
                        <div class='card-body '> 
                            <div className=' footer1 '>
                                {/* <h1 className='body1'>  1 + 1 offer </h1> */}
                            <Routes>
                                <Route path='' element={<Frontpage></Frontpage>}></Route>
                                <Route path='about'element={<About ></About>}></Route>
                                <Route path='Login' element={<ProjectLogin></ProjectLogin>}></Route>
                                <Route path='Menu' element={<ProjectMenu></ProjectMenu>}></Route>
                            
                                               
                        
                            
                            </Routes>
                                
                                
                            </div>
                        </div>
                       
                       
                       
                       
                       
                        <div className='color'>
                        <div  className=' card-footer  footer '>
                            
                            <div className='footer1 '>
                                <h5>Franchise Information</h5>
                                <p>
                                Jubilant FoodWorks Limited is the Master Franchisee of Domino’s Pizza in India, Bangladesh, 
                                Sri Lanka and Nepal with sole and exclusive rights to own and operate Domino’s Pizza restaurants 
                                in these territories.
                                </p>
                            </div>                             
                            <div className='footer2'>
                                <h5>Delivery or Pickup</h5>
                                <p>
                                So stop googling for the “pizza shops near me” and order from your nearest pizza outlet to have
                                a hot box of pizza on your table in the next 30 minutes, or berth at the next halting station.
                                </p>
                            </div>
                            <div className='footer3 '> 
                                <h5>Offer</h5>
                                <p>
                                And to shoo away those end-of-the-month blues while placing your order with our pizza restaurant,
                                 check out the everyday pizzas from pizza mania combos with everyday value offer of 2 pizzas starting 
                                 at just ₹99 (regular size) and ₹199 (medium size) each.
                                </p>
                            </div>
                            <div className='footer4'> 
                                <h5>Location</h5>
                                    <a href='https://maps.app.goo.gl/s8Fpx8FL7GdxNAod7'>Google Maps </a>
                            </div>
                            <div className='footer5'>
                                <h5>Address</h5>
                                <p>
                                Domino''s Pizza India,
                                Tower-D, Plot No. 5,
                                5th Floor, Logix Techno Park,
                                Sector 127, Noida - 201304, U.P.
                                </p>
                            </div>
                            </div>
                        </div>
                        

                    </div>
                </BrowserRouter>

            </div>
        )
    }
}

export default HomePage
