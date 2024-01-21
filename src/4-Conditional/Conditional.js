import React from 'react'
import Goal from './Goal'
import Garage from './Garage'

const Conditional = () => {
    const cars = ["Ford","Audi","BMW"]
  return (
    <div>
        {/* <Goal isGoal={false}/> */}
        <Garage cars={cars}/>
    </div>
  )
}

export default Conditional