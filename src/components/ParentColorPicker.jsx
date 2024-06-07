import ColorPicker from "./ColorPicker";
import ColorPreview from "./ColorPreview";
import ColorName from "./ColorName";
import { useState } from "react";


export default function ParentColorPicker() {
    // State for selected color
    const [color,setColor] = useState("yellow")

    // Handler to update selected color
    const handleColorChange=(e)=>{
        setColor(e.target.value)
    }
    return (
      <div>
        <ColorPicker selectedColor={color} onChange={handleColorChange} />
        <ColorPreview colour={color} />
        <ColorName colorname={color} />
      </div>
    );
  }
  