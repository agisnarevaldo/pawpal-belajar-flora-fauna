"use client";

import { useState } from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";

export default function Setting() {
    const [isOpen, setIsOpen] = useState(false); // Kontrol Modal
    const [isVisible, setIsVisible] = useState(false); // Kontrol Transisi

    const toggleModal = () => {
        if (!isOpen) {
            setIsOpen(true);
            setTimeout(() => setIsVisible(true), 10); // Delay kecil agar transisi berjalan
        } else {
            setIsVisible(false);
            setTimeout(() => setIsOpen(false), 300); // Delay untuk menyelesaikan transisi
        }
    };

    return (
        <>
            <button
                onClick={toggleModal}
                className="text-white text-4xl"
            >
                <Icon icon="ic:round-settings" />
            </button>

            {isOpen && (
                <div
                    className={`fixed inset-0 z-50 flex items-center justify-center bg-[#0F123D] transition-opacity duration-300 ${
                        isVisible ? "opacity-100 visible" : "opacity-0 invisible"
                    }`}
                >
                    <div
                        className={`relative w-full h-full transition-transform transform duration-300 ${
                            isVisible ? "scale-100" : "scale-90"
                        }`}
                    >
                        <button
                            onClick={toggleModal}
                            className="absolute top-5 right-5 text-4xl p-2 bg-white font-bold text-black rounded-lg"
                        >
                            <Icon icon="humbleicons:arrow-go-back" />
                        </button>

                        <div className="flex h-full w-full">
                            <div className="flex flex-col justify-center items-center gap-8 pl-8 rounded-lg text-center w-3/5">
                                <Image src="/logo-sm-white.svg" alt="logo" width={300} height={300} />
                                <p className="text-lg text-justify">
                                    Pawpal adalah aplikasi pembelajaran yang interaktif dan menyenangkan, dirancang
                                    khusus untuk anak-anak TK, untuk mengenalkan mereka pada dunia flora (tumbuhan) dan
                                    fauna (hewan) dengan cara yang seru dan mudah dipahami. Aplikasi ini mengajak
                                    anak-anak untuk belajar melalui permainan edukatif, cerita interaktif, dan aktivitas
                                    yang merangsang rasa ingin tahu tentang alam dan lingkungannya.
                                </p>
                            </div>
                            <div className="flex h-full w-full items-end justify-end">
                                <Image src="/moon.png" alt="moon" width={950} height={950} />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
