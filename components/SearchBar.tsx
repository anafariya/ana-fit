"use client"

import { useState } from "react"

import SearchMuscleGroup from "./SearchMuscleGroup"

const SearchBar = () => {
    const [muscleGroup, setMuscleGroup] = useState('')
    const handleSearch = () => {

    }
  return (
    <form className='flex items-center justify-start max-sm:flex-col w-full relative max-sm:gap-4 max-w-3xl' onSubmit={handleSearch}>
        <div className="flex-1 max-sm:w-full flex justify-start items-center relative">
            <SearchMuscleGroup
            muscleGroup={muscleGroup}
            setMuscleGroup={setMuscleGroup}
                        />
        </div>
    </form>
  )
}

export default SearchBar
