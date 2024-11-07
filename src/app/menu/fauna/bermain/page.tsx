import Quiz from "@/components/layout/quiz";
import Header from "@/components/header";

export default function Page() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-jungle bg-cover">
            <Header backTo="/menu/fauna/" />
            <Quiz
                questions={fauna}
            />
        </div>
    )
}

const fauna = [
    {
        question: 'Aku sering di sebut “raja hutan”, dan aku mempunyai rambut di sekeliling wajahku.',
        options: [
            {name: 'Jerapah', isCorrect: false, image: '/animals/jerapah.svg'},
            {name: 'Singa', isCorrect: true, image: '/animals/singa.svg'},
            {name: 'Monyet', isCorrect: false, image: '/animals/monyet.svg'},
            {name: 'Harimau', isCorrect: false, image: '/animals/harimau.svg'},
        ]
    },
    {
        question: 'Aku pemakan daging, buluku berwarna oren dan memiliki garis-garis hitam di tubuhku',
        options: [
            {name: 'Jerapah', isCorrect: false, image: '/animals/jerapah.svg'},
            {name: 'Harimau', isCorrect: true, image: '/animals/harimau.svg'},
            {name: 'Monyet', isCorrect: false, image: '/animals/monyet.svg'},
            {name: 'Badak', isCorrect: false, image: '/animals/badak.svg'},
        ]
    },
    {
        question: 'Aku mempunyai leher yang panjang, aku juga suka memakan rumput dan daun-daunan',
        options: [
            {name: 'Jerapah', isCorrect: true, image: '/animals/jerapah.svg'},
            {name: 'Singa', isCorrect: false, image: '/animals/singa.svg'},
            {name: 'Badak', isCorrect: false, image: '/animals/badak.svg'},
            {name: 'Harimau', isCorrect: false, image: '/animals/harimau.svg'},
        ]
    },
    {
        question: 'Aku bisa hidup diatas pohon dan bergelantungan, makanan favoritku adalah pisang',
        options: [
            {name: 'Jerapah', isCorrect: false, image: '/animals/jerapah.svg'},
            {name: 'Monyet', isCorrect: true, image: '/animals/monyet.svg'},
            {name: 'Badak', isCorrect: false, image: '/animals/badak.svg'},
            {name: 'Harimau', isCorrect: false, image: '/animals/harimau.svg'},
        ]
    },
    {
        question: 'Warna tubuhku unik berbelang hitam-putih, aku berkerabat dekat dengan kuda',
        options: [
            {name: 'Jerapah', isCorrect: false, image: '/animals/jerapah.svg'},
            {name: 'Monyet', isCorrect: false, image: '/animals/monyet.svg'},
            {name: 'Zebra', isCorrect: true, image: '/animals/zebra.svg'},
            {name: 'Harimau', isCorrect: false, image: '/animals/harimau.svg'},
        ]
    },
]