import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-home min-h-screen bg-cover">
        <Link href="/menu">
            <Image
                src="/play.svg"
                alt="play"
                width={300}
                height={300}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hover:scale-110 transition-transform duration-500"
            />
        </Link>
    </div>
  );
}
