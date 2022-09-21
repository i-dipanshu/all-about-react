import React from 'react'
import { useState } from 'react'

const SpreadOperator = () => {

    const [update, setUpdate ] = useState({name:"Dipanshu", age:20, sex:"Male"});

  return (
    <div className='main'>
      <h1>{update.name}</h1>
      <h2>Sex: {update.sex}</h2>
      <h2>Age: {update.age}</h2>
      <button onClick={() => (setUpdate({...update, name: "Ankur"}))} className="btn">Click Me</button>
    </div>
  );
}

export default SpreadOperator