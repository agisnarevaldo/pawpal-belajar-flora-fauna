import Header from "@/components/header";
import GoTo from "@/components/ui/goTo";

export default function Page() {
    return (
        <div className="bg-flora-menu min-h-screen bg-cover flex flex-col items-center justify-center">
            <Header backTo="/menu" />
            <div className="flex gap-4">
                <GoTo href="/menu/flora/bernyanyi/" icon="ph:music-notes-fill" text="Bernyanyi"/>
                <GoTo href="/menu/flora/belajar" icon="f7:book" text="Belajar"/>
                <GoTo href="/menu/flora/bermain" icon="fluent:play-32-filled" text="Bermain"/>
            </div>
        </div>
    )
}