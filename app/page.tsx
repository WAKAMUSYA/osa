import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "OSA | ORIGIN STRENGTH ARTS",
  description:
    "OSAは、強くなるための構造を学ぶ場所です。フォームを教わるだけでなく、自分で評価し、修正し、積み重ねられる人になるための無料コンテンツを公開しています。",
};

export default function Home() {
  return (
    <main className={styles.page}>
        <section className={styles.hero}>
          <p className={styles.kicker}>FOR ATHLETES WHO LACK ENVIRONMENT</p>

          <h1 className={styles.title}>
            感覚を開き、理論を知れば
            <br />
            パフォーマンスは高まり続ける
          </h1>

          <p className={styles.lead}>
            努力しているのに、何が正しいか分からない人へ
            <br />
            強くなるための構造を学べば、
            <br />
            自分で評価し、修正できる人になれる。
          </p>

          <div className={styles.ctaRow}>
            <Link className={styles.ctaPrimary} href="/contents">
              コンテンツを見る
            </Link>
            <Link className={styles.ctaSecondary} href="/about">
              OSAについて読む
            </Link>
          </div>

          <div className={styles.meta}>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>STEP1</span>
              <span className={styles.metaValue}>感覚を開き、理論を学ぶ</span>
            </div>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>STEP2</span>
              <span className={styles.metaValue}>繰り返す。頭と体で身につける。</span>
            </div>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>STEP3</span>
              <span className={styles.metaValue}>パフォーマンスを高め続ける</span>
            </div>
          </div>
        </section>

      <section className={styles.section}>
        <h2 className={styles.h2}>メッセージ</h2>

        <div className={styles.messageBox}>
          <p className={styles.messageTitle}>その努力が、遠回りだけで終わらないように</p>

          <p className={styles.messageBody}>
            プロになりたい。優勝したい。勝ちたい。
            <br />
            夢がある。情熱もある。けれど、環境に恵まれていない。
            <br />
            <br />
            それでも、あなたは環境を言い訳にせず、
            <br />
            調べて、試して、積み重ねていくはずです。
            <br />
            <br />
            だからこそ、
            <br />
            その努力が遠回りだけで終わらないように。
            <br />
            何が良くて、何が崩れているのかを自分で見られるように。
            <br />
            <br />
            視覚がない人に、空を教えるとき、
            <br />
            言葉だけでは伝わりきりません。
            <br />
            <br />
            正しい説明はできるけれど、
            <br />
            それだけでは「空そのもの」にはならない。
            <br />
            <br />
            それと同じように、
            <br />
            動きも、理論だけでは届かない部分があります。
            <br />
            <br />
            だからOSAでは、
            <br />
            理論と感覚に触れながら、理解を深めていきます。
            <br />
            <br />
            強くなるための条件を整理し、
            <br />
            自分で評価し、修正し、積み重ねられる人になる。
            <br />
            <br />
            それがOSAの役割です。
          </p>

          <div className={styles.messageCta}>
            <Link className={styles.ctaPrimary} href="/contents">
              無料コンテンツを見る
            </Link>
            <Link className={styles.ctaSecondary} href="/about">
              OSAの背景を読む
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.h2}>まずはここから</h2>
        <p className={styles.sectionLead}>
          OSAでは、強くなるための構造を4つの層に分けて整理しています。
          <br />
          まずは第1層から触れてみてください。
        </p>

        <div className={styles.grid}>
          <div className={styles.card}>
            <p className={styles.cardTitle}>第1層｜感覚に触れる</p>
            <p className={styles.cardBody}>
              努力しているのに伸びない。なぜ力むと崩れるのか。
              <br />
              まずは感覚の入口に触れていきます。
            </p>
            <div className={styles.cardCta}>
              <Link className={styles.ctaPrimary} href="/contents/layer1">
                第1層を見る
              </Link>
            </div>
          </div>

          <div className={styles.card}>
            <p className={styles.cardTitle}>第2層｜評価できるようになる</p>
            <p className={styles.cardBody}>
              何が良くて、何がズレているのか。
              <br />
              動きを見るための軸を整理していきます。
            </p>
            <div className={styles.cardCta}>
              <Link className={styles.ctaPrimary} href="/contents/layer2">
                第2層を見る
              </Link>
            </div>
          </div>

          <div className={styles.card}>
            <p className={styles.cardTitle}>第3層｜修正できるようになる</p>
            <p className={styles.cardBody}>
              崩れたときに何を戻すのか。
              <br />
              自分で修正するための流れを学びます。
            </p>
            <div className={styles.cardCta}>
              <Link className={styles.ctaPrimary} href="/contents/layer3">
                第3層を見る
              </Link>
            </div>
          </div>

          <div className={styles.card}>
            <p className={styles.cardTitle}>第4層｜競技に応用する</p>
            <p className={styles.cardBody}>
              押す、投げる、走る、打つ。
              <br />
              競技の中で構造をどう使うかを扱います。
            </p>
            <div className={styles.cardCta}>
              <Link className={styles.ctaPrimary} href="/contents/layer4">
                第4層を見る
              </Link>
            </div>
          </div>
        </div>

        <div className={styles.ctaRowBottom}>
          <Link className={styles.ctaGhost} href="/contents">
            コンテンツ一覧へ
          </Link>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.h2}>OSAで起きる変化</h2>
        <div className={styles.grid}>
          <div className={styles.card}>
            <p className={styles.cardTitle}>自分で評価できる</p>
            <p className={styles.cardBody}>
              調子の良し悪しを“運”にしない。崩れた理由が少しずつ言葉になる。
            </p>
          </div>
          <div className={styles.card}>
            <p className={styles.cardTitle}>1人練習の質が上がる</p>
            <p className={styles.cardBody}>
              コーチがいなくても、修正→実行→評価のサイクルが回る。
            </p>
          </div>
          <div className={styles.card}>
            <p className={styles.cardTitle}>再現性が上がる</p>
            <p className={styles.cardBody}>
              良い動きの条件が整理され、試合や本番で崩れにくくなる。
            </p>
          </div>
          <div className={styles.card}>
            <p className={styles.cardTitle}>強くなり続ける</p>
            <p className={styles.cardBody}>
              筋トレ・栄養・技術を“原理”で理解し、積み重ねることができる。
            </p>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.h2}>流れ</h2>
        <ol className={styles.steps}>
          <li>
            <span className={styles.stepNum}>01</span>
            <div className={styles.stepText}>
              <p className={styles.stepTitle}>まずは読む / 見る</p>
              <p className={styles.stepBody}>
                コンテンツで、OSAの考え方と感覚の入口に触れる。
              </p>
            </div>
          </li>
          <li>
            <span className={styles.stepNum}>02</span>
            <div className={styles.stepText}>
              <p className={styles.stepTitle}>自分で積み重ねていく</p>
              <p className={styles.stepBody}>
                理論 → 実践 → 評価 → 修正。自分で伸びる構造を作る。
              </p>
            </div>
          </li>
          <li>
            <span className={styles.stepNum}>03</span>
            <div className={styles.stepText}>
              <p className={styles.stepTitle}>必要なら相談する</p>
              <p className={styles.stepBody}>
                1人でやるのが難しいときは、相談も受け付けています。
              </p>
            </div>
          </li>
        </ol>

        <div className={styles.ctaRowBottom}>
          <Link className={styles.ctaPrimary} href="/contents">
            コンテンツを見る
          </Link>
          <Link className={styles.ctaSecondary} href="/contact">
            相談する
          </Link>
        </div>
      </section>

      <footer className={styles.footer}>
        <p className={styles.footerText}>
          © {new Date().getFullYear()} OSA / ORIGIN STRENGTH ARTS
        </p>
      </footer>
    </main>
  );
}