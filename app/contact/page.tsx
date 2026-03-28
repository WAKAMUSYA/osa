import type { Metadata } from "next";
import styles from "./contact.module.css";

export const metadata: Metadata = {
  title: "相談する | OSA",
  description:
    "OSAの相談・問い合わせページ。無料コンテンツを読んだ上で、必要な方が個別に相談できる入口です。",
};

export default function ContactPage() {
  return (
    <main className={styles.page}>
      <article className={styles.container}>
        <header className={styles.header}>
          <p className={styles.kicker}>CONTACT</p>
          <h1 className={styles.title}>相談する</h1>
          <p className={styles.subtitle}>
            一人で進めることもできます。
            <br />
            それでも迷うときは、短くで大丈夫なので相談してください。
          </p>
        </header>

        <section className={styles.section}>
          <div className={styles.box}>
            <h2 className={styles.h2}>はじめに</h2>

            <p className={styles.body}>
              ここまでのコンテンツを読んだあなたは、
              <br />
              もう「何をすればいいか分からない状態」ではないと思います。
            </p>

            <p className={styles.body}>
              あとは、自分で見て、試して、積み重ねていくことができます。
            </p>

            <p className={styles.body}>
              それでも、
              <br />
              ・自分ではどこがズレているか分からない
              <br />
              ・修正しているつもりでも変わらない
              <br />
              ・一度、自分の動きを見てほしい
            </p>

            <p className={styles.body}>
              そう感じる場合は、個別に相談してください。
            </p>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.box}>
            <h2 className={styles.h2}>相談の流れ</h2>
            <ol className={styles.steps}>
              <li>無料コンテンツでOSAの考え方を確認する</li>
              <li>フォームから現状と目的を送る</li>
              <li>必要に応じてオンラインで短く話す（15〜30分）</li>
              <li>今の課題と修正の方向性を整理する</li>
            </ol>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.h2}>相談フォーム</h2>

          <p className={styles.formLead}>
            まずは短くで大丈夫です。
            <br />
            現状・困っていること・目標を教えてください。
          </p>

          <form
            className={styles.form}
            action="https://formspree.io/f/meepezny"
            method="POST"
          >
            <label className={styles.label}>
              氏名（またはニックネーム）
              <input className={styles.input} name="name" required />
            </label>

            <label className={styles.label}>
              競技 / 属性（例：野球・高2）
              <input className={styles.input} name="sport" required />
            </label>

            <label className={styles.label}>
              今困っていること（短くでOK）
              <textarea
                className={styles.textarea}
                name="problem"
                rows={5}
                required
              />
            </label>

            <label className={styles.label}>
              目標（例：球速UP、走力向上、打球速度向上など）
              <input className={styles.input} name="goal" required />
            </label>

            <label className={styles.label}>
              連絡先（メール / LINE名 / Instagramアカウントなど）
              <input className={styles.input} name="contact" required />
            </label>

            <div className={styles.row}>
              <button className={styles.button} type="submit">
                送信する
              </button>
              <a
                className={styles.link}
                href="https://www.instagram.com/tamuranaoki425/"
                target="_blank"
                rel="noreferrer"
              >
                Instagramで相談する
              </a>
            </div>

            <p className={styles.note}>
              ※フォーム送信後、内容を確認してこちらからご連絡します。急ぎの場合はInstagramからでも大丈夫です。
            </p>
          </form>
        </section>
      </article>
    </main>
  );
}