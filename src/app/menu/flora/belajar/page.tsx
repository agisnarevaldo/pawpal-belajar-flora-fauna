import Header from "@/components/header";
import Menu from "@/components/layout/menu";

export default function page() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-[url(/bg/garden.png)] bg-cover">
            <Header backTo="/menu/flora/"/>
            <Menu items={flowers} />
        </div>
    )
}

const flowers = [
    {
        name: "B-U-N-G-A   M-A-T-A-H-A-R-I",
        image: "/flowers/matahari.svg",
        description: "Bunga matahari adalah bunga besar yang berwarna kuning cerah dan selalu menghadap ke arah matahari. Bunga ini tumbuh tinggi dan bijinya bisa dimakan. Anak-anak suka karena bentuknya mirip matahari di langit",
    },
    {
        name: 'B-U-N-G-A   L-I-L-I',
        image: "/flowers/lili.svg",
        description: "Bunga lili adalah bunga yang cantik dengan kelopak lembut yang sering berwarna putih, merah muda, atau kuning. Bunga ini tumbuh di batang yang panjang dan memiliki aroma harum yang menyenangkan. Bunga lili sering digunakan untuk hiasan karena keindahannya.",
    },
    {
        name: "B-U-N-G-A   M-A-W-A-R",
        image: "/flowers/mawar.svg",
        description: "Bunga mawar adalah bunga yang indah dengan kelopak yang berlapis-lapis dan sering berwarna merah, putih, atau merah muda. Bunga ini terkenal karena keharumannya dan duri kecil di batangnya. Mawar sering diberikan sebagai simbol cinta dan persahabatan.",
    },
    {
        name: "B-U-N-G-A   D-A-I-S-Y",
        image: "/flowers/daisy.svg",
        description: "Bunga daisy adalah bunga kecil yang lucu dengan kelopak berwarna kuning cerah dan bagian tengahnya berwarna coklat tua. Bentuknya sederhana dan sering ditemukan di taman atau padang rumput. Daisy melambangkan keceriaan dan kesederhanaan, sehingga banyak disukai anak-anak. ",
    },
    {
        name: "B-U-N-G-A   R-E-U-L-L-I-A",
        image: "/flowers/reulia.svg",
        description: "Bunga ruellia adalah bunga berwarna cerah yang biasanya berwarna ungu, merah muda, atau biru. Bunga ini tumbuh di semak-semak kecil dan sering mekar sepanjang tahun. Ruellia mudah ditemukan di taman dan sering tumbuh liar, membuat lingkungan tampak lebih indah dengan warnanya yang menarik.",
    },
    {
        name: "B-U-N-G-A   A-N-G-G-R-E-K",
        image: "/flowers/anggrek.svg",
        description: "Bunga anggrek adalah bunga yang cantik dan eksotis dengan berbagai warna, seperti putih, biru, kuning, dan merah muda. Bunga ini tumbuh di batang yang panjang dan sering terlihat anggun serta elegan. Anggrek biasanya tumbuh di tempat yang hangat dan lembap, dan dikenal karena bentuknya yang unik dan indah."
    }
]