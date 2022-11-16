import './protein.css'

import React from 'react'
import './protein.css'

function Protein() {
  return (
    <div className="protein"> 
         <img alt="" className='protein-img' src="./images/protein.jpeg"></img>
          <div className='protein-title'>
          
              <h2>Anytime protein</h2>
              <p className='protein-desc'>
                  The Impossible Breakfast Sandwich** will
                  keep you going with a plat-based sausage
                  patty, cage-free fried egg and Cheddar on a sesame
                  ciabatta bun.
              </p>
              <button>Order now</button>
          </div>     
    </div>
  )
}

export default Protein