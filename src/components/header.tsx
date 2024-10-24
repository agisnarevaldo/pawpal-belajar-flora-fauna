import Setting from "@/components/setting";
import Back from "@/components/ui/back";

export default function Header({backTo}: {backTo: string}) {
    return (
        <div className="flex w-full fixed top-0 justify-between py-5 px-5">
            <Back href={backTo} classname="text-[#0000FE]" />
            <Setting/>
        </div>
    )
}