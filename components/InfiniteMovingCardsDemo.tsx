"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

import bently from '@/assets/bently.webp'
import rrlogo from "@/assets/rrlogo.webp"
import mercedes from "@/assets/mercedes.webp"
import audi from '@/assets/audi.webp'
import ferrari from '@/assets/ferrari.webp'
import porshe from '@/assets/porshe.webp'
import lambo from '@/assets/lamborghini.webp'
import rangerove from '@/assets/rangerover.webp'
import astonmartin from '@/assets/astonmartin.webp'

export function InfiniteMovingCardsDemo() {
    return (
        <div className="h-[15rem] rounded-md flex flex-col antialiased dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
            <InfiniteMovingCards
                speed="slow"
                items={[
                    { imageUrl: bently.src },
                    { imageUrl: rrlogo.src },
                    { imageUrl: mercedes.src },
                    { imageUrl: audi.src },
                    { imageUrl: ferrari.src },
                    { imageUrl: porshe.src },
                    { imageUrl: lambo.src },
                    { imageUrl: rangerove.src },
                    { imageUrl: astonmartin.src },
                ]}
            />
        </div>
    );
}


