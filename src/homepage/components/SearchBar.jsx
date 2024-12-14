import React from 'react'
import { NavLink } from 'react-router'
import { useStore } from 'zustand'
import { themeStore } from '../../common/Store'

const SearchBar = ({searchTerm,setSearchTerm}) => {

  const {theme,toggle} = useStore(themeStore)

  return (
    <div className='w-full flex justify-center items-center gap-5 border-b border-zinc-400 py-3'>
        <h3>Search:</h3>
        <input type="text" value={searchTerm} className='border border-zinc-300 px-2 py-1' placeholder='Enter search term' onChange={(e)=> {
            setSearchTerm(e.target.value)
        }}/>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/register">Register</NavLink>
        <button onClick={() => {
          toggle()
        }}>{theme === "light" ? "Activated Dark Mode" : "Activated Light Mode"}</button>
    </div>
  )
}

export default SearchBar