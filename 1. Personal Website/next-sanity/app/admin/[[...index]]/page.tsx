"use client";
/*
  Sanity는 클라이언트 측 에서 렌더링됨,
  그래서 파일의 맨 위에 클라이언트에서 사용한다고 작성해야함.
  Next.js에 신호를 보내는 방법. ("SSR을 시도하지마세요!"라는 의미 )
 */

import React from "react";
import { NextStudio } from "next-sanity/studio";
import config from "@/sanity.config";

export default function AdminPage() {
  return <NextStudio config={config} />;
}
