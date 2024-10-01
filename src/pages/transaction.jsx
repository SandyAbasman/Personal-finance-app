import React, { useState } from 'react'
import InputFieldTop from '../component/InputFieldTop'
import TransactionTable from '../component/TransactionTable'
import data from '../utilis/data.json'
import ReactPaginate from 'react-paginate'
import { RiArrowDropRightFill, RiArrowDropLeftFill } from 'react-icons/ri'

export default function Transaction() {
  const transactionData = data.transactions
  const [itemOffset, setItemOffset] = useState(0)

  const itemsPerPage = 10
  const endOffset = itemOffset + itemsPerPage
  const currentItems = transactionData.slice(itemOffset, endOffset)
  const pageCount = Math.ceil(transactionData.length / itemsPerPage)

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % transactionData.length
    setItemOffset(newOffset)
  }

  return (
    <div className="w-full h-auto flex flex-col bg-background gap-400 md:px-400 md:py-500 px-300 py-200 flex-1">
      <h2 className="text-grey-900 font-[700] md:w-full max-w-30 px-100 py-0 text-[32px] ">
        Transaction
      </h2>

      <div className=" w-full h-auto flex flex-col gap-300 md:px-400 md:py-400 px-300 py-250 items-start self-stretch bg-white rounded-lg">
        <InputFieldTop />
        <TransactionTable currentItems={currentItems} />
      </div>
      <ReactPaginate
        className="flex gap-x-2 justify-center relative my-4"
        pageClassName="flex items-center flex-col"
        pageLinkClassName="border py-1 px-4 rounded-md"
        previousClassName="border py-1 px-2 rounded-md absolute left-0"
        nextClassName="border py-1 px-2 rounded-md absolute right-0"
        activeLinkClassName="bg-black text-white"
        nextLabel={
          <span className="flex gap-x-2 items-center">
            Next
            <RiArrowDropRightFill className="text-2xl" />
          </span>
        }
        onPageChange={handlePageClick}
        pageRangeDisplayed={9}
        pageCount={pageCount}
        previousLabel={
          <span className="flex gap-x-2 items-center">
            <RiArrowDropLeftFill className="text-2xl" />
            Prev
          </span>
        }
        renderOnZeroPageCount={null}
      />
    </div>
  )
}
