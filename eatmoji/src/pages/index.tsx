import Head from "next/head";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  
  return (
    <>
      <Head>
        <title>Eatmoji😆</title>
        <meta property="og:title" content="Eatmoji" />
        <meta property="og:description" content="이모지 기반 감성 메뉴 추천 서비스" />
        <meta property="og:image" content="/favicon_logo.png" />
      </Head>
      <div className="flex flex-col justify-center items-center gap-[39px] w-[411px] h-[823px] pt-[100px] px-[65px] flex-shrink-0 bg-[#FFFFFF]">
        <img className="w-[280px] h-[225px] shrink-0" src="/favicon_logo.png" alt="Logo" />
        <button
          type="button"
          className="flex flex-col justify-center items-center w-[249px] h-[95px] py-[10px] rounded-[30px] bg-[#D8ED8F]"
          onClick={() => router.push('/main')}
        >
          <p className="text-black text-center font-inter text-[18px] font-normal leading-none">로그인없이</p>
          <div className="text-black text-center font-inter text-[44px] font-normal leading-none">시작하기</div>  
        </button>
        <button
          type="button"
          className="flex flex-col justify-center items-center w-[126px] h-[22px] py-[10px]"
          onClick={() => router.push('/login')}
        >
          <p className="text-black text-center font-inter text-[18px] font-normal leading-none underline">로그인/회원가입</p>
        </button>
      </div>
    </>
  );
}