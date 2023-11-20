import React from 'react'
import pizzas from './Pizzas'
import Pizzacomp from './PizzaCom'
import Navcomp from './NavCom'



export default function Homescreen() {
    return (
        <div>
            <Navcomp></Navcomp>
            
           <div className='row'>
              {pizzas.map(pizza=>{
                return <div className='col-md-4'>
                    <div>
                        
                        <Pizzacomp pizza={pizza}></Pizzacomp>

                    </div>
                </div>
              })}
           </div>
           

        </div>
    )
}