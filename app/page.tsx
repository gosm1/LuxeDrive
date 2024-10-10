"use client"
import CarsLists from "@/components/CarsLists";
import Filter from "@/components/Filter";
import Hero from "@/components/Hero";
import { InfiniteMovingCardsDemo } from "@/components/InfiniteMovingCardsDemo";
import NavBanner from "@/components/NavBanner";
import SearchBar from "@/components/SearchBar";
import SearchInput from "@/components/SearchInput";
import { getCarList } from "@/graphql";
import Image from "next/image";
import { useEffect, useState } from "react";
import AboutUs from '@/components/AboutUs'
import { AppleCardsCarouselDemo } from "@/components/AppleCardsCarouselDemo";
import WorkProcess from "@/components/WorkProcess";
import Faq from "@/components/Faq";
import Cta from "@/components/Cta";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";



export default function Home() {

  const [carList, setCarList] = useState<any>([])
  const [carOrgList, setOrgCarList] = useState<any>([])
  useEffect(() => {
    getCarList_()
  }, [])

  const getCarList_ = async () => {
    const response:any = await getCarList()
    setCarList(response?.cars)
    setOrgCarList(response?.cars)
  }

  const filterCarList = (brand:string) => {
    const filterList = carOrgList.filter((item:any) => 
      item.carBrand == brand
    )
    setCarList(filterList)
  }

  return (
    <div className="bg-bgblack">
      <NavBanner/>
      <Navbar/>
      <div className="mx-6 md:mx-14 my-10 ">
        <Hero/>
      </div>
      <SearchBar/>
      <InfiniteMovingCardsDemo/>
      <AboutUs/>
      <WorkProcess/>
      <AppleCardsCarouselDemo/>
      <Faq/>
      <Cta/>
      <Footer/>

      {/* <SearchInput/>
      <Filter carList={carOrgList}
              setBrand={(value:any) => filterCarList(value)} />
      <CarsLists carList={carList}/> */}
    </div>
  );
}
