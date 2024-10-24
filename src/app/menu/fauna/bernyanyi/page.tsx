import Header from "@/components/header";

export default function Page() {
    return (
        <div className="bg-bernyanyi min-h-screen bg-cover flex flex-col items-center justify-center gap-8">
            <Header backTo="/menu/fauna/" />
            <div className="p-3 outline outline-4 outline-[#1B1B1B] rounded-xl">
                <iframe
                    className="rounded-xl"
                    width="720"
                    height="405"
                    src="https://www.youtube.com/embed/Mv4lv7eKF-E?si=TZ7Vm73XcnuljvEf"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>
                </iframe>
            </div>
        </div>
    )
}