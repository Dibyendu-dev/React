import {  useState } from "react";
import CatFriends from "./CatFriends";

export default function ShowHide() {
  const [show, setShow] = useState(true);
  

  return (
    <>
      {show && <CatFriends />}
      <br />
      <button onClick={() => setShow((show) => !show)}>
        {show ? "Hide" : "Show"}
      </button>
     
    </>
  );
}
