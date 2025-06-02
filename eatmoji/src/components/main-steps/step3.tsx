/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import sharedStyle from "@/styles/shared.module.css";
import style from "./step3.module.css";
import { useState } from "react";
import { addressOptions, districts } from "@/dummy/dummyRegion";

export default function Step3({result, goToStep} : {result: string | null, goToStep: (stepNumber: number) => void}) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const handleCityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCity(e.target.value);
    setSelectedDistrict("");
  }

  const districtOptions = selectedCity ? districts[selectedCity] || [] : [];

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
          <button className={style.menulinkButton} onClick={openModal}>
            먹으러가기
          </button>
          {isOpen && (
            <div className={style.modalOverlay} onClick={closeModal}>
              <div className={style.modalContent} onClick={(e) => e.stopPropagation()}>
                <h1 className={style.modalTitle}>지역을 선택해주세요</h1>
                <label className={style.modalLabel}>
                  <span>시: </span>
                  <select 
                    className={style.selectBox}
                    value={selectedCity} 
                    onChange={handleCityChange}
                  >
                    <option value="">--선택--</option>
                    {addressOptions.map((city) => (
                      <option key={city} value={city}>
                        {city}
                      </option>
                    ))}
                  </select>
                </label>

                <label className={style.modalLabel}>
                  <span>구: </span>
                  <select
                    className={style.selectBox}
                    value={selectedDistrict}
                    onChange={(e) => setSelectedDistrict(e.target.value)}
                    disabled={!selectedCity}
                  >
                    <option value="">--선택--</option>
                    {districtOptions.map((district) => (
                        <option key={district} value={district}>
                          {district}
                        </option>
                      ))}
                  </select>
                </label>
                <div className={style.modalButtons}>
                  <button className={`${style.modalButton} ${style.cancel}`} onClick={closeModal}>닫기</button>
                  <button className={style.modalButton} onClick={goToEat}>보러가기</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
