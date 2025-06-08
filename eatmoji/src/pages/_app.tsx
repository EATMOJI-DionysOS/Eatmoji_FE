import Layout from "@/components/global-layout";
import { useAuthStore } from "@/store/auth";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const  { isAuthenticated } = useAuthStore();

  const protectedPaths = ["/todaymenu", "/mypage"];

  const isProtected = protectedPaths.some((path) => 
    router.pathname === path || router.pathname.startsWith(path + "/")
  );

  const [isAuthChecked, setIsAuthChecked] = useState(false);

  useEffect(() => {
    if (isProtected && !isAuthenticated) {
      router.replace("/auth-required?from=" + router.pathname);
    } else {
      setIsAuthChecked(true);
    }
  }, [isProtected, isAuthenticated, router]);

  if (isProtected && !isAuthenticated && !isAuthChecked) {
    return null;
  }

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
