import Head from "next/head";
import sharedStyle from "@/styles/shared.module.css";
import style from "./index.module.css";
import { useRouter } from "next/router";

export default function Profile() {
    const router = useRouter();

    return (
        <>
            <Head>
                <title>Eatmoji😆</title>
                <meta property="og:title" content="Eatmoji" />
                <meta property="og:description" content="이모지 기반 감성 메뉴 추천 서비스" />
                <meta property="og:image" content="/favicon_logo.png" />
            </Head>

            <div className={`${sharedStyle.sharedContainer} ${style.container}`}>
                <div className={style.header}>프로필 관리</div>

                <div className={style.profileIconBox}>
                    <div className={style.iconWrapper}>
                        <div className={style.profileIcon}>🍽️</div>
                    </div>
                        <div className={style.label}>닉네임</div>
                        <div className={style.label}>nickname@gmail.com</div>
                </div>

                <hr className={style.separator} />

                <div className={style.profileTags}>
                    <div className={style.tagbox}>
                        <span className={style.tagLabel}>카테고리</span>
                        <div className={style.tagGroup}>
                            <span className={style.tag}>한식</span>
                        </div>
                    </div>
                    <div className={style.tagbox}>
                        <span className={style.tagLabel}>맛</span>
                        <div className={style.tagGroup}>
                            <span className={style.tag}>단 맛</span>
                        </div>
                    </div>
                    <div className={style.tagbox}>
                        <span className={style.tagLabel}>식이요법</span>
                        <div className={style.tagGroup}>
                            <span className={style.tag}>저염식</span>
                            <span className={style.tag}>저당식</span>
                            <span className={style.tag}>저지방</span>
                        </div>
                    </div>
                    <div className={style.tagbox}>
                        <span className={style.tagLabel}>알레르기</span>
                        <div className={style.tagGroup}>
                            <span className={style.tag}>땅콩</span>
                        </div>
                    </div>
                </div>

                <button className={style.retryButton} onClick={() => router.push('/mypage/profile/personalInfo')}>다시 입력하기</button>

                <hr className={style.separator} />
                <button className={style.saveButton}>저장</button>
            </div>
        </>
    );
}
