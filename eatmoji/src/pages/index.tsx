import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Eatmoji😆</title>
        <meta property="og:title" content="Eatmoji" />
        <meta property="og:description" content="이모지 기반 감성 메뉴 추천 서비스" />
        <meta property="og:image" content="/favicon_logo.png" />
      </Head>
      <div>
        <h1>Index Page</h1>
        <p>Welcome to the index page of our application!</p>
      </div>
    </>
  );
}