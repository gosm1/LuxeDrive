import React from 'react'
import { IoCarSportSharp } from "react-icons/io5";

const SearchBar = () => {
    return (
        <section className=' mx-10 bg-[#FFFFFF2E] backdrop-blur-xl rounded-[30px]' >
            <form className='flex flex-col  md:flex-row md:flex-wrap items-start justify-center md:items-center md:justify-evenly gap-8 md:gap-6 ml-10 md:ml-0 py-8'>
                {/* Car type  */}
                <div className='flex gap-3'>
                    <IoCarSportSharp fill='#EDFF8C' className='text-2xl '/>
                    <div>
                        <p className='text-white font-semibold '>Type De Voiture</p>
                        
                        <select id="cars" className='py-2 bg-transparent pr-5  text-sm rounded-lg   '>
                            <option disabled selected>Type De Voiture</option>
                            <option value="sports" className='text-black'>Sports</option>
                            <option value="luxury" className='text-black'>Luxury</option>
                            <option value="suv" className='text-black'>SUV</option>
                            <option value="convertible" className='text-black'>Convertible</option>
                        </select>
                    </div>
                </div>
                {/* Pick Up location  */}
                <div className='flex gap-3'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-map-pinned text-greeyellow"><path d="M18 8c0 3.613-3.869 7.429-5.393 8.795a1 1 0 0 1-1.214 0C9.87 15.429 6 11.613 6 8a6 6 0 0 1 12 0"/><circle cx="12" cy="8" r="2"/><path d="M8.714 14h-3.71a1 1 0 0 0-.948.683l-2.004 6A1 1 0 0 0 3 22h18a1 1 0 0 0 .948-1.316l-2-6a1 1 0 0 0-.949-.684h-3.712"/></svg>
                    <div>
                        <p className='text-white font-semibold  '>Lieu de prise en charge</p>
                        
                        <select id="Pick-Up-location" className='py-2 bg-transparent   text-sm rounded-lg   '>
                            <option disabled selected>Lieu de prise en charge</option>
                            <option value="Avenue Hassan II ang" className='text-black'>Avenue Hassan II ang</option>
                            <option value="Rue Al Azrak Ahmed, Maârif" className='text-black'>Rue Al Azrak Ahmed, Maârif</option>
                            <option value="70 Boulevard Ghandi" className='text-black'>70 Boulevard Ghandi</option>
                        </select>
                    </div>
                </div>
                {/* Pick up Date  */}
                <div className='flex gap-3'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-calendar text-greeyellow "><path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/></svg>                    <div>
                        <p className='text-white font-semibold  '>Date de prise en charge</p>
                        
                        <input 
                        className='py-2 text-white bg-transparent'
                        type='date'
                        />
                    </div>
                </div>
                {/* drop off location  */}
                <div className='flex gap-3'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-map-pinned text-greeyellow"><path d="M18 8c0 3.613-3.869 7.429-5.393 8.795a1 1 0 0 1-1.214 0C9.87 15.429 6 11.613 6 8a6 6 0 0 1 12 0"/><circle cx="12" cy="8" r="2"/><path d="M8.714 14h-3.71a1 1 0 0 0-.948.683l-2.004 6A1 1 0 0 0 3 22h18a1 1 0 0 0 .948-1.316l-2-6a1 1 0 0 0-.949-.684h-3.712"/></svg>
                    <div>
                        <p className='text-white font-semibold  '>Lieu de dépôt</p>
                        
                        <select id="drop-off-location" className='py-2 bg-transparent  text-gray-900 text-sm rounded-lg  dark:text-white '>
                            <option disabled selected>Lieu de dépôt</option>
                            <option value="Avenue Hassan II ang" className='text-black'>Avenue Hassan II ang</option>
                            <option value="Rue Al Azrak Ahmed, Maârif" className='text-black'>Rue Al Azrak Ahmed, Maârif</option>
                            <option value="70 Boulevard Ghandi" className='text-black'>70 Boulevard Ghandi</option>
                        </select>
                    </div>
                </div>
                {/* Drop off date */}
                <div className='flex gap-3'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-calendar text-greeyellow "><path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/></svg>                    <div>
                        <p className='text-white font-semibold '>Date de dépôt</p>
                        
                        <input 
                        className='py-2 text-white bg-transparent'
                        type='date'
                        />
                    </div> 
                </div>

                <a href='/cars' className='bg-greeyellow px-3 py-3 rounded-full '>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-search text-bgblack"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
                </a>
            </form>
        </section>
    )
}

export default SearchBar
