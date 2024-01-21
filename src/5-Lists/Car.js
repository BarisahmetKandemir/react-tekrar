import React from 'react'

const Car = (probs) => {
  return (
      <li>
        {probs.value + 1} {probs.brand}
      </li>
  )
}

export default Car