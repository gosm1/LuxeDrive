import React from 'react'

const SearchInput = () => {
    return (
        <section className='bg-white py-16'>
            <h1 className=' text-2xl md:text-4xl font-medium text-center text-bgblack '>Cherche votre besoin</h1>

            
            <form className="max-w-xl mx-auto pt-8">   
    <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div className="relative flex items-center space-x-2">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#EDFF8C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-map-pin">
                <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/>
                <circle cx="12" cy="10" r="3"/>
            </svg>
        </div>
        <input 
            type="search" 
            id="default-search" 
            className="block w-2/3 p-4 ps-10 text-sm text-gray-900  rounded-lg  dark:bg-bgblack  dark:placeholder-gray-400 dark:text-whitebeige " 
            placeholder="Search Pickup location..." 
            required 
        />
        <input 
            type="date" 
            className="block w-2/5 p-4 ps-10 text-sm text-gray-900  rounded-lg  dark:bg-bgblack  dark:placeholder-gray-400 dark:text-whitebeige " 
            required
        />
        <button 
            type="submit" 
            className="text-darkblack bg-greeyellow hover:bg-whitebeige01 focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-8 py-4 dark:bg-greeyellow dark:hover:bg-whitebeige01 dark:focus:ring-whitebeige01">
            Search
        </button>
    </div>
</form>


        </section>
    )
}

export default SearchInput
