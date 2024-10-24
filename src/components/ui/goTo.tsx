import Link from "next/link";
import {Icon} from "@iconify/react";

export default function GoTo({href, icon, text}: { href: string, icon: string, text: string }) {
    return (
        <Link
            href={href}
            className="flex justify-start items-center gap-8 w-56 text-black text-2xl font-bold bg-light rounded-lg p-2 hover:bg-opacity-75 transition-all duration-200"
        >
            <div className="bg-purple p-2 rounded-md text-white text-3xl">
                <Icon icon={icon}/>
            </div>
            {text}
        </Link>
    )
}