"use client";

import {useState} from "react";
import BtnSlide from "@/components/ui/btnSlide";
import Image from "next/image";
import {Icon} from "@iconify/react";

type Item = {
    name: string;
    image2: string;
    description: string;
}

type SlideShowProps = {
    items: Item[];
    startIndex: number;
    onClose: () => void;
}

export default function SlideShow({items, startIndex, onClose}: SlideShowProps) {
    const [currentIndex, setCurrentIndex] = useState(startIndex);

    // Funtion to go to previous slide
    const prevSlide = () => {
        setCurrentIndex((prev) => (prev > 0 ? prev - 1 : items.length - 1));
    };

    // Function to go to next slide
    const nextSlide = () => {
        setCurrentIndex((prev) => (prev < items.length - 1 ? prev + 1 : 0));
    };

    // functon to play the description using SpeechSynthesisUtterance
    const playDescription = () => {
        const utterance = new SpeechSynthesisUtterance(items[currentIndex].description);
        utterance.lang = "id-ID";
        window.speechSynthesis.speak(utterance);
    };

    return (
        <div
            className="fixed inset-0 bg-black/25 backdrop-blur z-50 flex flex-col gap-8 items-center justify-center p-8 text-[#593316]">
            <div className="relative p-2 border-4 border-[#1b1b1b] rounded-[65px] max-w-screen-lg w-full text-center">
                <div className="bg-white/90 p-8 rounded-[55px]">
                    <button className="absolute top-8 right-8 text-[37px] text-red-600" onClick={onClose}>
                        <Icon icon="iconamoon:close"/>
                    </button>

                    <Image src={items[currentIndex].image2} alt={items[currentIndex].name} width={400} height={400}
                           className="w-full h-64 mb-4"/>
                    <h2 className="text-2xl font-bold mb-4">{items[currentIndex].name}</h2>
                    <p className="mb-4 text-justify font-semibold px-8">{items[currentIndex].description}</p>
                </div>
            </div>
            <div className="flex justify-between gap-14 text-[#5431A5]">
                <BtnSlide icon="uiw:left" onClick={prevSlide}/>
                <BtnSlide icon="line-md:play-filled" onClick={playDescription}/>
                <BtnSlide icon="uiw:right" onClick={nextSlide}/>
            </div>
        </div>
    )
}