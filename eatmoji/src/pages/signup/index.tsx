import Head from "next/head";
import sharedStyle from "@/styles/shared.module.css";

export default function Main() {
  
  return (
    <>
      <Head>
        <title>Eatmoji😆</title>
        <meta property="og:title" content="Eatmoji" />
        <meta property="og:description" content="이모지 기반 감성 메뉴 추천 서비스" />
        <meta property="og:image" content="/favicon_logo.png" />
      </Head>
      <div className={`${sharedStyle.sharedContainer} gap-[39px]`}>
        <img className="w-[180px] h-[145px] shrink-0" src="/favicon_logo.png" alt="Logo" />
        회원가입 페이지입니다.
      </div>
    </>
  );
}