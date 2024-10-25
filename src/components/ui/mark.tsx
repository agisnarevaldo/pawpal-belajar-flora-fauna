import Image from "next/image";

export default function Mark() {
    return (
        <Image
            className="absolute bottom-5 left-5"
            src="/logo-sm-white.svg"
            alt="PawPal Logo"
            width={200}
            height={50}
        />
    )
}