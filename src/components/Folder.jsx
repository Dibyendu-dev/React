
import { useState } from "react";

export default function Folder({ explorer,handleInsertNode }) {
  const [expand, setExpand] = useState(false);
  const [showInput, setShowInput] = useState({
    visible: false,
    isFolder: null,
  });
  function handleNewFolder(e, isFolder) {
    e.stopPropagation();
    setExpand(true)
    setShowInput({
      visible: true,
      isFolder,
    });
  }

  const onAddFolder =(e)=>{
    if(e.keyCode === 13 && e.target.value){
      handleInsertNode(explorer.id, e.target.value, showInput.isFolder)
      setShowInput({
        ...showInput,
        visible:false
      })
    }
  }

  if (explorer.isFolder) {
    return (
      <div style={{ marginTop: 5 }}>
        <div className="folder" onClick={() => setExpand(!expand)}>
          <span>📁 {explorer.name} </span>
          <div>
            <button style={{ cursor: "pointer"}} onClick={(e) => handleNewFolder(e, true)}>📁+</button>
            <button style={{ cursor: "pointer"}} onClick={(e) => handleNewFolder(e, false)}>📃+</button>
          </div>
        </div>
        <div style={{ display: expand ? "block" : "none", paddingLeft: 25 }}>
          {showInput.visible && (
            <div className="inputContainer">
              <span>{showInput.isFolder ? "📁" : "📃"}</span>
              <input
                className="inputContainer__input"
                onKeyDown={onAddFolder}
                type="text"
                autoFocus
                onBlur={() => setShowInput({ ...showInput, visible: false })}
              />
            </div>
          )}
          {explorer.items.map((exp) => (
            <Folder explorer={exp} key={exp.id} handleInsertNode={handleInsertNode} />
          ))}
        </div>
      </div>
    );
  } else {
    return <span className="file">📃{explorer.name}</span>;
  }
}
