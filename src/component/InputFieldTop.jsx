import React from 'react'
import SearchIcon from '/assets/images/search-icon.svg'

export default function InputFieldTop() {
  return (
    <div className="flex justify-between items-center self-stretch">
      <SearchInputField />
    </div>
  )
}

function SearchInputField() {
  return (
    <div className="flex flex-row relative">
      <input
        type="text"
        placeholder="Search transaction"
        className="  px-[1.25rem] py-[0.2rem] rounded-md  border"
      />
      <img src={SearchIcon} alt="search icon" className="absolute right-1 top-2" />
    </div>
  )
}
