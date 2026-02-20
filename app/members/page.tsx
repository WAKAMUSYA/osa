// app/members/page.tsx
"use client";

import { useState } from "react";
import styles from "./members.module.css";
import { enterMembers } from "./actions";

export default function MembersGatePage() {
  const [msg, setMsg] = useState<string | null>(null);
  const [pending, setPending] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setMsg(null);
    setPending(true);

    const formData = new FormData(e.currentTarget);
    const res = await enterMembers(formData);

    setPending(false);

    if (res.ok) {
      window.location.href = "/members/room";
      return;
    }
    setMsg(res.message ?? "エラーが発生しました。");
  }

  return (
    <main className={styles.page}>
      <article className={styles.container}>
        <header className={styles.header}>
          <p className={styles.kicker}>MEMBERS</p>
          <h1 className={styles.title}>会員ページ</h1>
          <p className={styles.subtitle}>パスワードを入力してください。</p>
        </header>

        <form className={styles.form} onSubmit={onSubmit}>
          <label className={styles.label}>
            パスワード
            <input
              className={styles.input}
              type="password"
              name="password"
              placeholder="Password"
              required
            />
          </label>

          <button className={styles.button} type="submit" disabled={pending}>
            {pending ? "確認中…" : "入室"}
          </button>

          {msg && <p className={styles.msg}>{msg}</p>}

          <p className={styles.note}>
            ※パスワードはサーバー側で判定し、Cookieで入室を管理しています（DB不要）。
          </p>
        </form>
      </article>
    </main>
  );
}