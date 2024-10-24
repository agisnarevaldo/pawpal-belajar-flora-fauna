"use client";

import { useState } from "react";

type Item = {
    name: string;
    image: string;
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
        window.speechSynthesis.speak(utterance);
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-8">
            <div className="relative bg-white p-8 rounded-lg max-w-xl w-full text-center">
                <button className="absolute top-4 right-4 text-2xl" onClick={onClose}>
                    &times;
                </button>

                <img src={items[currentIndex].image} alt={items[currentIndex].name}
                     className="w-full h-64 object-cover mb-4"/>
                <h2 className="text-2xl font-bold mb-4">{items[currentIndex].name}</h2>
                <p className="mb-4">{items[currentIndex].description}</p>

                <button onClick={playDescription} className="px-4 py-2 bg-blue-500 text-white rounded-lg mb-4">
                    Play Description
                </button>

                <div className="flex justify-between">
                    <button onClick={prevSlide} className="px-4 py-2 bg-gray-300 rounded-lg">
                        Previous
                    </button>
                    <button onClick={nextSlide} className="px-4 py-2 bg-gray-300 rounded-lg">
                        Next
                    </button>
                </div>
            </div>
        </div>
    )
}