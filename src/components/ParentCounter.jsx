
import { useState } from "react";
import DisplayCount from "./DisplayCount";
import IncrementCount from "./IncrementCount";

 export default function Parent() {
  // State for count
   const [count , setCount] = useState(0);
   

  // Handler to update count
  const handleIncrement = ()=>{
    setCount(count+1);
  }


  return (
    <div>
      <DisplayCount count={count} />
      <IncrementCount onIncrement={handleIncrement} />
    </div>
  );
}
