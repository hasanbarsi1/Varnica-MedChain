import React from 'react'

const Searchbar = () => {
  return (
    <div className='flex flex-row items-center mb-[30px] justify-between'>
          <div className="flex flex-row items-center gap-4"><h1 className="text-2xl font-semibold ">Your Public key :</h1><h1 className="text-2xl font-normal text-gray-500 ">9xqNNNzSGQqR</h1></div>
          <div className="flex items-center mr-[46px] bg-white rounded-md border-2 border-gray-200 p-2 w-[400px]">
            <i className="bx bx-search text-[20px] mr-2"></i>
            <input type="text" placeholder="Search" className="w-full outline-none bg-transparent" />
            <i className="bx bx-bell text-[20px] ml-2"></i>
          </div>
          
        </div>
  )
}

export default Searchbar
