import Head from "next/head";

export default function Main() {
  
  return (
    <>
      <Head>
        <title>Eatmoji😆</title>
        <meta property="og:title" content="Eatmoji" />
        <meta property="og:description" content="이모지 기반 감성 메뉴 추천 서비스" />
        <meta property="og:image" content="/favicon_logo.png" />
      </Head>
      <div className="flex flex-col justify-center items-center gap-[39px] w-[411px] h-[847px] pt-[100px] px-[65px] flex-shrink-0 bg-[#FFFFFF]">
        <img className="w-[180px] h-[145px] shrink-0" src="/favicon_logo.png" alt="Logo" />
        로그인 페이지입니다.
      </div>
    </>
  );
}