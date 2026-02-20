import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <div className={styles.nav}>
          <div className={styles.brand}>
            <span className={styles.logo} aria-hidden="true" />
            <span className={styles.brandText}>
              <span className={styles.brandName}>OSA</span>
              <span className={styles.brandSub}>ORIGIN STRENGTH ARTS</span>
            </span>
          </div>

          <nav className={styles.links}>
            <Link href="/about">About</Link>
            <Link href="/contact">相談</Link>
            <Link href="/members">会員</Link>
          </nav>
        </div>

        <section className={styles.hero}>
          <p className={styles.kicker}>FOR ATHLETES WHO LACK ENVIRONMENT</p>
          <h1 className={styles.title}>
            強くなるための構造を学ぶ。
            <br />
            教わるだけでなく、
            <br />
            技術を評価し、創り出せる人になる。
          </h1>

          <p className={styles.lead}>
            目先のフォームではなく、
            <br />
            力が通る条件を学ぶ。
            <br />
            自分で評価し、修正し、積み重ねられる人になる。
          </p>

          <div className={styles.ctaRow}>
            <Link className={styles.ctaPrimary} href="/about">
              OSAについて読む
            </Link>
            <Link className={styles.ctaSecondary} href="/contact">
              相談する
            </Link>
          </div>

          <div className={styles.meta}>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>対象</span>
              <span className={styles.metaValue}>競技横断（部活全般）</span>
            </div>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>形式</span>
              <span className={styles.metaValue}>オンライン / 自主練習</span>
            </div>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>入口</span>
              <span className={styles.metaValue}>文章・動画 → オンライン面談</span>
            </div>
          </div>
        </section>
      </header>

      <section className={styles.section}>
        <h2 className={styles.h2}>OSAで起きる変化（1年）</h2>
        <div className={styles.grid}>
          <div className={styles.card}>
            <p className={styles.cardTitle}>自分で評価できる</p>
            <p className={styles.cardBody}>
              調子の良し悪しを“運”にしない。崩れた理由が言葉になる。
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
              良い動きの条件が整理され、試合で崩れにくくなる。
            </p>
          </div>
          <div className={styles.card}>
            <p className={styles.cardTitle}>強くなり続ける</p>
            <p className={styles.cardBody}>
              筋トレ・栄養・OSAメソッドを“原理”で理解し、積み重ねることができる。
            </p>
          </div>
        </div>
      </section>

            <section className={styles.section}>
        <h2 className={styles.h2}>メッセージ</h2>

        <div className={styles.messageBox}>
          <p className={styles.messageTitle}>その夢を叶えてほしい</p>

          <p className={styles.messageBody}>
            プロになりたい。優勝したい。勝ちたい。
            <br />
            夢がある。情熱もある。けれど、環境に恵まれていない。
            <br />
            <br />
            それでも、あなたは環境を言い訳にしない。
            <br />
            これからも調べて、試して、積み重ねていくはずだ。
            <br />
            <br />
            その努力が、遠回りにならないように。
            <br />
            夢が叶う確率を、少しでも上げるために。
            <br />
            <br />
            強くなるための条件を整理し、
            <br/>
            自分で評価できる力を持てば、
            <br/>
            成長は加速する。
            <br/>
            <br/>
            あなたが、自分の力で伸びていけるように。
            <br/>
            それがOSAの役割です。
          </p>

          <div className={styles.messageCta}>
            <Link className={styles.ctaSecondary} href="/about">
              OSAの背景を読む
            </Link>
            <Link className={styles.ctaPrimary} href="/contact">
              相談する
            </Link>
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
                Aboutで思想を確認。無料の文章・動画で空気を掴む。
              </p>
            </div>
          </li>
          <li>
            <span className={styles.stepNum}>02</span>
            <div className={styles.stepText}>
              <p className={styles.stepTitle}>オンラインで話す</p>
              <p className={styles.stepBody}>
                現状と目標を整理。必要な方向性だけを短く決める（15〜30分）。
              </p>
            </div>
          </li>
          <li>
            <span className={styles.stepNum}>03</span>
            <div className={styles.stepText}>
              <p className={styles.stepTitle}>会員ページで回す</p>
              <p className={styles.stepBody}>
                理論 → 実践 → 評価 → 振り返り。自分で伸びる構造を作る。
              </p>
            </div>
          </li>
        </ol>

        <div className={styles.ctaRowBottom}>
          <Link className={styles.ctaPrimary} href="/contact">
            相談する
          </Link>
          <Link className={styles.ctaGhost} href="/members">
            会員ページへ
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