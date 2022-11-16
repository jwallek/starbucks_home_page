import './vacation.css'

import React from 'react'

function Vacation() {
  return (
    <div className="vacation"> 
          <div className='vacation-title'>
              <h2>Vacation Vibes</h2>
              <p className='vacation-desc'>
                With zesty lime frosting and sweet, dried
                coconut, our new Lime-Frosted Coconut Bar
                tastes like summertime.
              </p>
              <button>Order now</button>
          </div>
          <img alt="" className='vacation-img' src="./images/vacation.jpeg"></img>
          
    </div>
  )
}

export default Vacation