"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { IoCarSportSharp } from "react-icons/io5";
import { RiSteering2Fill } from "react-icons/ri";



const CarsCard = (props:any) => {
    const [car, setCar] = useState(props.car)

    useEffect(() => {
        if(props.car){
            setCar(props.car)
        }
    },[props.car])
    return car&&  (
        <section className=''>
    <div className="relative my-4 flex w-full max-w-xs flex-col overflow-hidden rounded-lg   bg-greydark  shadow-md">
        <div className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl  items-center justify-center">
            <Image
                src={car.carImage?.url}
                alt={car.carName}
                width={260}
                height={200}
                className='object-contain'
                
            />
        </div>
        <div className="mt-4 px-5 pb-5">
            <h5 className="text-xl tracking-tight font-medium text-white text-center">{car.carName}</h5>

            <div className="mt-2 mx-3 mb-6 flex items-center justify-between">
                <p className="text-whitebeige">
                    $
                    <span className="text-[28px] font-bold mb-2">{car.carPrice}</span>
                    <span className="text-sm">/jour</span>
                </p>
                <div className="flex items-center px-3 ">
                    {[...Array(5)].map((_, i) => (
                        <svg
                            key={i}
                            aria-hidden="true"
                            className="h-5 w-5 text-yellow-300"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                    ))}
                    <span className="mr-1 ml-1 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">5.0</span>
                </div>
            </div>

            <div className='pb-4 flex items-center justify-evenly'>
                <div className="text-center">
                    <RiSteering2Fill className='text-xl text-whitebeige mx-auto' />
                    <p className='text-[16px] font-light text-whitebeige'>{car.carBrand}</p>
                </div>
                <div className="text-center">
                    <IoCarSportSharp className='text-xl text-whitebeige mx-auto' />
                    <p className='text-[16px] font-light text-whitebeige'>{car.carType}</p>
                </div>
            </div>

            <a
                href="#"
                className="flex items-center justify-center rounded-md bg-greeyellow px-5 py-2.5 text-center text-sm font-medium text-darkblack hover:bg-whitebeige01 focus:outline-none focus:ring-4 focus:ring-blue-300"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-2 h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h18l-2 13H5L3 3z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 10-8 0v4"></path>
                </svg>
                Book Now
            </a>
        </div>
    </div>
</section>


    )
}

export default CarsCard
