import './drinks.css'

import React from 'react'

function Drinks() {
  return (
    <div className="drinks"> 
          <div className='drinks-title'>
              <h2>Summer's <br/>brightest new <br/> drinks</h2>
              <p className='drinks-desc'>Introducing the Pineapple Passionfruit
                  Starbucks Refreshers beverage and the 
                  Starbucks Paradise Drink with creamy
                  coconutmilk.
              </p>
              <button>Learn more</button>
          </div>
          <img alt="" className='drink-img' src="./images/drinks.jpeg"></img>
          
    </div>
  )
}

export default Drinks