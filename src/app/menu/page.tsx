import GoTo from "@/components/ui/goTo";
import Image from "next/image";
import Setting from "@/components/setting";

export default function Page() {
    return (
        <div className="bg-main-menu min-h-screen bg-cover flex flex-col items-center justify-center">
            <div className="flex w-full fixed top-0 justify-between py-5 px-5">
                <Image src="/logo-sm-white.svg" alt="logo" width={200} height={200}/>
                <Setting/>
            </div>
            <div className="flex gap-4">
                <GoTo href="/menu/flora" icon="mdi:flower" text="Flora"/>
                <GoTo href="/menu/fauna" icon="dashicons:pets" text="Fauna"/>
            </div>
        </div>
    )
}