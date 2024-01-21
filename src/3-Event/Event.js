import React from 'react'

const Event = () => {

    const shoot = () => {
        alert("Great shoot")
    }

    const shoot2 = (a) => {
        alert(a)
    }

    const shoot3 = (a,b) => {
        alert(b.type)
        console.log(b.target)
        b.target.innerHTML = "İçerik değişti"
    }

  return (
    <div>
        <button onClick={shoot}>Take the shoot</button>

        <button onClick={()=>shoot2("Goal")}>Take the shoot 2</button>

        <button onClick={(event)=>shoot3("Goal",event)}>Take the shoot 3</button>
    </div>
  )
}

export default Event