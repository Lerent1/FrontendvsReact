import React from 'react'

export default function Bai5() {
  return (
    <div className='bg-sky-200 w-[300px] h-[200px] p-[15px] rounded-[8px]'>
        <div className='bg-sky-300 text-blue font-bold text-[18px] w-full h-full relative p-[15px]'>
          Relative parent
          <div className='bg-sky-500 text-white absolute bottom-0 left-0 w-[150px] h-[50px] rounded-[10px] text-center pt-[11px]'>
            Absolute child</div>
        </div>
    </div>
  )
}