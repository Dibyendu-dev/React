
import { useState } from "react"
import explorer from "../data/folderData"
import Folder from "./Folder"
import useTraverseTree from "../hooks/useTraverseTree"
export default function FolderComp() {

  const [explorerData, setExplorerData] = useState(explorer)
  const {insertNode} = useTraverseTree();
  const handleInsertNode =(folderId,item,isFolder)=>{
    const finalTree = insertNode(explorerData,folderId,item,isFolder)

    setExplorerData(finalTree)
  }

  return (
    <div>
      <Folder explorer={explorerData} handleInsertNode={handleInsertNode} />
    </div>
  )
}
