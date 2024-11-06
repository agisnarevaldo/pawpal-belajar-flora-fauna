import Image from "next/image";

export default function Quiz() {
    return (
        <div className="flex flex-col gap-8">
            <div className="border-4 border-black p-1 rounded-2xl max-w-screen-sm mx-auto">
                <div className="p-2 rounded-xl bg-light/80 text-black">
                    <div className="-translate-y-1/2">
                        <div className="bg-light w-max mx-auto p-2 rounded-xl border-2 border-black">
                            <h1 className="text-2xl font-semibold text-center">Siapakah Aku?</h1>
                        </div>
                        <p className="text-center font-semibold translate-y-1/2">Aku sering di sebut “rajsafsadfas asfd asfd asd asd asdfas as asfea sdf asa hutan”, dan aku mempunyai
                            rambut di sekeliling wajahku.</p>
                    </div>
                </div>
            </div>

            <div className="flex justify-between">
                <div
                    // key={``}
                    className="border-4 p-1 border-black rounded-[45px] cursor-pointer flex items-center justify-center"
                    // onClick={() => setSelectedItem(index)}
                >
                <div
                        className="h-[140px] w-[140px] bg-light/80 hover:bg-light/50 flex items-center justify-center rounded-[36px]">
                        <Image
                            src={`/animals/singa.svg`}
                            alt={`singa`}
                            width={100}
                            height={100}
                        />
                    </div>
                </div>
                <div
                    // key={``}
                    className="border-4 p-1 border-black rounded-[45px] cursor-pointer flex items-center justify-center"
                    // onClick={() => setSelectedItem(index)}
                >
                    <div
                        className="h-[140px] w-[140px] bg-light/80 hover:bg-light/50 flex items-center justify-center rounded-[36px]">
                        <Image
                            src={`/animals/singa.svg`}
                            alt={`singa`}
                            width={100}
                            height={100}
                        />
                    </div>
                </div>
                <div
                    // key={``}
                    className="border-4 p-1 border-black rounded-[45px] cursor-pointer flex items-center justify-center"
                    // onClick={() => setSelectedItem(index)}
                >
                    <div
                        className="h-[140px] w-[140px] bg-light/80 hover:bg-light/50 flex items-center justify-center rounded-[36px]">
                        <Image
                            src={`/animals/singa.svg`}
                            alt={`singa`}
                            width={100}
                            height={100}
                        />
                    </div>
                </div>
                <div
                    // key={``}
                    className="border-4 p-1 border-black rounded-[45px] cursor-pointer flex items-center justify-center"
                    // onClick={() => setSelectedItem(index)}
                >
                    <div
                        className="h-[140px] w-[140px] bg-light/80 hover:bg-light/50 flex items-center justify-center rounded-[36px]">
                        <Image
                            src={`/animals/singa.svg`}
                            alt={`singa`}
                            width={100}
                            height={100}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}