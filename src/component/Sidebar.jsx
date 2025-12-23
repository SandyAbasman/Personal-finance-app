import React, { useState } from 'react'
import { MdHome } from 'react-icons/md'
import { PiArrowFatLineLeftFill, PiArrowFatLineRightFill } from 'react-icons/pi'
import { LuArrowDownUp } from 'react-icons/lu'
import { GiWaterRecycling } from 'react-icons/gi'
import { RiShieldFlashFill } from 'react-icons/ri'
import { TbBrandCodesandbox } from 'react-icons/tb'
import { Link, useLocation } from 'react-router-dom'

function NavLink({ icon, text, path }) {
  const location = useLocation()
  const { pathname } = location

  // Normalize paths for comparison
  const normalizePath = (path) => path.toLowerCase().replace(/\s+/g, '')
  const normalizeText = (text) => text?.toLowerCase().replace(/\s+/g, '') || ''

  // Check if current path matches
  const isActive =
    pathname === path ||
    (pathname === '/' && path === '/') ||
    (pathname !== '/' && normalizePath(pathname.substring(1)) === normalizeText(text))

  return (
    <div
      className={`${
        isActive
          ? 'bg-white border-l-4 border-green text-blue'
          : 'text-white/80 hover:bg-white hover:text-blue hover:border-l-4 hover:border-green'
      } flex flex-row gap-2 group hover:cursor-pointer justify-start items-center py-2 pr-7 pl-3 font-semibold rounded-tr-md rounded-br-md transition-all duration-200`}
    >
      <span
        className={`${isActive ? 'text-green' : 'text-white/80 group-hover:text-green'} transition-colors duration-200`}
      >
        {icon}
      </span>
      {text && (
        <p
          className={`text-sm text-nowrap transition-colors duration-200 ${
            isActive ? 'text-blue' : 'text-white/80 group-hover:text-blue'
          }`}
        >
          {text}
        </p>
      )}
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
        ' h-full py-4 pb-8 px-2  flex  flex-col justify-between items-start bg-blue rounded-tr-xl text-white'
      }
    >
      <div className="font-light flex flex-col pr-2 gap-2 text-white/80">
        {/* logo */}
        <h2 className="text-2xl p-4 text-white font-bold mb-2">Finance</h2>
        {/* Navigation links */}
        <Link to="/" className="w-full">
          <NavLink icon={<MdHome />} text="Overview" path="/" />
        </Link>
        <Link to="/transaction" className="w-full">
          <NavLink icon={<LuArrowDownUp />} text="Transactions" path="/transaction" />
        </Link>
        <Link to="/budgets" className="w-full">
          <NavLink icon={<GiWaterRecycling />} text="Budgets" path="/budgets" />
        </Link>
        <Link to="/pots" className="w-full">
          <NavLink icon={<RiShieldFlashFill />} text="Pots" path="/pots" />
        </Link>
        <Link to="/recurringBills" className="w-full">
          <NavLink icon={<TbBrandCodesandbox />} text="Recurring bills" path="/recurringBills" />
        </Link>
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
    <div className=" h-full py-16 pb-8   flex  flex-col justify-between items-start bg-blue rounded-tr-xl text-white">
      <div className="font-light flex flex-col gap-4 text-white/80">
        <Link to="/" className="w-full">
          <NavLink icon={<MdHome />} path="/" />
        </Link>
        <Link to="/transaction" className="w-full">
          <NavLink icon={<LuArrowDownUp />} path="/transaction" />
        </Link>
        <Link to="/budgets" className="w-full">
          <NavLink icon={<GiWaterRecycling />} path="/budgets" />
        </Link>
        <Link to="/pots" className="w-full">
          <NavLink icon={<RiShieldFlashFill />} path="/pots" />
        </Link>
        <Link to="/recurringBills" className="w-full">
          <NavLink icon={<TbBrandCodesandbox />} path="/recurringBills" />
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
