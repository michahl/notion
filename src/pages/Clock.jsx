import { useEffect, useState } from "react"

const Clock = () => {
  const [type, setType] = useState(null)

  const [hrs, setHours] = useState('')
  const [min, setMin] = useState('')
  const [day, setDay] = useState('')
  const [format, setFormat] = useState('')
  
  useEffect(() => {
    const ref = window.location.search.replace('?', '').split('&')
    if (ref[0] === 'type=retro') {
        setType('retro')
    } else if (ref[0] === 'type=analog') {
        setType('analog')
    }

    setInterval(() => {
        const date = getDate()
        setDay(date.day)
        setHours(date.hrs)
        setMin(date.min)
        setFormat(date.format)
    }, 1000)
  }, [])

  const getDay = (num) => {
    const days = ['Sunday', 'Monday', 'Thusday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    return days[num]
  }

  const getDate = () => {
    const date = new Date()
    const day = getDay(new Date().getDay())
    const hrs = date.getHours().toString().padStart(2, '0')
    let format = Number(hrs) >= 12 ? 'PM' : 'AM'
    const min = date.getMinutes().toString().padStart(2, '0')
    return {
        min, hrs, day, format
    }
  }

  if (type === null)
    return (
        <div className="flex justify-center items-center min-h-screen">
            <p>You didn't provide a type</p>
        </div>    
    )

  if (type === 'retro')
    return (
        <div className="font-retro-clock absolute top-0 left-0 w-[100%] h-[100%] overflow-hidden bg-gray-50">
            <div className="flex w-[270px] h-[200px] origin-top-left transition duartion-100 border-0 border-solid border-[#f7f7f7] scale-[1.28148]">
                <div className="bg-gray-300 text-gray-50 text-8xl font-extrabold w-1/2 flex items-center justify-center mr-1 pb-2 pt-3 px-2 relative rounded-2xl ">
                    {hrs}
                    <div className="bg-white absolute w-full h-[0.5px] top-[50%] left-0"></div>
                    <p className="absolute top-[85%] left-2 text-lg">{format}</p>
                </div>
                <div className="bg-gray-300 text-gray-50 flex font-extrabold items-center justify-center pb-2 pt-3 px-2 relative rounded-2xl text-8xl w-1/2">
                    {min}
                    <div className="bg-white absolute w-full h-[0.5px] top-[50%] left-0"></div>
                    <p className="absolute text-lg top-[85%] right-2">{day}</p>
                </div>
            </div>
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