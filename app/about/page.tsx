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
          <h2 className={styles.h2}>OSAは、技術を“教える”場所ではありません。</h2>

          <p className={styles.lead}>
            OSAは、答えを与える場所ではありません。
            <br />
            フォームを細かく修正する場所でもありません。
          </p>

          <p>
            強くなるための“力の本質・構造”を学ぶ場所です。
            <br />
            フォームを教えるのではなく、フォームを自分で評価できる力を育てます。
          </p>

          <p>
            その日の出来不出来に振り回されず、
            <br />
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
          <p className={styles.quote}>
            一流は説明しない。あるいは、説明できない。
            <br />
            理論を理解しても、できるとは限らない。
            <br />
            それでも確かに存在する、本人の感覚としての「何か」がある。
            <br />
            OSAは、その“何か”を言葉と再現性に変えるための場所です。
          </p>

        </section>

        <div className={styles.divider} />

        <section className={styles.section}>
          <h2 className={styles.h2}>勝利は、構造の先にあります</h2>

          <p>OSAは、勝利を否定しません。</p>

          <ul className={styles.list}>
            <li>甲子園に行きたい。</li>
            <li>インターハイに出たい。</li>
            <li>プロになりたい。</li>
          </ul>

          <p>その願いは、まっすぐで尊い。</p>

          <p>
            だからこそ、運や勢いだけに頼らない。
            <br />
            強くなる条件を整理し、崩れた理由を言葉にできるようにする。
          </p>

          <p>
            勝利は、近道ではなく積み重ねの先にある。
            <br />
            OSAは、その「積み重ねが効く構造」を整えます。
          </p>
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
          <h2 className={styles.h2}>最後に</h2>
            <p>
              OSAは、魔法のように一瞬で強くなる場所ではありません。
              <br />
              すべての悩みに、すぐ答えを出せる場所でもありません。
            </p>

            <p>
              けれど、
              <br />
              何が良くて、何が崩れているのか。
              <br />
              なぜ伸びて、なぜ止まるのか。
              <br />
              それを少しずつ自分で見られるようになる場所ではありたいと思っています。
            </p>

            <p>
              僕自身、あの頃に欲しかったのは、
              <br />
              「もっと頑張れ」という言葉ではなく、
              <br />
              自分の努力を正しい方向に積み重ねるための視点でした。
            </p>

            <p>
              もし今、
              <br />
              頑張っているのに伸びない感覚があるなら。
              <br />
              何を信じて積み重ねればいいのか分からないなら。
              <br />
              ここにある考え方や実践が、その手がかりになれば嬉しいです。
            </p>

            <p>
              OSAは、答えを与えるための場所ではなく、
              <br />
              自分で見て、自分で修正し、自分で伸びていくための場所です。
            </p>

            <p>
              その夢が、遠回りだけで終わらないように。
              <br />
              OSAは、そのための場所でありたいと思っています。
            </p>


          <div className={styles.ctaRow}>
            <a className={styles.ctaPrimary} href="/contact">
              相談する
            </a>
            <a className={styles.ctaSecondary} href="/members">
              会員ページ（準備中）
            </a>
          </div>


        </section>
      </article>
    </main>
  );
}