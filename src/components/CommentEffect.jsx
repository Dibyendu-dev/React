import React, { useState } from 'react'
import CommentEffectProp from './CommentEffectProp';

export default function CommentEffect() {
    const [userId,setUserId] = useState(1);
  return (
    <div>
        <button onClick={()=>setUserId(userId ===1 ? 2 :1)}>
            Switch to Profile No. { userId ===1 ? 2 : 1}
        </button>
        <CommentEffectProp key={userId} userId={userId} />
    </div>
  )
}
