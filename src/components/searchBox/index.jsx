import React from 'react'
import SearchIconSvg from '../imageSvg/searchIconSvg'
import FilterSvgSearch from '../imageSvg/filterSvgSearch'

function SearchBox({ props, className }) {

    return (
        <div
            className={`input-container flex items-center border p-2 bg-[#F4F3FD] rounded-md ${className}`}
        >
            <label
                htmlFor="default-search"
                className="mb-2 text-sm font-medium sr-only "
            ></label>

            <div className="flex items-center">
                {/* {<MagnifyingGlassIcon className="w-6 h-6 ml-2" />} */}
                <SearchIconSvg />
            </div>
            <input
                type="search"
                placeholder='Find Course'
                className="h-full w-full p-2 text-sm border-none outline-none bg-[#F4F3FD]"
                {...props}
            />

            <FilterSvgSearch />
        </div>
    )
}

export default SearchBox