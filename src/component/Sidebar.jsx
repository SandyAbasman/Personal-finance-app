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
      className={`${text?.toLowerCase() == currentpath && 'group border-l-4 border-green bg-white text-blue'} flex-rol group flex items-center justify-start gap-2 rounded-br-md rounded-tr-md py-2 pl-3 pr-7 font-semibold hover:cursor-pointer hover:border-l-4 hover:border-green hover:bg-white hover:text-blue`}
    >
      <span className="group-hover:text-green group-active:text-green">{icon}</span>
      <p className="text-nowrap text-sm">{text}</p>
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
        'flex h-full flex-col items-start justify-between rounded-tr-xl bg-blue px-2 py-4 pb-8 text-white'
      }
    >
      <div className="flex flex-col gap-2 pr-2 font-light text-white/80">
        {/* logo */}
        <h2 className="mb-2 p-4 text-2xl font-bold text-white">Finance</h2>
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
        className="flex-rol flex items-center justify-start gap-2 text-nowrap py-2 pl-4 pr-14 text-sm font-semibold text-white/80 hover:cursor-pointer hover:rounded-br-md hover:rounded-tr-md hover:bg-white hover:text-blue"
      >
        <span>
          <PiArrowFatLineLeftFill />
        </span>
        <p>Minimize Menu</p>
      </div>
    </div>
  ) : (
    <div className="flex h-full flex-col items-start justify-between rounded-tr-xl bg-blue py-16 pb-8 text-white">
      <div className="flex flex-col gap-4 font-light text-white/80">
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
        className="flex-rol flex items-center justify-start gap-2 text-nowrap py-2 pl-4 pr-6 text-sm font-semibold text-white/80 hover:cursor-pointer hover:rounded-br-md hover:rounded-tr-md hover:bg-white hover:text-blue"
      >
        <span>
          <PiArrowFatLineRightFill />
        </span>
      </div>
    </div>
  )
}
