
import InputField from "./InputField";
import DisplayText from "./DisplayText";
import { useState } from "react";

export default function ParentFormInput() {
    // State for input value
     const [inputValue , setInputValue] = useState('')
    
     // Handler to update input value
     const handleChange =(e)=>{
        setInputValue(e.target.value)
     }
    return (
      <div>
        <InputField value={inputValue} onChange={handleChange} />
        <DisplayText text={inputValue} />
      </div>
    );
  }
  