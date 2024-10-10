"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import carousselimg1 from '@/assets/carousselimg1.webp'
import carousselimg2 from '@/assets/carousselimg2.webp'
import carousselimg3 from '@/assets/carousselimg3.webp'
import carousselimg4 from '@/assets/carousselimg4.webp'

export function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20" id="categories">
      <h2 className="max-w-7xl pl-4 mx-auto text-2xl md:text-5xl font-bold text-white  ">
      Types de voitures de location
      </h2>
      <Carousel items={cards} />
    </div>
  );
}



const data = [
  {
    category: "Convertible",
    title: "Voiture Convertible ",
    src: carousselimg1.src,
    content: "",
  },
  {
    category: "Luxe",
    title: "Voiture de Luxe",
    src: carousselimg2.src,
    content: "",
  },
  {
    category: "SUV",
    title: "Voiture SUV",
    src: carousselimg3.src,
    content: "",
  },

  {
    category: "Sport",
    title: "Voiture Sport",
    src: carousselimg4.src,
    content: "",
  },
  
];
