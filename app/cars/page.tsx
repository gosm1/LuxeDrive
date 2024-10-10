"use client"
import CarsLists from '@/components/CarsLists'
import Filter from '@/components/Filter'
import Footer from '@/components/Footer'
import NavBanner from '@/components/NavBanner'
import Navbar from '@/components/Navbar'
import { getCarList } from '@/graphql'
import React, { useEffect, useState } from 'react'

const Page = () => {
    const [carList, setCarList] = useState<any>([])
    const [carOrgList, setOrgCarList] = useState<any>([])
    const [selectedBrand, setSelectedBrand] = useState<string>('')
    const [selectedType, setSelectedType] = useState<string>('')

    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        getCarList_()
    }, [])

    const getCarList_ = async () => {
        try {
            const response:any = await getCarList()
            setCarList(response?.cars)
            setOrgCarList(response?.cars)
        } finally {
            setLoading(false)
        }
    }

    const filterCarList = (brand: string, type: string) => {
        const filterList = carOrgList.filter((item: any) =>
            (brand ? item.carBrand === brand : true) &&
            (type ? item.carType === type : true)
        )
        setCarList(filterList)
    }

    useEffect(() => {
        filterCarList(selectedBrand, selectedType)
    }, [selectedBrand, selectedType])

    return (
        <section className='bg-bgblack'>
            <NavBanner/>
            <Navbar/>
            <div className='pt-20'>
                <Filter 
                carList={carOrgList}
                setBrand={(value: string) => setSelectedBrand(value)}
                setType={(value: string) => setSelectedType(value)}
                />
            </div>
            
            {loading ? (
                <div className='py-8 px-8 flex gap-4 lg:gap-4 flex-wrap items-center justify-center'>
                    {[...Array(8)].map((_, idx) => (
                        <div key={idx} className="flex flex-col bg-darkblack w-80 h-96 animate-pulse rounded-xl p-4 gap-4">
                            <div className="bg-bgblack/50 w-full h-52 animate-pulse rounded-md"></div>
                            <div className="flex flex-col gap-2 py-5">
                                <div className="bg-bgblack/50 w-full h-4 animate-pulse rounded-md"></div>
                                <div className="bg-bgblack/50 w-4/5 h-4 animate-pulse rounded-md"></div>
                                <div className="bg-bgblack/50 w-full h-4 animate-pulse rounded-md"></div>
                                <div className="bg-bgblack/50 w-2/4 h-4 animate-pulse rounded-md"></div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <CarsLists carList={carList}/>
                
                
            )}
            
            
            <Footer/>
        </section>
    )
}

export default Page
