import { useState } from "react";

export default function AddItem({ onAdd }) {
    
    // Local state for new item
    const [newItem , setNewItem] = useState('')

    // Handler for input change and add button click
    const handleInputChange=(e)=>{
        setNewItem(e.target.value)
    }

    const handleAddClick = () => {

        // onAdd(newItem);

        if (newItem.trim() !== '') {
          onAdd(newItem);
          setNewItem('');
        }
      };

    return (
      <div>
        <input type="text" value={newItem} onChange={handleInputChange} />
        <button onClick={handleAddClick}>Add Item</button>
      </div>
    );
  }
  