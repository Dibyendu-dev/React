import { useState } from "react";
import Example3 from "./Example3";
import { items1, items2 } from "../data/item";

export default function Example3Parent() {
    const [items, setItems] = useState(items1);
  return (
    <div>
      <button onClick={() => setItems(items2)}>Switch to Items2</button>{" "}
      <button onClick={() => setItems(items1)}>Switch to Items1</button>
      <Example3 items={items} />
    </div>
  );
}
