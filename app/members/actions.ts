// app/members/actions.ts
"use server";

import { cookies } from "next/headers";

function safeEqual(a: string, b: string) {
  if (a.length !== b.length) return false;
  let out = 0;
  for (let i = 0; i < a.length; i++) out |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return out === 0;
}

export async function enterMembers(formData: FormData) {
  const input = String(formData.get("password") ?? "").trim();
  const expected = process.env.OSA_MEMBER_PASSWORD ?? "";

  if (!expected) return { ok: false, message: "サーバー側のパスワード設定が未完了です。" };
  if (!input) return { ok: false, message: "パスワードを入力してください。" };
  if (!safeEqual(input, expected)) return { ok: false, message: "パスワードが違います。" };

  // ✅ Next.js 16: cookies() を await してから set する
  const cookieStore = await cookies();
  cookieStore.set("osa_member", "1", {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 30, // 30日
  });

  return { ok: true };
}

export async function leaveMembers() {
  const cookieStore = await cookies();
  cookieStore.set("osa_member", "", {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 0,
  });

  return { ok: true };
}