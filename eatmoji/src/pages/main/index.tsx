import Head from "next/head";
import Step1 from "@/components/main-steps/step1";
import Step2 from "@/components/main-steps/step2";
import Step3 from "@/components/main-steps/step3";
import { useState } from "react";
import sharedStyle from "@/styles/shared.module.css";

export default function Main() {
  const [step, setStep] = useState(1);
  const [answer1, setAnswer1] = useState<string>("");
  const [answer2, setAnswer2] = useState<string>("");
  const [result, setResult] = useState<string | null>(null);

  const nextStep = () => setStep((prev) => prev + 1);
  const goToStep = (stepNumber: number) => setStep(stepNumber);

  const handleGenerateResult = async () => {
    setStep(3);

    try {
      const response = await fetch("/api/recommend", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ answer2 }),
      });

      if (!response.ok) {
        throw new Error("결과를 생성하는 데 실패했습니다.");
      }

      const data = await response.json();
      setResult(data.result);
      setStep(4);
    } catch (error) {
      console.error("GPT 호출 실패:", error);
      setResult("오류가 발생했어요. 다시 시도해 주세요.");
      setStep(4);
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return <Step1 nextStep={nextStep} setAnswer1={setAnswer1} />;
      case 2:
        return <Step2 answer1={answer1} nextStep={nextStep} goToStep={goToStep} setAnswer2={setAnswer2} generateResult={handleGenerateResult} />;
      case 3:
        return <Step3 result={result} goToStep={goToStep}/>;
      default:
        return null;
    }
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
        {renderStep()}
      </div>
    </>
  );
}