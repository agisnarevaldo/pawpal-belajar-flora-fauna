"use client";

import {useState} from "react";
import SlideShow from "@/components/slideShow";
import Image from "next/image";

type Item = {
    name: string;
    image: string;
    description: string;
};

type MenuProps = {
    items: Item[];
    // title?: string;
};

export default function Menu({ items }: MenuProps) {
    const [selectedItem, setSelectedItem] = useState<number | null>(null);

    return (
        <div className="mx-auto text-center">
            {/*<h1 className="text-3xl font-bold mb-8">{title}</h1>*/}
            <div className="grid grid-cols-3 justify-center items-center w-max gap-8 mx-auto">
                {items.map((item, index) => (
                    <div
                        key={index}
                        className="border-4 p-1 border-black rounded-[45px] cursor-pointer flex items-center justify-center"
                        onClick={() => setSelectedItem(index)}>
                       <div className="h-[140px] w-[140px] bg-light/80 hover:bg-light/50 flex items-center justify-center rounded-[36px]">
                           <Image
                               src={item.image}
                               alt={item.name}
                               width={100}
                               height={100}
                           />
                       </div>
                        {/*<h2 className="mt-4 text-xl font-semibold">{item.name}</h2>*/}
                    </div>
                ))}
            </div>

            {selectedItem !== null && (
                <SlideShow
                    items={items}
                    startIndex={selectedItem}
                    onClose={() => setSelectedItem(null)}
                />
            )}
        </div>
    )
}