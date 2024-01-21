import React from 'react'

const JSX = () => {
   const myElement = <h2>I love JSX</h2>

   const myElement2 = <h2>React is {5+5} times better is javascript</h2>

    const myElment3 = (
        <ul>
            <li>Apple</li>
            <li>Banana</li>
            <li>Chery</li>
        </ul>
    )

    const myElement4 = <input type="text"/>

    const x = 5;
    const myElment5 = <h2>{x < 10 ? "Hello":"Goodbye"}</h2>

  return (
    <div>
        <h1>JSX</h1>
        {myElement}
        {myElement2}
        {myElment3}
        {myElement4}
        {myElment5}
    </div>
  )
}

export default JSX