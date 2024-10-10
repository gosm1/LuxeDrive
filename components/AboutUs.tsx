import React from 'react'
import abtusimg1 from '@/assets/aboutus-bg.webp'
import abtusimg2 from '@/assets/about-us-bg2.webp'
import Image from 'next/image'
const AboutUs = () => {
    return (
        <section className="py-10 relative" id='About-Us'>
        <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
            <div className="w-full justify-start items-center gap-12 grid lg:grid-cols-2 grid-cols-1">
                <div
                    className="w-full justify-center items-start gap-6 grid sm:grid-cols-2 grid-cols-1 lg:order-first order-last">
                    <div className="pt-24 lg:justify-center sm:justify-end justify-start items-start gap-2.5 flex">
                        <Image src={abtusimg1} className='rounded-xl' alt='about us'/>
                    </div>
                    <Image src={abtusimg2} className='rounded-xl' alt='about us'/>
                </div>
                <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
                    <div className="w-full flex-col justify-center items-start gap-8 flex">
                        <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                            <h2
                                className="text-white text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                                À Propos de Nous - LuxeDrive</h2>
                            <p className="text-gray-400 text-base font-normal leading-relaxed lg:text-start text-center">
                            Chez Luxedrive, nous croyons en l'excellence partagée. Chaque voiture louée est le fruit d'une collaboration étroite entre notre équipe dévouée et nos clients exigeants. Ensemble, nous ne nous contentons pas de fournir des véhicules de luxe ; nous créons des expériences inoubliables qui marquent l'esprit de nos clients.</p>
                        </div>
                        <div className="w-full lg:justify-start justify-center items-center sm:gap-10 gap-5 inline-flex">
                            <div className="flex-col justify-start items-start inline-flex">
                                <h3 className="text-greeyellow text-4xl font-bold font-manrope leading-normal">15+</h3>
                                <h6 className="text-gray-500 text-base font-normal leading-relaxed">Ans d'Expérience</h6>
                            </div>
                            <div className="flex-col justify-start items-start inline-flex">
                                <h4 className="text-greeyellow text-4xl font-bold font-manrope leading-normal">300+</h4>
                                <h6 className="text-gray-500 text-base font-normal leading-relaxed">Locations Réussies</h6>
                            </div>
                            <div className="flex-col justify-start items-start inline-flex">
                                <h4 className="text-greeyellow text-4xl font-bold font-manrope leading-normal">250+</h4>
                                <h6 className="text-gray-500 text-base font-normal leading-relaxed">Clients Satisfaits</h6>
                            </div>
                        </div>
                    </div>
                    <button className='bg-greeyellow py-1 px-3 md:py-3 md:px-8 rounded-full font-medium hover:bg-greenhover '>
                        Contacez Nous
                    </button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutUs
