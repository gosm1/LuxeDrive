"use client"
import React, { useState } from 'react'
import CarsCard from './CarsCard'
import BookingModal from './CarBooking/BookingModal'

const CarsLists = (props:any) => {
    const [ selectedcar, setSelectedCar ] = useState<any>(null)
    return (
        <div className='bg-bgblack py-8 px-8 flex gap-4 lg:gap-4 flex-wrap items-center justify-center'>
            {props.carList.map((car:any ,idx:number) => (
                <div onClick={() => {
                    (window as any).my_modal_4.showModal()
                    setSelectedCar(car)
                    }}>
                    <CarsCard car={car} />
                </div>
            ))}

            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            
                <dialog id="my_modal_4" className="modal">
                    {selectedcar && <BookingModal car={selectedcar} />}
                </dialog>
        </div>
    )
}

export default CarsLists
