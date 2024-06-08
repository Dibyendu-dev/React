import { useState } from "react"


const ParentInput = () => {

    const initialItems = [
        { id: 0, name: 'Taylor', email: 'taylor@mail.com' },
        { id: 1, name: 'Alice', email: 'alice@mail.com' },
        { id: 2, name: 'Bob', email: 'bob@mail.com' }
    ]
    const [items , setItems] = useState(initialItems);

    const handleChange = (id, newName) => {
        const updatedItems = items.map(item => 
            item.id === id ? { ...item, name: newName } : item
        );
        setItems(updatedItems);
    };

  return (
    <div>
       {
        items.map((item)=>(
            <li key={item.id}>
                <input type="text" value={item.name} onChange={(e) => handleChange(item.id, e.target.value)}  />
            </li>
        ))
       }
       
    </div>
  )
}

export default ParentInput