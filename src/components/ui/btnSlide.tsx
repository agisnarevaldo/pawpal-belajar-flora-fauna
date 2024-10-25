import {Icon} from "@iconify/react";

type btnSlideProps = {
    icon: string;
    onClick: () => void;
}

export default function BtnSlide({icon, onClick}: btnSlideProps) {
    return (
        <button className="px-4 py-2 bg-white rounded-lg" onClick={onClick}>
            <Icon className="text-3xl font-semibold" icon={icon} />
        </button>
    )
}