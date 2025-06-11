import { useTokenStore } from "@/store/tokenStore";
import { Preference, UserProfileData } from "@/types/profile";

const BASE_URL = process.env.NEXT_PUBLIC_URL_SERVER;

export async function updateProfileRequest(data: Preference) {
  const res = await fetch(`${BASE_URL}/user/profile`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${useTokenStore.getState().accessToken}`,
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    let message = "프로필 업데이트에 실패했습니다.";

    try {
      const errorData = await res.json();
      message = errorData.message || message;
    } catch (e) {
      console.error("에러 발생:", e);
      const errorText = await res.text();
      console.warn("JSON 파싱 실패, 응답 텍스트:", errorText);
      message = errorText || message;
    }

    throw new Error(message);
  }

  const contentType = res.headers.get("content-type") || "";
  if (contentType.includes("application/json")) {
    return res.json();
  } else {
    return res.text();
  }
}

export async function getProfile(): Promise<UserProfileData> {
  const res = await fetch(`${BASE_URL}/user/profile`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${useTokenStore.getState().accessToken}`,
    },
  });

  if (!res.ok) {
    let message = "프로필 불러오기에 실패했습니다.";

    try {
      const errorData = await res.json();
      message = errorData.message || message;
    } catch (e) {
      const errorText = await res.text();
      console.error("응답 파싱 실패:", e, "응답 텍스트:", errorText);
      message = errorText || message;
    }

    throw new Error(message);
  }

  return res.json(); // 👈 UserProfileData 반환
}