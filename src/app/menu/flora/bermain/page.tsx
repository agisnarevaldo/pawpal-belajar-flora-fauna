import Quiz from "@/components/layout/quiz";
import Header from "@/components/header";

export default function Page() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-jungle bg-cover">
            <Header backTo="/menu/flora/" />
            <Quiz
                questions={flora}
            />
        </div>
    )
}

const flora = [
    {
        question: 'Aku selalu menghadap ke arah matahari, bunga ku besar dan tinggi.',
        options: [
            {name: 'Matahari', isCorrect: true, image: '/flowers/matahari.svg'},
            {name: 'Daisy', isCorrect: false, image: '/flowers/daisy.svg'},
            {name: 'Anggrek', isCorrect: false, image: '/flowers/anggrek.svg'},
            {name: 'Reulia', isCorrect: false, image: '/flowers/reulia.svg'},
        ]
    },
    {
        question: 'Aku berwarna kuning, bisanya aku tumbuh di semak semak, dan aku berukuran kecil.',
        options: [
            {name: 'Matahari', isCorrect: false, image: '/flowers/matahari.svg'},
            {name: 'Daisy', isCorrect: true, image: '/flowers/daisy.svg'},
            {name: 'Anggrek', isCorrect: false, image: '/flowers/anggrek.svg'},
            {name: 'Reulia', isCorrect: false, image: '/flowers/reulia.svg'},
        ]
    },
    {
        question: 'Aku berwarna ungu, bentuk kelopak ku seperti lonceng dan aku berkukuran kecil.',
        options: [
            {name: 'Matahari', isCorrect: false, image: '/flowers/matahari.svg'},
            {name: 'Daisy', isCorrect: false, image: '/flowers/daisy.svg'},
            {name: 'Anggrek', isCorrect: false, image: '/flowers/anggrek.svg'},
            {name: 'Reulia', isCorrect: true, image: '/flowers/reulia.svg'},
        ]
    },
    {
        question: 'Warna ku putih, aku mempunyai bau yang harum, aku berkukuran kecil.',
        options: [
            {name: 'Matahari', isCorrect: false, image: '/flowers/matahari.svg'},
            {name: 'Lili', isCorrect: true, image: '/flowers/lili.svg'},
            {name: 'Anggrek', isCorrect: false, image: '/flowers/anggrek.svg'},
            {name: 'Reulia', isCorrect: false, image: '/flowers/reulia.svg'},
        ]
    },
    {
        question: 'Aku biasanya berada di pohon atau batu, bentuk ku unik dan aku biasanya dijadikan hisan.',
        options: [
            {name: 'Matahari', isCorrect: false, image: '/flowers/matahari.svg'},
            {name: 'Lili', isCorrect: false, image: '/flowers/lili.svg'},
            {name: 'Anggrek', isCorrect: true, image: '/flowers/anggrek.svg'},
            {name: 'Reulia', isCorrect: false, image: '/flowers/reulia.svg'},
        ]
    },
    {
        question: 'Aku berawrna merah, tangkai ku berduri, bisanya aku ada di halaman rumah.',
        options: [
            {name: 'Matahari', isCorrect: false, image: '/flowers/matahari.svg'},
            {name: 'Lili', isCorrect: false, image: '/flowers/lili.svg'},
            {name: 'Anggrek', isCorrect: true, image: '/flowers/anggrek.svg'},
            {name: 'Mawar', isCorrect: false, image: '/flowers/mawar.svg'},
        ]
    },
]