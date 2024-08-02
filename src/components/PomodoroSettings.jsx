import { useState } from 'react'

const PomodoroSettings = ({ open, handle }) => {
  const [page, setPage] = useState(0)
  if(!open) return null  
  return (
    <div className="fixed inset-0 bg-opacity-80 flex justify-center items-center z-50">
        <div className="bg-slate-50 p-8 rounded-md shadow-lg relative">
            <div className="absolute top-2 right-4 text-2xl md:text-xl">
                <button onClick={handle}>&times;</button>
            </div>
            <div className="w-full relative">
                <p>Timer Settings</p>
                <p className='text-xs text-red-400'>currently unavailable</p>
                <div className='flex flex-row space-x-3'>
                    <div className='flex flex-col'>
                        <label htmlFor="focus" className='font-bold'>Focus</label>
                        <input className='w-24' id='focus' type="number" min={1} max={999}/>
                        <p className='opacity-50 text-sm'>minutes</p>
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="focus" className='font-bold'>Short Break</label>
                        <input className='w-24' id='focus' type="number" min={1} max={90}/>
                        <p className='opacity-50 text-sm'>minutes</p>
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="focus" className='font-bold'>Long Break</label>
                        <input className='w-24' id='focus' type="number" min={1} max={90}/>
                        <p className='opacity-50 text-sm'>minutes</p>
                    </div>
                </div>
                <p className='mt-3'>Sound Settings</p>
                <div className='flex flex-col mb-5'>
                    <div className='flex flex-col'>
                        <label htmlFor="sound" className='font-bold'>Select alert sound:</label>
                        <select name="sound-option" id="sound" className='border rounded-lg'>
                            <option value="arcade">Arcade</option>
                            <option value="ding">Ding</option>
                            <option value="ping">Ping</option>
                        </select>
                    </div>
                    <div className='flex space-x-1'>
                        <input type="checkbox" name="" id="" />
                        <p>Play sound when timer finishes</p>
                    </div>

                </div>
                <div className='absolute right-0'>
                    <button onClick={handle} className='font-semibold rounded-full text-lg px-4'>Cancel</button>
                    <button onClick={handle} className='ml-1 font-semibold rounded-full bg-gray-200 text-lg text-[#1f1f1f] px-4'>Save</button>

                </div>
            </div>

        </div>
    </div>
  )
}

export default PomodoroSettings