import type { Metadata } from "next";
import Link from "next/link";
import styles from "./contents.module.css";

export const metadata: Metadata = {
  title: "コンテンツ | OSA",
  description:
    "OSAの無料コンテンツ一覧。強くなるための構造を4つの層に分けて整理しています。まずは第1層『感覚に触れる』から触れてみてください。",
};

export default function ContentsPage() {
  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <header className={styles.header}>
          <p className={styles.kicker}>CONTENTS</p>
          <h1 className={styles.title}>コンテンツ</h1>
          <p className={styles.lead}>
            OSAでは、強くなるための構造を4つの層に分けて整理しています。
            <br />
            まずは無料公開している第1層から触れてみてください。
          </p>
        </header>

        <section className={styles.grid}>
          <article className={styles.card}>
            <p className={styles.cardKicker}>LAYER 1</p>
            <h2 className={styles.cardTitle}>感覚に触れる</h2>
            <p className={styles.cardBody}>
              努力しているのに伸びない。
              <br />
              なぜ力むと崩れるのか。
              <br />
              まずは感覚の入口に触れていきます。
            </p>
            <div className={styles.cardFooter}>
              <Link className={styles.ctaPrimary} href="/contents/layer1">
                第1層を見る
              </Link>
            </div>
          </article>

          <article className={styles.card}>
            <p className={styles.cardKicker}>LAYER 2</p>
            <h2 className={styles.cardTitle}>評価できるようになる</h2>
            <p className={styles.cardBody}>
              何が良くて、何がズレているのか。
              <br />
              動きを見るための軸を整理していきます。
            </p>
            <p className={styles.note}>準備中</p>
          </article>

          <article className={styles.card}>
            <p className={styles.cardKicker}>LAYER 3</p>
            <h2 className={styles.cardTitle}>修正できるようになる</h2>
            <p className={styles.cardBody}>
              崩れたときに何を戻すのか。
              <br />
              自分で修正するための流れを学びます。
            </p>
            <p className={styles.note}>準備中</p>
          </article>

          <article className={styles.card}>
            <p className={styles.cardKicker}>LAYER 4</p>
            <h2 className={styles.cardTitle}>競技に応用する</h2>
            <p className={styles.cardBody}>
              押す、投げる、走る、打つ。
              <br />
              競技の中で構造をどう使うかを扱います。
            </p>
            <p className={styles.note}>準備中</p>
          </article>
        </section>

        <div className={styles.bottomLink}>
          <Link className={styles.ctaGhost} href="/about">
            OSAについて読む
          </Link>
        </div>
      </div>
    </main>
  );
}