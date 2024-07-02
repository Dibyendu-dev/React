import  { useState } from 'react'

export default function FullName() {

    const [firstName,setFirstName] = useState("Dibyendu");
    const [lastName, setLastName] = useState("Das");
    const fullName = firstName+" "+lastName
  return (
    <div>
        <p>{fullName}</p>
    </div>
  )
}
