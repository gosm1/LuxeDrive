"use client"
import { createBooking, getStoreLocation } from '@/graphql'
import React, { useEffect, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'

const Form = ({car}:any) => {
    const [location, setLocation] = useState<any>([])
    const [formValue, setFormValue] = useState({
        fullName: "",
        pickUpLocation: "",
        pickUpDate: "",
        dropOffDate: "",
        pickUpTime: "",
        dropOffTime: "",
        contactNumber: "",
    })

    useEffect(() => {
        getStoreLocation_()
    }, [])

    const getStoreLocation_ = async () => {
        try {
            const response: any = await getStoreLocation()
            setLocation(response?.storeLocations)
        } catch (error) {
            console.error("Error fetching store locations:", error)
        }
    }

    const handleChange = (e:any) => {
        setFormValue({
            ...formValue,
            [e.target.name]: e.target.value
        });
    };
    
    const handleSubmit = async (e:any) => {
        e.preventDefault();
        
        // Check if all fields are filled
        if (Object.values(formValue).some(value => value === "")) {
            toast.error('Please fill in all fields.');
            return;
        }

        try {
            const resp = await createBooking(formValue);
            
            toast.success('Booking created successfully!', {
                duration: 5000,
                
            });
            
            // Reset form values
            setFormValue({
                fullName: "",
                pickUpLocation: "",
                pickUpDate: "",
                dropOffDate: "",
                pickUpTime: "",
                dropOffTime: "",
                contactNumber: "",
            });

        } catch (error) {
            console.error("Error creating booking:", error);
            toast.error('An error occurred while creating the booking. Please try again.');
        }
    }

    return (
        <div>
            <Toaster position="top-center" reverseOrder={false} />
            <form className='mt-4' onSubmit={handleSubmit}>
                    <div className='pb-2'>
                        <p className='text-white pb-2'>Pickup date</p>
                        <input
                            className='w-full max-w-md focus:text-gray-200 py-3 px-3 bg-greydark rounded-md'
                            name='fullName'
                            onChange={handleChange}
                            value={formValue.fullName}  // Bind to formValue
                            placeholder='Enter your Full Name...'
                            required
                    />
                    </div>
                <p className='text-white pb-2'>Pickup Location</p>
                <select
                    className="select select-bordered w-full max-w-md bg-greydark text-white"
                    name='pickUpLocation'
                    onChange={handleChange}
                    value={formValue.pickUpLocation}  // Bind to formValue
                    required>
                    <option value="" disabled>Pickup Location</option>
                    {location.map((loc: any, idx: number) => (
                        <option key={idx} value={loc.address}>{loc.address}</option>
                    ))}
                </select>

                <div className='pt-4 flex flex-col md:flex-row gap-4 md:items-center md:justify-center'>
                    <div>
                        <p className='text-white pb-2'>Pickup date</p>
                        <input
                            name='pickUpDate'
                            type="date"
                            onChange={handleChange}
                            value={formValue.pickUpDate}  // Bind to formValue
                            className="block p-3 px-10 text-sm bg-greydark text-white rounded-lg  custom-date"
                            required
                        />
                    </div>
                    <div>
                        <p className='text-white pb-2'>Dropoff date</p>
                        <input
                            name='dropOffDate'
                            type="date"
                            onChange={handleChange}
                            value={formValue.dropOffDate}  // Bind to formValue
                            className="block p-3 px-10 text-sm bg-greydark text-white rounded-lg  custom-date"
                            required
                        />
                    </div>
                </div>

                <div className='pt-4 flex flex-col md:flex-row gap-4 md:items-center md:justify-center'>
                    <div>
                        <p className='text-white pb-2'>Pickup time</p>
                        <input
                            name='pickUpTime'
                            type="time"
                            onChange={handleChange}
                            value={formValue.pickUpTime}  // Bind to formValue
                            className="block p-3 px-10 w-48 text-sm bg-greydark text-white rounded-lg  custom-date custom-date"
                            required
                        />
                    </div>
                    <div>
                        <p className='text-white pb-2'>Dropoff time</p>
                        <input
                            name='dropOffTime'
                            type="time"
                            onChange={handleChange}
                            value={formValue.dropOffTime}  // Bind to formValue
                            className="block p-3 px-10 w-48 text-sm bg-greydark text-white rounded-lg  custom-date"
                            required
                        />
                    </div>
                </div>

                <p className='text-white pb-2 pt-4'>Contact Number</p>
                <input
                    className='w-full max-w-md text-white py-3 px-3 bg-greydark rounded-md'
                    name='contactNumber'
                    onChange={handleChange}
                    value={formValue.contactNumber}  // Bind to formValue
                    placeholder='Enter your number...'
                    required
                />

                <div className="pt-7 flex justify-end">
                    <button type="submit"
                        className="btn px-9 bg-greeyellow border-white text-darkblack ml-4">Book Now
                    </button>
                </div>

            </form>
        </div>
    )
}

export default Form
