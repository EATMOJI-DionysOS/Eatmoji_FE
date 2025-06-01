/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import sharedStyle from "@/styles/shared.module.css";
import style from "./step3.module.css";

export default function Step3({result, goToStep} : {result: string | null, goToStep: (stepNumber: number) => void}) {

  if (result === null) {
    // 로딩 중일 때 보여줄 화면
    return (
      <div className={`${sharedStyle.sharedContainer} ${style.loadingContainer}`}>
        <div className={style.loader}></div>
        <p className={style.description}>추천 결과를 생성 중입니다... 🍽️</p>
      </div>
    );
  }
  
  return (
    <>
      <Head>
        <title>Eatmoji😆</title>
        <meta property="og:title" content="Eatmoji" />
        <meta property="og:description" content="이모지 기반 감성 메뉴 추천 서비스" />
        <meta property="og:image" content="/favicon_logo.png" />
      </Head>
      <div className={`${sharedStyle.sharedContainer} ${style.container}`}>
        <button
          className={style.backButton}
          onClick={() => goToStep(1)}
        >
          처음으로
        </button>
        <div className={style.content}>
          <h1 className={style.title}>{result}</h1>
          <img className={style.image} src="/favicon_logo.png" alt="Logo" />
        </div>
        <p className={style.description}>따뜻한 국물은 언제나 위로가 되지. 미소 된장국은 그 자체로도 건강하고, 가볍게 기분 전환하기에 딱이야.</p>
        <div className={style.buttonContainer}>
          <button className={style.menulinkButton}>
            만들러가기
          </button>
          <button className={style.menulinkButton}>
            먹으러가기
          </button>
        </div>
      </div>
    </>
  );
}
