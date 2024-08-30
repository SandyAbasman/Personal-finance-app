import React, { useState } from 'react'
import { MdHome } from 'react-icons/md'
import { PiArrowFatLineLeftFill, PiArrowFatLineRightFill } from 'react-icons/pi'
import { LuArrowDownUp } from 'react-icons/lu'
import { GiWaterRecycling } from 'react-icons/gi'
import { RiShieldFlashFill } from 'react-icons/ri'
import { TbBrandCodesandbox } from 'react-icons/tb'

// eslint-disable-next-line react/prop-types
function NavLink({ icon, text }) {
  return (
    <div
      className=" flex flex-rol gap-2 hover:cursor-pointer justify-start items-center  py-2 pr-20 pl-3  font-semibold  hover:rounded-tr-md hover:rounded-br-md  hover:bg-white hover:text-blue
         "
    >
      <span className="">{icon}</span>
      <p className="text-sm text-nowrap ">{text}</p>
    </div>
  )
}

export default function Sidebar() {
  const [isOpen, setIsopen] = useState(true)

  function openNav() {
    setIsopen((isOpen) => !isOpen)
  }

  return isOpen ? (
    <div
      className={
        'w-52 h-full py-4 pb-8 px-1 flex  flex-col justify-between items-start bg-blue rounded-tr-xl text-white'
      }
    >
      <div className=" w-[100%] font-light flex flex-col pr-2 gap-2   text-white/80">
        {/* logo */}
        <h2 className="text-2xl p-4 text-white font-bold mb-2">Finance</h2>
        {/* Navigation links */}
        <NavLink icon={<MdHome />} text="Overview" />
        <NavLink icon={<LuArrowDownUp />} text="Transcation" />
        <NavLink icon={<GiWaterRecycling />} text="Budgets" />
        <NavLink icon={<RiShieldFlashFill />} text="Pots" />
        <NavLink icon={<TbBrandCodesandbox />} text="Recurring bills" />
      </div>

      <div
        onClick={() => openNav()}
        className="flex flex-rol text-white/80 gap-2 text-sm  hover:cursor-pointer justify-start items-center text-nowrap py-2 pr-14 pl-4  font-semibold  hover:rounded-tr-md hover:rounded-br-md  hover:bg-white hover:text-blue"
      >
        <span>
          <PiArrowFatLineLeftFill />
        </span>
        <p>Minimize Menu</p>
      </div>
    </div>
  ) : (
    <div className="w-16 h-full py-16 pb-8 px-1  flex  flex-col justify-between items-start bg-blue rounded-tr-xl text-white">
      <div className=" w-[100%] font-light flex flex-col pr-2 gap-4   text-white/80">
        <NavLink icon={<MdHome />} />
        <NavLink icon={<LuArrowDownUp />} />
        <NavLink icon={<GiWaterRecycling />} />
        <NavLink icon={<RiShieldFlashFill />} />
        <NavLink icon={<TbBrandCodesandbox />} />
      </div>

      <div
        onClick={() => openNav()}
        className="flex flex-rol text-white/80 gap-2 text-sm  hover:cursor-pointer justify-start items-center text-nowrap py-2 pr-6 pl-4  font-semibold  hover:rounded-tr-md hover:rounded-br-md  hover:bg-white hover:text-blue"
      >
        <span>
          <PiArrowFatLineRightFill />
        </span>
      </div>
    </div>
  )
}
