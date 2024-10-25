import Bernyanyi from "@/components/layout/bernyanyi";

export default function Page() {
    return (
        <>
            <Bernyanyi
                background="bg-[url('/bg/bgBernyanyi2.png')]"
                video="https://www.youtube.com/embed/Mv4lv7eKF-E?si=TZ7Vm73XcnuljvEf"
                backTo="/menu/flora"
            />
        </>
    )
}