import React from 'react'

const WorkProcess = () => {
    return (
        <section className='py-24'>
            <h1 className='text-center  mx-auto text-2xl md:text-4xl font-bold text-white pb-12'>Comment Nous Travaillons</h1>
            <div className='flex flex-col md:flex-row items-center justify-center gap-5 md:gap-14 pb-10'>
                <div className='flex flex-col items-center justify-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-search text-bgblack bg-greeyellow h-12 w-12 py-2 rounded-full "><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
                    <p className='text-white py-2 text-xl md:text-lg'>Find Car</p>
                    <p className='text-gray-200 px-10 md:px-0 md:max-w-[20rem] text-center'>Browse our curated selection of luxury vehicles and choose the perfect car that suits your style and needs</p>
                </div>
                <div className='flex flex-col items-center justify-center'>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide py-2 lucide-map-pinned text-bgblack  bg-greeyellow h-12 w-12  rounded-full"><path d="M18 8c0 3.613-3.869 7.429-5.393 8.795a1 1 0 0 1-1.214 0C9.87 15.429 6 11.613 6 8a6 6 0 0 1 12 0"/><circle cx="12" cy="8" r="2"/><path d="M8.714 14h-3.71a1 1 0 0 0-.948.683l-2.004 6A1 1 0 0 0 3 22h18a1 1 0 0 0 .948-1.316l-2-6a1 1 0 0 0-.949-.684h-3.712"/></svg>
                    <p className='text-white py-2 text-xl md:text-lg'>Select Location</p>
                    <p className='text-gray-200 mpx-10 md:px-0 md:max-w-[20rem] text-center'>Choose your desired pickup and drop-off locations, ensuring convenience and ease for your journey</p>
                </div>
                <div className='flex flex-col items-center justify-center'>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-credit-card text-bgblack p-2 bg-greeyellow h-12 w-12  rounded-full"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg>
                    <p className='text-white py-2 text-xl md:text-lg'>Place Order</p>
                    <p className='text-gray-200 px-10 md:px-0 md:max-w-[20rem] text-center'>Complete your reservation with just a few clicks, and get ready to experience luxury on the road</p>
                </div>
            </div>
        </section>
  )
}

export default WorkProcess
