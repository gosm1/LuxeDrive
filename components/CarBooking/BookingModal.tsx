import React from 'react'
import CarsCard from '../CarsCard'
import Form from './Form'

function BookingModal({car}:any) {
  return (
    <div className="modal-box w-11/12 max-w-4xl bg-bgblack " >
          <form method="dialog" >
            {/* if there is a button in bgform, it will close the modal */}
            <button className="btn text-greenhover btn-sm btn-circle btn-ghost absolute right-2 top-4">✕</button>
          </form>
          <div className=' border-b-2 pb-2'>
              <h1 className="font-medium text-white text-xl">Rent a Car now</h1>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 bg-bgblack'>
              <div className='flex justify-center bg-bgblack'> 
                <CarsCard className="bg-white" car={car} /> 
              </div>
              <Form car={car}/>

          </div>
        </div>
  )
}

export default BookingModal
