import { useState } from "react";
import AddItem from "./AddItem";
import ItemList from "./ItemList";

export default function ParentListItem() {
    // State for list of items
    const [items , setItems] = useState([])

    // Handler to add item to the list
    const handleAddItem=(newitem)=>{
        setItems(
            [...items,newitem]
        )
    }

    return (
      <div>
        <AddItem onAdd={handleAddItem} />
        <ItemList items={items} />
      </div>
    );
  }
  