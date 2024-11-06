import Quiz from "@/components/layout/quiz";
import Header from "@/components/header";

export default function Page() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-jungle bg-cover">
            <Header backTo="/menu/fauna/" />
            <Quiz />
        </div>
    )
}