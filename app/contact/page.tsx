import type { Metadata } from "next";
import styles from "./contact.module.css";

export const metadata: Metadata = {
  title: "相談する | OSA",
  description: "OSAの相談・問い合わせページ。無料の文章/動画を見た上で、オンラインで話す入口です。",
};

export default function ContactPage() {
  return (
    <main className={styles.page}>
      <article className={styles.container}>
        <header className={styles.header}>
          <p className={styles.kicker}>CONTACT</p>
          <h1 className={styles.title}>相談する</h1>
          <p className={styles.subtitle}>
            まずは短くで大丈夫です。現状と目的を教えてください。
          </p>
        </header>

        <section className={styles.section}>
          <div className={styles.box}>
            <h2 className={styles.h2}>相談の流れ</h2>
            <ol className={styles.steps}>
              <li>文章・動画でOSAの考え方を確認</li>
              <li>相談フォーム送信</li>
              <li>オンラインで短く話す（15〜30分）</li>
              <li>必要なら、会員ページで学習と実践へ</li>
            </ol>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.h2}>相談フォーム</h2>

          {/* まずはVercel標準の「静的フォーム」想定のHTML。
              ここは後でフォーム送信先（Formspree等）やAPI Routeに置き換え可能。 */}
          <form className={styles.form} method="post">
            <label className={styles.label}>
              氏名（またはニックネーム）
              <input className={styles.input} name="name" required />
            </label>

            <label className={styles.label}>
              競技 / 学年（例：野球・高2）
              <input className={styles.input} name="sport" required />
            </label>

            <label className={styles.label}>
              今困っていること（短くでOK）
              <textarea className={styles.textarea} name="problem" rows={5} required />
            </label>

            <label className={styles.label}>
              目標（例：県大会ベスト8、球速UP、出力UPなど）
              <input className={styles.input} name="goal" required />
            </label>

            <label className={styles.label}>
              連絡先（メール or LINE名など）
              <input className={styles.input} name="contact" required />
            </label>

            <div className={styles.row}>
              <button className={styles.button} type="submit" disabled>
                送信（※送信先は後で接続します）
              </button>
              <a className={styles.link} href="/about">
                Aboutに戻る
              </a>
            </div>

            <p className={styles.note}>
              ※今はフォームの外観だけ先に作っています。送信先（LINE/メール/フォームサービス）は次のステップで接続します。
            </p>
          </form>
        </section>
      </article>
    </main>
  );
}