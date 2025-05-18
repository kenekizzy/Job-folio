import React from 'react'

const SearchBar = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center gap-4 p-6 bg-white">
      <div className="flex flex-1 gap-4">
        <input type="text" placeholder="Search job title or keyword" className="w-full border rounded px-4 py-2" />
        <input type="text" placeholder="Country or timezone" className="w-full border rounded px-4 py-2" />
      </div>
      <button className="bg-green-600 text-white px-6 py-2 rounded">Find jobs</button>
    </div>
  )
}

export default SearchBar