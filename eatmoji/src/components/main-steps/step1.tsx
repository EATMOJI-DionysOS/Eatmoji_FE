import Head from "next/head";
import sharedStyle from "@/styles/shared.module.css";

export default function Step1({nextStep, setAnswer1} : {nextStep: () => void, setAnswer1: (answer: string) => void}) {
    const handleClick = (answer: string) => {
        setAnswer1(answer);
        nextStep();
    };
  
  return (
    <>
      <Head>
        <title>Eatmoji😆</title>
        <meta property="og:title" content="Eatmoji" />
        <meta property="og:description" content="이모지 기반 감성 메뉴 추천 서비스" />
        <meta property="og:image" content="/favicon_logo.png" />
      </Head>
      <div className={`${sharedStyle.sharedContainer} gap-[39px]`}>
        <h1 className="text-2xl font-bold text-gray-800">오늘 하루, 어땠어?</h1>
        <div className="flex flex-col items-center gap-[20px]">
            {["기쁨", "슬픔", "화남", "편안", "아픔"].map((emotion) => (
            <button
                key={emotion}
                className="w-[280px] h-[60px] px-4 py-2 text-gray-800 font-inter text-[20px] font-semibold rounded-2xl bg-[#f5eee0] hover:bg-[#e8dfcf] transition-all duration-200 shadow-[0_2px_6px_rgba(0,0,0,0.1)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.2)] focus:outline-none focus:ring-2 focus:ring-[#d1c8b0]"
                onClick={() => handleClick(emotion)}
            >
                {emotion}
            </button>
            ))}
        </div>
      </div>
    </>
  );
}