"use client"
import React, { useState, useEffect } from 'react'

const Filter = ({ carList, setBrand, setType }: any) => {
    const [brandList, setBrandList] = useState<string[]>([])
    const [typeList, setTypeList] = useState<string[]>([])

    useEffect(() => {
        if(carList){
            filterCarList()
        }
    }, [carList])

    const filterCarList = () => {
        const brandSet = new Set<string>()
        const typeSet = new Set<string>()

        carList.forEach((car: any) => {
            brandSet.add(car.carBrand)
            typeSet.add(car.carType)
        })

        setBrandList(Array.from(brandSet))
        setTypeList(Array.from(typeSet))
    }

    return (
        <section className='bg-bgblack py-12 flex flex-wrap gap-4 justify-center'>
            <div className='px-8'>
                <h1 className='text-2xl md:text-4xl font-medium text-white'>Modèles de voitures de luxe</h1>
                <p className='pt-4 text-darkblack1 font-medium text-white'>Découvrez notre collection de voitures</p>
            </div>

            <select 
                className="select select-bordered bg-bgblack text-white w-full max-w-xs"
                onChange={(e) => setType(e.target.value)}>
                <option disabled selected>Type de Voiture</option>
                {typeList.length > 0 && typeList.map((type: string, idx: number) => (
                    <option key={idx}>{type}</option>
                ))}
            </select>

            <select 
                className="select select-bordered bg-bgblack text-white w-full max-w-xs"
                onChange={(e) => setBrand(e.target.value)}>
                <option disabled selected>Voiture</option>
                {brandList.length > 0 && brandList.map((brand: string, idx: number) => (
                    <option key={idx}>{brand}</option>
                ))}
            </select>
        </section>
    )
}

export default Filter
