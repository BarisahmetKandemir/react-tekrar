import React, { useEffect, useState } from 'react'

const UseEffectHook = () => {

    const [count,setCount] = useState(0)
    useEffect(()=>{
        setTimeout(()=>{
            setCount(count=>count + 1)
        },1000)
    })
    // UseEffectin kullanımı ilk seferinde bir kere çalıştır sonrasında render da tekrardan çalıştır yani sürekli çalışır.

    const [count2,setCount2] = useState(0)
    useEffect(()=>{
        setTimeout(()=>{
            setCount2(count2=>count2 + 1)
        },1000)
    },[])
    // Eğerki sondaki süslü parantezin yanına köşeli parantez koyarsak bu fonsiyona bağımlılık ekleriz ve sadece 1 kere çalışır.

    const [count3,setCount3] = useState(0)
    useEffect(()=>{
        setTimeout(()=>{
            setCount3(count3=>count3 + 1)
        },1000)
    },[count3])
    // Bir bağımlılığa göre hareke eden useEffect(bir kere her türlü çalışır devamında bağımlılık değiştikçe çalışır)

    const [count4,setCount4] = useState(0)
    useEffect(()=>{
        setInterval(()=>{
            setCount4(count4=>count4+1)
        },1000)
    })
        // setINterval kendi kendine sürekli çalışır.
    const [count5,setCount5] = useState(0)
    useEffect(()=>{
        let timer = setInterval(()=>{
            setCount5(count5=>count5 + 1)
        },1000)
        return () => clearInterval(timer)
    },[count5])
    // setINtervale bir timer değişkenine atadık ve cleateInterval ile her seferinde setInerval silinir ve aşşadaki [count5] tetiklenir ve setInterval tekrardan yapılır ve 0 dan başlayarak birer birer artar.

  return (
    <div>
        {/* <h2>I have rendered {count} times</h2>
        <h2>I have rendered {count2} times</h2>
        <h2>I have rendered {count3} times</h2> */}
        <h2>I have rendered {count4} times</h2>
        <h2>I have rendered {count5} times</h2>
    </div>
  )
}

export default UseEffectHook