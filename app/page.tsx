import styles from "./page.module.css";
import Image from "next/image";
import bgImgSrc from "../public/img-mv.jpg";

import ButtonLink from "./_components/ButtonLink";
import NewsList from "./_components/NewsList";

import { News } from "./_libs/microcms";

export default function Home() {
  const data: { contents: News[] } = {
    contents: [
      {
        id: "1",
        title: "渋谷にオフィスを移転しました",
        category: {
          name: "更新情報",
        },
        publishedAt: "2023-05-19T00:00:00.000Z",
        createdAt: "2023-05-19T00:00:00.000Z",
      },
      {
        id: "2",
        title: "当社のCEOが業界リーダーTOP30に選出されました",
        category: {
          name: "更新情報",
        },
        publishedAt: "2023-05-19T00:00:00.000Z",
        createdAt: "2023-05-19T00:00:00.000Z",
      },
      {
        id: "3",
        title: "テストの記事です",
        category: {
          name: "更新情報",
        },
        publishedAt: "2023-04-19T00:00:00.000Z",
        createdAt: "2023-04-19T00:00:00.000Z",
      },
    ],
  };

  const sliceData = data.contents.slice(0, 2);
  // const sliceData: News = []

  return (
    <>
      <section className={styles.top}>
        <div>
          <h1 className={styles.title}>テクノロジーの力で世界を変える</h1>
          <p className={styles.description}>私達はテックカンパニーです。</p>
        </div>
        <Image
          className={styles.bgimg}
          src={bgImgSrc.src}
          alt={"背景画像"}
          width={bgImgSrc.width}
          height={bgImgSrc.height}
          quality={80}
        />
      </section>
      <section className={styles.news}>
        <h2 className={styles.newsTitle}>News</h2>
        <NewsList news={sliceData} />
        <div className={styles.newsLink}>
          <ButtonLink href="/news">もっとみる</ButtonLink>
        </div>
      </section>
    </>
  );
}
