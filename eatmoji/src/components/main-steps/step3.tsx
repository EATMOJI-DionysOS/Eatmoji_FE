import Head from "next/head";
import sharedStyle from "@/styles/shared.module.css";

export default function Step3({answer2, generateResult, goToStep} : {answer2: string, generateResult: () => void, goToStep: (stepNumber: number) => void}) {
  
  return (
    <>
      <Head>
        <title>Eatmoji😆</title>
        <meta property="og:title" content="Eatmoji" />
        <meta property="og:description" content="이모지 기반 감성 메뉴 추천 서비스" />
        <meta property="og:image" content="/favicon_logo.png" />
      </Head>
      <div className={`${sharedStyle.sharedContainer} relative gap-[39px]`}>
        <button
          className="absolute top-[50px] left-[40px] w-[90px] h-[30px] text-gray-800 font-inter text-sm font-medium rounded-xl bg-[#f5eee0] hover:bg-[#e8dfcf] transition-all duration-200 shadow-[0_1px_4px_rgba(0,0,0,0.1)] hover:shadow-[0_2px_8px_rgba(0,0,0,0.15)] focus:outline-none focus:ring-2 focus:ring-[#d1c8b0]"
          onClick={() => goToStep(1)}
        >
          처음으로
        </button>
        <div className="flex flex-col items-center gap-[20px]">
          <h1 className="text-2xl font-bold text-gray-800 text-center w-[250px]">Menu</h1>
          <img className="w-[180px] h-[145px] shrink-0" src="/favicon_logo.png" alt="Logo" />
        </div>
        <p className="text-sm font-normal text-gray-800 text-center w-[270px]">따뜻한 국물은 언제나 위로가 되지. 미소 된장국은 그 자체로도 건강하고, 가볍게 기분 전환하기에 딱이야.</p>
      </div>
    </>
  );
}