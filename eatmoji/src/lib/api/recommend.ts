const BASE_URL = process.env.NEXT_PUBLIC_URL_SERVER;
import { RecommendResponse } from "@/types/recommend";

export const recommendByEmoji = async (
  emoji: string
): Promise<RecommendResponse> => {
  const response = await fetch(`${BASE_URL}/api/recommend/emoji`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ emoji }),
  });

  if (!response.ok) {
    throw new Error("추천 결과를 불러오지 못했습니다.");
  }

  return response.json();
};
