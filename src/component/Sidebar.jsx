import React from 'react'
import { MdHome } from 'react-icons/md'
import { PiArrowFatLineLeftFill } from 'react-icons/pi'

export default function Sidebar() {
  return (
    <div className="md:w-44 h-full p-4 flex  flex-col justify-between items-start bg-blue rounded-tr-xl text-white">
      <div>
        <h2 className="text-xl font-bold">finance</h2>
        <div
          className=" flex flex-rol gap-2 justify-start items-center mt-4 hover:bg-white hover:text-blue
         "
        >
          <span>
            <MdHome />
          </span>
          <p className="text-sm "> Overview</p>
        </div>
      </div>

      <div className="flex   flex-rol gap-3 justify-start items-center text-sm text-white/80">
        <span>
          <PiArrowFatLineLeftFill />
        </span>
        <p>Minimize Menu</p>
      </div>
    </div>
  )
}
