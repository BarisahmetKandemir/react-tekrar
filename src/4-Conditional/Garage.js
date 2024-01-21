import React from 'react'

const Garage = ({cars}) => {

  return (
    <div>
        <h2>Garage</h2>
        {cars.lenght > 0 && <h3>You have {cars.lenght}cars in your garage</h3>}
    </div>
  )
}

export default Garage