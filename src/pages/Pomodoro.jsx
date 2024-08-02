import { useEffect, useState } from 'react'
import icons from '../assets/index.js'
import PomodoroSettings from '../components/PomodoroSettings.jsx'

const Pomodoro = () => {
  const [audio] = useState(new Audio(icons.sound))
  const [type, setType] = useState('focus')
  const [time, setTime] = useState(1500)
  const [active, setActive] = useState(false)
  const [settings, setSettings] = useState(false)

  const handleSettings = () => {
    setSettings(!settings)
  }

  useEffect(() => {
    document.title = formatTime(time) + ' | ' + 'Pomodoro Timer'
  }, [time])

  const handleTypeChange = (e) => {
    setActive(false)
    setType(e.target.value)
  }

  useEffect(() => {
    if (type === 'focus') {
        setTime(1500)
    } else if (type === 'short-break') {
        setTime(300)
    } else if (type === 'long-break') {
        setTime(600)
    }
  }, [type])

  useEffect(() => {
    let interval = null
    if (active) {
        interval = setInterval(() => {
            setTime(time - 1)
            if (time === 0) {
                audio.play()
                setActive(false)
                if (type === 'focus') {
                    setTime(1500)
                } else if (type === 'short-break') {
                    setTime(300)
                } else if (type === 'long-break') {
                    setTime(600)
                }
            }
        }, 1000)
    } else if (!active && time >0) {
        clearInterval(interval)
    }
    return () => clearInterval(interval)
  }, [active, time, type])

  const formatTime = time => {
    const hrs = Math.floor(time/3600).toString().padStart(2, '0')
    const mins = Math.floor((time % 3600)/60).toString().padStart(2, '0')
    const secs = (time % 60).toString().padStart(2, '0')

    if( Math.floor(time/3600) > 0)
        return hrs + ':' + mins + ':' + secs

    return mins + ':' + secs
  }

  const handleReset = () => {
    setActive(false)
    if (type === 'focus') {
        setTime(1500)
    } else if (type === 'short-break') {
        setTime(300)
    } else if (type === 'long-break') {
        setTime(600)
    }
  }

  return (
    <div className='bg-[#F6F5F5] font-pomodoro text-[#1a1a1a]'>
        <div className="flex flex-col justify-center items-center min-h-screen mx-4 ">
        <div className="flex flex-row space-x-2 text-sm md:text-lg">
            <button 
                value='focus' 
                onClick={handleTypeChange} 
                className={`${type === 'focus' ? 'bg-[#1a1a1a] text-slate-100' : 'border'} rounded-full px-5 py-0.5`}>
                Focus
            </button>
            <button 
                value='short-break' 
                onClick={handleTypeChange}  
                className={`${type === 'short-break' ? 'bg-[#1a1a1a] text-slate-100' : 'border'} rounded-full px-5 py-0.5`}>
                Short Break
            </button>
            <button 
                value='long-break' 
                onClick={handleTypeChange}  
                className={`${type === 'long-break' ? 'bg-[#1a1a1a] text-slate-100' : 'border'} border rounded-full px-5 py-0.5`}>
                Long Break
            </button>
        </div>
        <p className="text-8xl font-bold mt-2">{formatTime(time)}</p> 
        <div className="flex flex-row space-x-2 mt-5">
            <button onClick={() => setActive(!active)} className={`${active ? 'bg-[#1a1a1a] text-slate-100' : 'border'} border rounded-full w-28 px-5 py-0.5`}>{active ? 'Pause' : 'Start'}</button>
            <button onClick={handleReset}>
                <img src={icons.reset} alt="reset" className='w-6'/>
            </button>
            <button onClick={handleSettings}>
                <img src={icons.setting} alt="settings" className='w-6'/>
            </button>
        </div>
        </div>
        <PomodoroSettings open={settings} handle={handleSettings}/>
    </div>

  )
}

export default Pomodoro