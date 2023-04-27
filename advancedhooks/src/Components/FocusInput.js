import { useEffect } from "react"
import React, {useRef} from 'react'

function FocusInput() {
    const inputRef= useRef(null)
    useEffect(()=>{
        // focus input element
      inputRef.current.focus()
    },[])
  return (
    <div>FocusInput
        {/* <input ref ={inputRef} type= "text"/> */}
        <input ref={inputRef} type='text'/>
    </div>
  )
}

export default FocusInput