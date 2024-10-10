import React from 'react'
import sclass from "@/assets/sclass.webp"
import rr from "@/assets/rr.webp"
import rangerover from '@/assets/ranve rover.webp'

import herobg from '@/assets/hero-bg.jpg'
import Image from 'next/image'

const Hero = () => {
    return (
        <section className='relative h-screen max-h-[70vh] md:max-h-[85vh] overflow-hidden' id='Hero'>
    <Image
        className='contrast-100 brightness-50 rounded-[40px] w-full h-full object-cover'
        src={herobg}
        alt='hero background image'
    />
    <div className='absolute inset-0 pb-0  flex flex-col justify-center items-center '>
        <p className='text-greeyellow mb-6 text-sm text-center md:text-lg'>Bienvenue chez LuxeDrive</p>
        <h1 className="text-xl text-center lg:text-center md:text-4xl lg:text-7xl text-white font-semibold">
            Louez les voitures les plus <span className='text-greeyellow'>prestigieuses</span> au Maroc
        </h1>
        <p className='pt-8 text-whitebeige01 md:font-medium text-center text-sm lg:text-lg'>
            Découvrez l'élégance et la performance des voitures de luxe à votre portée.
        </p>
        
        {/* buttons */}
        <div className='mt-8 flex flex-col md:flex-row items-center justify-center gap-4'>
            <button className='bg-greeyellow py-1 px-3 md:py-3 md:px-8 rounded-full font-medium hover:bg-greenhover '>
                <a href='/cars'>Réserver une Voiture</a>
            </button>
            <button className='bg-white py-1 px-3 md:py-3 md:px-8 rounded-full font-medium  '>
                <a href='/cars'> Voir notre Flotte</a>
            </button>
        </div>
        
        
    </div>
    

</section>




    )
}

export default Hero
