import Menu from "@/components/layout/menu";
import Header from "@/components/header";

export default function Page() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-[url(/bg/garden.png)] bg-cover">
            <Header backTo="/menu/fauna/" />
            <Menu items={animals} />
        </div>
    )
}

const animals = [
    {
        name: "B-A-D-A-K",
        image: "/animals/badak.svg",
        description: "Badak adalah hewan besar dengan kulit tebal dan keras, serta memiliki satu atau dua tanduk di hidungnya. Mereka hidup di padang rumput dan hutan, dan suka makan rumput serta dedaunan. Mereka biasanya hidup sendiri atau dalam kelompok kecil, Tanduk badak digunakan untuk melindungi diri dari pemangsa."
    },
    {
        name: "H-A-R-I-M-A-U",
        image: "/animals/harimau.svg",
        description: "Harimau adalah hewan besar dan kuat yang hidup di hutan. Bulunya berwarna oranye dengan garis-garis hitam, yang membantu mereka bersembunyi saat berburu. Harimau suka makan daging. Mereka adalah perenang yang hebat dan suka berada di dekat air."
    },
    {
        name: "J-E-R-A-P-A-H",
        image: "/animals/jerapah.svg",
        description: "Jerapah adalah hewan tertinggi di dunia, dengan leher yang sangat panjang. Leher panjang ini membantu mereka makan daun-daun tinggi di pohon yang tidak bisa dijangkau hewan lain. Jerapah memiliki pola bintik-bintik cokelat di tubuhnya yang unik untuk setiap jerapah. Jerapah hidup di padang rumput dan hutan, serta suka hidup dalam kelompok yang disebut kawanan."
    },
    {
        name: "M-O-N-Y-E-T",
        image: "/animals/monyet.svg",
        description: "Monyet adalah hewan yang suka bermain dan melompat-lompat di pohon. Mereka punya ekor panjang yang membantu menjaga keseimbangan saat memanjat. Monyet suka makan buah-buahan seperti pisang, apel, dan mangga. Mereka hidup di hutan. Monyet juga pintar dan bisa meniru suara atau gerakan yang mereka lihat."
    },
    {
        name: "S-I-N-G-A",
        image: "/animals/singa.svg",
        description: "Singa adalah hewan besar dan kuat yang dikenal sebagai \"raja hutan.\" Mereka hidup di padang rumput dan hutan. Singa jantan memiliki surai tebal di sekitar kepalanya, sedangkan singa betina tidak. Singa suka berburu bersama dalam kelompok yang disebut kawanan. Mereka biasanya berburu hewan seperti zebra dan rusa."
    },
    {
        name: "Z-E-B-R-A",
        image: "/animals/zebra.svg",
        description: "Zebra adalah hewan yang memiliki corak garis-garis hitam dan putih di tubuhnya. Zebra hidup di padang rumput dan sering bergerombol dengan kawanannya. Mereka makan rumput dan daun-daunan. Zebra adalah pelari cepat, sehingga mereka bisa melarikan diri dari hewan pemangsa seperti singa."
    }
]
