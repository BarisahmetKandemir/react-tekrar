import React from 'react'

const Car = ({definition,adition}) => {
  return (
    <div>
        {/* <h2>I am a {probs.brand}</h2> */}
        {/* <h2>I am a {probs.brand.name} and {probs.brand.model}</h2> */}
        {/* <h2>{probs.definition.myCar.carName}</h2>
        <h2>{probs.definition.person.location}</h2> */}

        <h2>{definition.myCar.carName}</h2>
        <h2>{adition.carAge}</h2>
    </div>
  )
}

export default Car