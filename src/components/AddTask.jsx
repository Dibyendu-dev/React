import React, { useState } from 'react'

export default function AddTask({onAdd}) {

  const [text,setText]=useState("");
 
  const handleChange=(e)=>{
    setText(e.target.value);
  }
  return (
    <div>
         <input placeholder="Add task" value={text} onChange={handleChange} />
        <button onClick={()=>{
          setText('')
          onAdd(text)
          
        }}>Add</button>

    </div>
  )
}
