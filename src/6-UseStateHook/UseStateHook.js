import React, { useState } from 'react'

const UseStateHook = () => {

    const [color,setColor] = useState("orange")

    const [car,setCar] = useState({
        brand:"Ford",
        model:"Mustang",
        year:"1964",
        color:"Red"
    })
    const updateColor = () => {
       setCar(previousState => {
        return{...previousState, color:"Pink"}
       })
    }

  return (
    <div>
        <h2>My favorite color is {color}</h2>
        <button type="button" onClick={()=>setColor("blue")}>Blue button</button>

        <h2>It is a {car.color} {car.model} from {car.year}</h2>
        <button type="button" onClick={()=>setCar({...car,year:"1980",model:"Doblo"})}>Chance car</button>
        <button type="button" onClick={updateColor}>Updae car color</button>
    </div>
  )
}

export default UseStateHook