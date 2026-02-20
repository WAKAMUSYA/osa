// app/members/room/page.tsx
"use client";

import { useState } from "react";
import { leaveMembers } from "../actions";

export default function MembersRoomPage() {
  const [pending, setPending] = useState(false);

  async function logout() {
    setPending(true);
    await leaveMembers();
    window.location.href = "/members";
  }

  return (
    <main style={{ padding: 72, maxWidth: 860, margin: "0 auto" }}>
      <h1>会員ルーム</h1>
      <p>
        ここに「今月のテーマ」「動画リンク」「PDF」「課題」「Zoomリンク」を置いていきます。
      </p>

      <button onClick={logout} disabled={pending} style={{ marginTop: 18 }}>
        {pending ? "処理中…" : "ログアウト"}
      </button>
    </main>
  );
}