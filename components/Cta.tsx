import React from 'react'

const Cta = () => {
  return (
    <section className="py-16">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div
        className="lg:py-14 lg:px-20 p-10 rounded-2xl bg-greeyellow flex items-center justify-between flex-col lg:flex-row"
      >
        <div className="block text-center mb-5 lg:text-left lg:mb-0">
          <h2
            className="font-manrope text-xl md:text-4xl text-bgblack font-semibold mb-5 lg:mb-2"
          >
            Ready to Experience Luxury?
          </h2>
          <p className="text-sm md:text-lg  md:max-w-3xl pt-2 text-bgblack">
          Book Your Dream Ride Today!

At Luxedrive, we offer an exclusive selection of luxury vehicles tailored to meet your highest expectations. Whether you’re planning a special occasion or just want to enjoy a drive in style, we have the perfect car for you
          </p>
        </div>
        <a
          href="#"
          className="flex items-center gap-2 bg-bgblack rounded-full shadow-sm md:text-lg text-white font-semibold py-2 px-4 md:py-4 md:px-8 transition-all duration-500"
          >Get In Touch
          <svg
            width="19"
            height="14"
            viewBox="0 0 19 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.75 7L16.4167 7M11.8333 12.5L16.6852 7.64818C16.9907 7.34263 17.1435 7.18985 17.1435 7C17.1435 6.81015 16.9907 6.65737 16.6852 6.35182L11.8333 1.5"
              stroke="white"
              stroke-width="2.4"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </a>
      </div>
    </div>
  </section>
                                          
  )
}

export default Cta
