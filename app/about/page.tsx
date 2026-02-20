import type { Metadata } from "next";
import styles from "./about.module.css";

export const metadata: Metadata = {
  title: "OSAについて | ORIGIN STRENGTH ARTS",
  description:
    "OSAは、技術指導ではありません。強くなるための“身体の構造”を学ぶ場所です。フォームを教えるのではなく、フォームを自分で評価できる力を育てます。",
};

export default function AboutPage() {
  return (
    <main className={styles.page}>
      <article className={styles.container}>
        <header className={styles.header}>
          <p className={styles.kicker}>ABOUT</p>
          <h1 className={styles.title}>OSAについて</h1>
          <p className={styles.subtitle}>— 強くなる構造を学ぶ場所 —</p>
        </header>

        <section className={styles.section}>
          <h2 className={styles.h2}>OSAは、技術指導ではありません。</h2>

          <p className={styles.lead}>
            OSAは、技術を教える場所ではありません。
            フォームを細かく修正する場所でもありません。
          </p>

          <p>
            強くなるための“身体の構造”を学ぶ場所です。
            <br />
            フォームを教えるのではなく、フォームを自分で評価できる力を育てます。
          </p>

          <p>
            その日の出来不出来に振り回されず、
            なぜ良いのか、なぜ崩れたのかを理解できる状態を目指します。
          </p>
        </section>

        <div className={styles.divider} />

        <section className={styles.section}>
          <h2 className={styles.h2}>なぜOSAをつくったのか</h2>

          <p>私は、高校時代に本気で競技に向き合っていました。</p>

          <p>
            練習量はやっている。努力もしている。
            <br />
            でも、思うように伸びない。
          </p>

          <p>
            何が悪いのかが分からない。
            <br />
            環境のせいにしたくない。
            <br />
            でも、正しい方向も見えない。
          </p>

          <p>
            あのとき欲しかったのは、「もっと頑張れ」という言葉ではなく、
            <br />
            <strong className={styles.strong}>強くなるための条件を教えてくれる存在</strong>
            でした。
          </p>

          <p>OSAは、そのための場所です。</p>
        </section>

        <div className={styles.divider} />

        <section className={styles.section}>
          <h2 className={styles.h2}>勝ちは狙います</h2>

          <p>OSAは、勝利を否定しません。</p>

          <ul className={styles.list}>
            <li>甲子園に行きたい。</li>
            <li>インターハイに出たい。</li>
            <li>県大会を突破したい。</li>
          </ul>

          <p>その思いは尊い。</p>

          <p>
            ただし、勝利は確率論です。
            <br />
            その日の結果だけで自分を評価するのは不安定です。
          </p>

          <p>
            OSAが目指すのは、
            <br />
            勝ちを狙いながら、勝ちに依存しない状態をつくること。
          </p>

          <p>そのために、強くなる構造を整えます。</p>
        </section>

        <div className={styles.divider} />

        <section className={styles.section}>
          <h2 className={styles.h2}>強くなる構造とは何か</h2>

          <ul className={styles.cards}>
            <li className={styles.card}>
              <p className={styles.cardTitle}>力が通る身体</p>
              <p className={styles.cardBody}>出力が逃げない“通り道”を整える。</p>
            </li>
            <li className={styles.card}>
              <p className={styles.cardTitle}>無駄の少ない動き</p>
              <p className={styles.cardBody}>力みや準備動作で失う要素を減らす。</p>
            </li>
            <li className={styles.card}>
              <p className={styles.cardTitle}>再現性のある出力</p>
              <p className={styles.cardBody}>良い状態を“偶然”にしない。</p>
            </li>
            <li className={styles.card}>
              <p className={styles.cardTitle}>自分でズレに気づける評価力</p>
              <p className={styles.cardBody}>外から言われる前に、自分で直せる。</p>
            </li>
          </ul>

          <p>
            これは特別な才能ではありません。条件を理解し、繰り返すことで身につきます。
          </p>

          <p>
            OSAでは、
            <br />
            論理を学び、実践し、評価し、サイクルを回します。
          </p>

          <p>
            それを通して、
            <br />
            <strong className={styles.strong}>「1人でも伸びられる状態」</strong>を育てます。
          </p>
        </section>

        <div className={styles.divider} />

        <section className={styles.section}>
          <h2 className={styles.h2}>OSAが向いている人</h2>
          <ul className={styles.list}>
            <li>本気で上手くなりたい人</li>
            <li>環境が足りないと感じている人</li>
            <li>言い訳をしたくない人</li>
            <li>自分で考えられるようになりたい人</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.h2}>OSAが向いていない人</h2>
          <ul className={styles.list}>
            <li>楽して結果だけ欲しい人</li>
            <li>指示がないと動けない人</li>
            <li>一時的な変化だけを求める人</li>
          </ul>
        </section>

        <div className={styles.divider} />

        <section className={styles.section}>
          <h2 className={styles.h2}>最後に</h2>

          <p>環境がないことは、不利かもしれません。</p>
          <p>
            でも、本気なら構造は学べます。
            <br />
            OSAは、強くなりたい人のための場所です。
          </p>

          <p className={styles.closing}>
            勝ちを狙いながら、
            <br />
            自分で伸びる人になる。
            <br />
            その準備を、ここで行います。
          </p>

          <div className={styles.ctaRow}>
            <a className={styles.ctaPrimary} href="/contact">
              相談する
            </a>
            <a className={styles.ctaSecondary} href="/members">
              会員ページ（準備中）
            </a>
          </div>

          <p className={styles.note}>
            ※会員ページはパスワード制（少人数運用）を想定しています。
          </p>
        </section>
      </article>
    </main>
  );
}