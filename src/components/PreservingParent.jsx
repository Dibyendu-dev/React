import { useState } from "react";
import ListItem from "./ListItem";


const PreservingParent = () => {
   
   
    const initialItems = [
      { id: 1, value: 'Item 1' },
      { id: 2, value: 'Item 2' },
      { id: 3, value: 'Item 3' },
    ];
  
    const [items, setItems] = useState(initialItems);
  
    const handleChange = (index, newValue) => {
      const newItems = [...items];
      newItems[index].value = newValue;
      setItems(newItems);
    };
  
    const onMoveUp = (index) => {
      if (index === 0) return;
      const newItems = [...items];
      [newItems[index], newItems[index - 1]] = [newItems[index - 1], newItems[index]];
      setItems(newItems);
    };
  
    const onMoveDown = (index) => {
      if (index === items.length - 1) return;
      const newItems = [...items];
      [newItems[index], newItems[index + 1]] = [newItems[index + 1], newItems[index]];
      setItems(newItems);
    };
  
    return (
      <div>
        {items.map((item, index) => (
          <ListItem
            key={index}
            item={item}
            index={index}
            onChange={handleChange}
            onMoveUp={onMoveUp}
            onMoveDown={onMoveDown}
          />
        ))}
      </div>
    );
  };

export default PreservingParent