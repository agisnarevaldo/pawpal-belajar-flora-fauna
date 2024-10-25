import GoTo from "@/components/ui/goTo";
import Header from "@/components/header";

export default function Page() {
    return (
        <div className="bg-main-menu min-h-screen bg-cover flex flex-col items-center justify-center">
            <Header backTo="/" />
            <div className="flex gap-4">
                <GoTo href="/menu/flora" icon="mdi:flower" text="Flora"/>
                <GoTo href="/menu/fauna" icon="dashicons:pets" text="Fauna"/>
            </div>
        </div>
    )
}