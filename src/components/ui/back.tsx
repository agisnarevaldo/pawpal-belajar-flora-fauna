import {Icon} from "@iconify/react";
import Link from "next/link";

export default function Back({href, classname}: {href: string, classname?: string}) {
    return (
        <Link
            href={href}
            className={`${classname} text-4xl p-2 bg-white rounded-lg hover:bg-opacity-75 transition-all duration-200`}
        >
            <Icon icon="humbleicons:arrow-go-back" />
        </Link>
    )
}