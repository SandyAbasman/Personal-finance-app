import React, { useState } from 'react'
import data from '../utilis/data.json'
import dayjs from 'dayjs'
import { FiSearch } from 'react-icons/fi'
import { IoMdArrowDropdown } from 'react-icons/io'

export default function Transaction() {
  const [searchQuery, setSearchQuery] = useState('')
  const [sortBy, setSortBy] = useState('latest')
  const [category, setCategory] = useState('all')
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 10

  const categories = [
    'All Transactions',
    'Entertainment',
    'Bills',
    'Groceries',
    'Dining Out',
    'Transportation',
  ]

  const sortOptions = [
    { value: 'latest', label: 'Latest' },
    { value: 'oldest', label: 'Oldest' },
    { value: 'a-z', label: 'A to Z' },
    { value: 'z-a', label: 'Z to A' },
    { value: 'highest', label: 'Highest' },
    { value: 'lowest', label: 'Lowest' },
  ]

  // Filter by category
  let filteredTransactions = data.transactions.filter((trans) => {
    if (category === 'all' || category === 'All Transactions') return true
    return trans.category === category
  })

  // Filter by search query
  if (searchQuery) {
    filteredTransactions = filteredTransactions.filter((trans) =>
      trans.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
  }

  // Sort transactions
  const sortedTransactions = [...filteredTransactions].sort((a, b) => {
    switch (sortBy) {
      case 'latest':
        return new Date(b.date) - new Date(a.date)
      case 'oldest':
        return new Date(a.date) - new Date(b.date)
      case 'a-z':
        return a.name.localeCompare(b.name)
      case 'z-a':
        return b.name.localeCompare(a.name)
      case 'highest':
        return Math.abs(b.amount) - Math.abs(a.amount)
      case 'lowest':
        return Math.abs(a.amount) - Math.abs(b.amount)
      default:
        return 0
    }
  })

  // Pagination
  const totalPages = Math.ceil(sortedTransactions.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const paginatedTransactions = sortedTransactions.slice(startIndex, endIndex)

  const handlePageChange = (page) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="w-full h-auto flex flex-col gap-6 p-4 md:p-6 lg:p-8">
      <h2 className="text-blue font-bold text-2xl md:text-3xl lg:text-4xl">Transactions</h2>

      {/* Search and Filters */}
      <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
        {/* Search Bar */}
        <div className="relative flex-1 min-w-0">
          <FiSearch
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-blue/50"
            size={20}
          />
          <input
            type="text"
            placeholder="Search transaction"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value)
              setCurrentPage(1)
            }}
            className="w-full pl-12 pr-4 py-3 rounded-lg bg-white text-blue border border-blue/20 focus:outline-none focus:border-blue"
          />
        </div>

        {/* Sort By Dropdown */}
        <div className="relative sm:w-auto w-full">
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="appearance-none w-full sm:w-48 pl-4 pr-10 py-3 rounded-lg bg-white text-blue border border-blue/20 focus:outline-none focus:border-blue cursor-pointer"
          >
            {sortOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <IoMdArrowDropdown
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-blue/50 pointer-events-none"
            size={20}
          />
        </div>

        {/* Category Dropdown */}
        <div className="relative sm:w-auto w-full">
          <select
            value={category}
            onChange={(e) => {
              setCategory(e.target.value)
              setCurrentPage(1)
            }}
            className="appearance-none w-full sm:w-48 pl-4 pr-10 py-3 rounded-lg bg-white text-blue border border-blue/20 focus:outline-none focus:border-blue cursor-pointer"
          >
            {categories.map((cat) => (
              <option key={cat} value={cat === 'All Transactions' ? 'all' : cat}>
                {cat}
              </option>
            ))}
          </select>
          <IoMdArrowDropdown
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-blue/50 pointer-events-none"
            size={20}
          />
        </div>
      </div>

      {/* Transaction Table */}
      <div className="w-full bg-white p-4 md:p-6 rounded-lg overflow-x-auto">
        <div className="min-w-full">
          {/* Table Header - Hidden on mobile, visible on tablet and desktop */}
          <div className="hidden sm:grid sm:grid-cols-5 gap-4 pb-4 mb-4 border-b border-background">
            <div className="text-sm font-semibold text-blue/60">Name</div>
            <div className="text-sm font-semibold text-blue/60">Category</div>
            <div className="text-sm font-semibold text-blue/60">Date</div>
            <div className="text-sm font-semibold text-blue/60 text-right">Amount</div>
            <div className="text-sm font-semibold text-blue/60"></div>
          </div>

          {/* Transaction List */}
          <div className="flex flex-col gap-2 md:gap-3">
            {paginatedTransactions.length > 0 ? (
              paginatedTransactions.map((trans) => {
                return (
                  <div
                    key={`${trans.name}-${trans.date}`}
                    className="grid grid-cols-1 sm:grid-cols-5 gap-3 md:gap-4 items-center p-3 md:p-4 hover:bg-background rounded-lg transition-colors border-b border-background last:border-b-0"
                  >
                    {/* Avatar and Name */}
                    <div className="flex flex-row justify-start gap-3 items-center">
                      <img
                        className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover flex-shrink-0"
                        src={trans.avatar}
                        alt={trans.name}
                      />
                      <div className="flex flex-col min-w-0">
                        <p className="text-sm md:text-base text-blue font-semibold truncate">
                          {trans.name}
                        </p>
                        <p className="text-xs text-blue/50 sm:hidden">{trans.category}</p>
                      </div>
                    </div>

                    {/* Category - Hidden on mobile */}
                    <div className="hidden sm:block">
                      <p className="text-sm md:text-base text-blue/70">{trans.category}</p>
                    </div>

                    {/* Date */}
                    <div>
                      <p className="text-sm md:text-base text-blue/70">
                        {dayjs(trans.date).format('DD MMM YYYY')}
                      </p>
                    </div>

                    {/* Amount */}
                    <div className="text-right sm:text-right">
                      <p
                        className={`text-sm md:text-base font-bold ${
                          trans.amount > 0 ? 'text-green' : 'text-red-600'
                        }`}
                      >
                        {trans.amount > 0
                          ? `+$${Math.abs(trans.amount).toFixed(2)}`
                          : `-$${Math.abs(trans.amount).toFixed(2)}`}
                      </p>
                    </div>

                    {/* Recurring Badge */}
                    <div className="text-right sm:text-right">
                      {trans.recurring && (
                        <span className="text-xs md:text-sm text-green font-semibold">
                          Recurring
                        </span>
                      )}
                    </div>
                  </div>
                )
              })
            ) : (
              <div className="text-center py-8 md:py-12 text-blue/50">No transactions found</div>
            )}
          </div>
        </div>
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex flex-row justify-center items-center gap-2 md:gap-3 flex-wrap">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={`px-4 md:px-6 py-2 rounded-lg text-sm md:text-base font-semibold transition-colors ${
              currentPage === 1
                ? 'bg-background text-blue/30 cursor-not-allowed'
                : 'bg-white text-blue hover:bg-background border border-blue/20'
            }`}
          >
            Prev
          </button>

          <div className="flex gap-1 md:gap-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
              // Show first page, last page, current page, and pages around current
              if (
                page === 1 ||
                page === totalPages ||
                (page >= currentPage - 1 && page <= currentPage + 1)
              ) {
                return (
                  <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={`px-3 md:px-4 py-2 rounded-lg text-sm md:text-base font-semibold transition-colors ${
                      currentPage === page
                        ? 'bg-blue text-offWhite'
                        : 'bg-white text-blue hover:bg-background border border-blue/20'
                    }`}
                  >
                    {page}
                  </button>
                )
              } else if (page === currentPage - 2 || page === currentPage + 2) {
                return (
                  <span key={page} className="px-1 md:px-2 text-blue/50">
                    ...
                  </span>
                )
              }
              return null
            })}
          </div>

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`px-4 md:px-6 py-2 rounded-lg text-sm md:text-base font-semibold transition-colors ${
              currentPage === totalPages
                ? 'bg-background text-blue/30 cursor-not-allowed'
                : 'bg-white text-blue hover:bg-background border border-blue/20'
            }`}
          >
            Next
          </button>
        </div>
      )}
    </div>
  )
}
