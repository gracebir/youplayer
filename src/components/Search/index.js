import React, { useState } from 'react'
import './Search.css'

function Search() {
  const [search, setSearch] = useState("react")
  const onSearch = (keyword) => {
    console.log(keyword);
  }
  return (
    <div className='search__form'>
      <input className='search__input dark__modify' placeholder='search' type="text" onChange={(e) => setSearch(e.target.value)} />
      <button className='btn__search dark__modify' onClick={()=>onSearch(search)}>search</button>
    </div>
  )
}

export default Search
