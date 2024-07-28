
import { useState } from "react"
import explorer from "../data/folderData"
import Folder from "./Folder"
export default function FolderComp() {

    const [explorerData, setExplorerData] = useState(explorer)

  return (
    <div>
      <Folder explorer={explorerData}/>
    </div>
  )
}
