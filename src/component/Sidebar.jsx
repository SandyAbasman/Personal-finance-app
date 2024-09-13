import React, { useState } from 'react'
import { MdHome } from 'react-icons/md'
import { PiArrowFatLineLeftFill, PiArrowFatLineRightFill } from 'react-icons/pi'
import { LuArrowDownUp } from 'react-icons/lu'
import { GiWaterRecycling } from 'react-icons/gi'
import { RiShieldFlashFill } from 'react-icons/ri'
import { TbBrandCodesandbox } from 'react-icons/tb'
import { Link, useLocation } from 'react-router-dom'

function NavLink({ icon, text }) {
  const location = useLocation()

  const { pathname } = location
  let currentpath = pathname === '/' ? 'overview' : pathname.substring(1)

  return (
    <div
      className={`${text?.toLowerCase() == currentpath && ' bg-background border-l-4 group    border-green  text-blue'}  py-200 px-400 flex  flex-row justify-start  items-center   group hover:cursor-pointer    gap-200 hover:border-l-4  hover:border-green   rounded-tr-lg rounded-br-lg  hover:bg-background hover:text-blue`}
    >
      <span className="group-hover:text-green  group-active:text-green">{icon}</span>
      <p className="text-[1rem] font-[700] flex-1 text-nowrap">{text}</p>
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
        '  h-full pb-300  flex  w-full  flex-col gap-300   items-start bg-blue rounded-tr-xl text-white self-stretch'
      }
    >
      <div className=" pr-300 max-h-[800px] font-light flex flex-col ml-2  gap-50 flex-1   text-white/80">
        {/* logo */}
        <h2 className="text-2xl p-4 text-white font-bold mb-2">Finance</h2>
        {/* Navigation links */}
        <Link to="/">
          <NavLink icon={<MdHome />} text="Overview" />
        </Link>
        <Link to="/transactions">
          <NavLink icon={<LuArrowDownUp />} text="Transactions" />
        </Link>
        <Link to="/budgets">
          <NavLink icon={<GiWaterRecycling />} text="Budgets" />
        </Link>
        <Link to="/pots">
          <NavLink icon={<RiShieldFlashFill />} text="Pots" />
        </Link>
        <Link to="/recurringbills">
          <NavLink icon={<TbBrandCodesandbox />} text="Recurring bills" />
        </Link>
      </div>

      <div
        onClick={() => openNav()}
        className="py-200 px-400 flex  flex-row justify-start  items-center   group hover:cursor-pointer    gap-200 hover:border-l-4  hover:border-green   rounded-tr-lg rounded-br-lg  hover:bg-background hover:text-blue"
      >
        <span>
          <PiArrowFatLineLeftFill />
        </span>
        <p>Minimize Menu</p>
      </div>
    </div>
  ) : (
    <div className=" h-full py-16 pb-8   flex  flex-col justify-between items-start bg-blue rounded-tr-xl text-white">
      <div className="  font-light flex flex-col  gap-4   text-white/80">
        <Link to="/">
          <NavLink icon={<MdHome />} />
        </Link>
        <Link to="/transaction">
          <NavLink icon={<LuArrowDownUp />} />
        </Link>
        <Link to="/budgets">
          <NavLink icon={<GiWaterRecycling />} />
        </Link>
        <Link to="/pots">
          <NavLink icon={<RiShieldFlashFill />} />
        </Link>
        <Link to="/recurringBills">
          <NavLink icon={<TbBrandCodesandbox />} />
        </Link>
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
