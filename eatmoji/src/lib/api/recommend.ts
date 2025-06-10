import { RecommendResponse } from "@/types/recommend";

export const recommendByEmoji = async (
  emoji: string,
  accessToken: string | null
): Promise<RecommendResponse> => {
  const BASE_URL = process.env.NEXT_PUBLIC_URL_SERVER;
  const url = accessToken
    ? `${BASE_URL}/api/recommend/emoji/login`
    : `${BASE_URL}/api/recommend/emoji`;

  const headers: HeadersInit = {
    "Content-Type": "application/json",
  };

  if (accessToken) {
    headers["Authorization"] = `Bearer ${accessToken}`;
  }

  const response = await fetch(url, {
    method: "POST",
    headers,
    body: JSON.stringify({ emoji }),
  });

  if (!response.ok) {
    throw new Error("추천 결과를 불러오지 못했습니다.");
  }

  return response.json();
};
