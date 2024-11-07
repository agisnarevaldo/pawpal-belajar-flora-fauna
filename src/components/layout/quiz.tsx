"use client";

import Image from "next/image";
import {useEffect, useRef, useState} from "react";

interface AnswerOption {
    name: string;
    image: string;
    isCorrect: boolean;
}

interface Questions {
    question: string;
    options: AnswerOption[];
}

export default function Quiz({questions}: { questions: Questions[] }) {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showPopup, setShowPopup] = useState(false);
    const [feedback, setFeedback] = useState<string | null>(null);
    const [showFinalPopup, setShowFinalPopup] = useState(false);
    const audioRef = useRef<HTMLAudioElement>(null);

    useEffect(() => {
        const utterance = new SpeechSynthesisUtterance(questions[currentQuestion].question);
        utterance.lang = "id-ID";
        window.speechSynthesis.speak(utterance);
    }, [currentQuestion]);

    const handleAnswerOptionClick = (isCorrect: boolean) => {
        if (isCorrect) {
            setScore(score + 20);
            setFeedback("Jawaban Anda Benar");
            setShowPopup(true);
            if (audioRef.current) {
                audioRef.current.play();
            }
        } else {
            setFeedback(null);
        }

        const nextQuestion = currentQuestion + 1;
        setTimeout(() => {
            setShowPopup(false);
            if (nextQuestion < questions.length) {
                setCurrentQuestion(nextQuestion);
                setFeedback(null);
            } else {
                setShowFinalPopup(true);
            }
        }, 3000);
    }
    const handleRestart = () => {
        setScore(0);
        setCurrentQuestion(0);
        setShowFinalPopup(false);
    };
    return (
        <div className="flex flex-col gap-8">
            <audio ref={audioRef} src="/audio/yee.mp3"/>
            {showPopup && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-light p-8 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-bold text-green-500">{feedback}</h2>
                    </div>
                </div>
            )}

            {showFinalPopup && (
                <div className="fixed z-50 inset-0 flex items-center justify-center bg-black bg-opacity-60">
                    <div className="bg-light p-8 rounded-lg shadow-lg text-center">
                        <Image src="/party.gif" alt="paty" width={400} height={400}/>
                        <h2 className="text-2xl font-bold text-black mb-4">Skor Anda: {score}</h2>
                        <div className="flex justify-center">
                            <button onClick={handleRestart} className=" m-2">
                                <svg
                                    className="fill-black hover:fill-slate-900"
                                    //   fill="#000000"
                                    width="42px"
                                    height="42px"
                                    viewBox="0 0 1920 1920"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M960 0v213.333c411.627 0 746.667 334.934 746.667 746.667S1371.627 1706.667 960 1706.667 213.333 1371.733 213.333 960c0-197.013 78.4-382.507 213.334-520.747v254.08H640V106.667H53.333V320h191.04C88.64 494.08 0 720.96 0 960c0 529.28 430.613 960 960 960s960-430.72 960-960S1489.387 0 960 0"
                                        fill-rule="evenodd"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <div className="border-4 border-black p-1 rounded-3xl max-w-screen-sm mx-auto">
                <div className="p-4 rounded-2xl bg-light/80 text-black">
                    {/*<div className="bg-light w-max mx-auto p-2 rounded-xl border-2 border-black ">*/}
                        <h1 className="text-2xl font-semibold text-center mb-4 underline">Siapakah Aku?</h1>
                    {/*</div>*/}
                    <p className="text-center font-semibold">{questions[currentQuestion].question}</p>
                </div>
            </div>

            <div className="flex justify-between">
                {questions[currentQuestion].options.map((option, index) => (
                    <button onClick={() => handleAnswerOptionClick(option.isCorrect)} key={index}
                            className="border-4 p-1 border-black rounded-[45px] cursor-pointer flex items-center justify-center">
                        <div
                            className="h-[140px] w-[140px] bg-light/80 hover:bg-light/50 flex items-center justify-center rounded-[36px]">
                            <Image
                                src={option.image}
                                alt={option.name}
                                width={100}
                                height={100}
                            />
                        </div>
                    </button>
                ))}
            </div>
        </div>
    )
}