import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className='flex h-24 items-center justify-between border-b mb-4'>
      <div>
        <h1 className='text-4xl italic font-bold cursor-pointer text-red-600'
        onClick={() => navigate('/')}
        >Meetup</h1>
      </div>
      <div>
      <form class={`flex items-center`}>
        <div className={`relative w-96`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            type="text"
            placeholder="Search by title and tag"
            className="w-full py-3 pl-12 pr-4 text-gray-500 border rounded-md  bg-[#ffffff] focus:bg-[#ffece2] focus:outline-none "
            name="searchValue"
            // value={state.filters.searchValue}
          />
        </div>
      </form>
      </div>
    </div>
  )
}

export default Navbar
