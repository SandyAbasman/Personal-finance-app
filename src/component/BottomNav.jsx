import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { MdHome } from 'react-icons/md'
import { LuArrowDownUp } from 'react-icons/lu'
import { GiWaterRecycling } from 'react-icons/gi'
import { RiShieldFlashFill } from 'react-icons/ri'
import { TbBrandCodesandbox } from 'react-icons/tb'

export default function BottomNav() {
  const location = useLocation()
  const { pathname } = location

  const navItems = [
    { icon: MdHome, label: 'Overview', path: '/' },
    { icon: LuArrowDownUp, label: 'Transactions', path: '/transaction' },
    { icon: GiWaterRecycling, label: 'Budgets', path: '/budgets' },
    { icon: RiShieldFlashFill, label: 'Pots', path: '/pots' },
    { icon: TbBrandCodesandbox, label: 'Recurring bills', path: '/recurringBills' },
  ]

  const isActive = (path) => {
    if (path === '/') {
      return pathname === '/'
    }
    return pathname.startsWith(path)
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-blue flex flex-row justify-around items-center py-3 px-2 md:hidden z-50 border-t border-blue/20">
      {navItems.map((item) => {
        const Icon = item.icon
        const active = isActive(item.path)
        return (
          <Link
            key={item.path}
            to={item.path}
            className={`flex flex-col items-center justify-center gap-1 px-3 py-2 rounded-lg transition-all duration-200 ${
              active ? 'bg-white text-green' : 'text-white/80'
            }`}
          >
            <Icon size={20} className={active ? 'text-green' : 'text-white/80'} />
            <span className={`text-xs font-semibold ${active ? 'text-blue' : 'text-white/80'}`}>
              {item.label.split(' ')[0]}
            </span>
          </Link>
        )
      })}
    </div>
  )
}
