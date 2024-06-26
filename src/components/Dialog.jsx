import { useEffect, useRef, useState } from "react";

export default function Dialog() {
  const dialogRef = useRef(null);
  const [show,setShow]= useState(true)
  useEffect(() => {
    const dialog = dialogRef.current;
    if (dialog) {
        dialog.showModal();
      }
    return () => {
        if (dialog) {
            dialog.close();
          }
    };
  },[]);

  return (
    <>
   
    <dialog  ref={dialogRef}>
     { show && <p>I am the Rocky The monster</p> } 
      <button onClick={() => setShow((show) => !show)}>{show ? 'Hide':'show'}</button>
    </dialog>
    </>
  );
}
