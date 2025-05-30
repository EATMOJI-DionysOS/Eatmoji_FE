import Head from "next/head";
import sharedStyle from "@/styles/shared.module.css";

export default function Step2({answer1, nextStep, goToStep, setAnswer2} : {answer1: string, nextStep: () => void, goToStep: (stepNumber: number) => void, setAnswer2: (answer: string) => void}) {
  const handleClick = (answer: string) => {
    setAnswer2(answer);
    nextStep();
  }

  const getEmotionByAnser1 = (answer1: string): string[] => {
    switch (answer1) {
      case "기쁨":
        return ["😀", "😆", "🤣", "😊", "😍", "🙂"];
      case "슬픔":
        return ["😢", "😥", "😢", "😭"];
      case "화남":
        return ["😠", "😡", "😑", "😒", "🙄"];
      case "편안":
        return ["😌", "😐", "😇"];
      case "아픔":
        return ["😷"];
      default:
        return [];
    }
  };

  const emojiList = getEmotionByAnser1(answer1);
  
  return (
    <>
      <Head>
        <title>Eatmoji😆</title>
        <meta property="og:title" content="Eatmoji" />
        <meta property="og:description" content="이모지 기반 감성 메뉴 추천 서비스" />
        <meta property="og:image" content="/favicon_logo.png" />
      </Head>
      <div className={`${sharedStyle.sharedContainer} relative gap-[33px]`}>
        <button
          className="absolute top-[50px] left-[40px] w-[90px] h-[30px] text-gray-800 font-inter text-sm font-medium rounded-xl bg-[#f5eee0] hover:bg-[#e8dfcf] transition-all duration-200 shadow-[0_1px_4px_rgba(0,0,0,0.1)] hover:shadow-[0_2px_8px_rgba(0,0,0,0.15)] focus:outline-none focus:ring-2 focus:ring-[#d1c8b0]"
          onClick={() => goToStep(1)}
        >
          이전으로
        </button>
        <h1 className="text-2xl font-bold text-gray-800 text-center w-[250px]">감정에 어울리는 음식을 추천해줄게!</h1>
        <div className="flex flex-col items-center gap-[20px]">
            {emojiList.map((emoji) => (
            <button
                key={emoji}
                className="w-[280px] h-[60px] px-4 py-2 text-gray-800 font-inter text-[28px] font-semibold rounded-2xl bg-[#f5eee0] hover:bg-[#e8dfcf] transition-all duration-200 shadow-[0_2px_6px_rgba(0,0,0,0.1)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.2)] focus:outline-none focus:ring-2 focus:ring-[#d1c8b0]"
                onClick={() => handleClick(emoji)}
            >
                {emoji}
            </button>
            ))}
        </div>
      </div>
    </>
  );
}