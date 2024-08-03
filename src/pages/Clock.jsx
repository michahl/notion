import { useEffect, useState } from "react"
import RetroClock from "../components/RetroClock"

const Clock = () => {
  const [type, setType] = useState(null)
  
  useEffect(() => {
    const ref = window.location.search.replace('?', '').split('&')
    if (ref[0] === 'type=retro') {
        setType('retro')
    } else if (ref[0] === 'type=analog') {
        setType('analog')
    }
  }, [])



  if (type === null)
    return (
        <div className="flex justify-center items-center min-h-screen">
            <p>You didn't provide a type</p>
        </div>    
    )

  if (type === 'retro')
    return (
        <div>
            <RetroClock />
        </div> 
    )

  if (type === 'analog')
    return (
        <div>
                analog
        </div>    
    )
  return (
    <div className="flex justify-center items-center min-h-screen">
        <p>Wrong clock type provided</p>
    </div>
  )
}

export default Clock