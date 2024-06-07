import { Inter } from "next/font/google";
import styles from "../styles/Home.module.css";

import Card from '@/components/Card';
const inter = Inter({ subsets: ["latin"] });

export async function getStaticProps() {
  const api = `https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=558693bede2e44809875de39f79645ee`;

  const res = await fetch(`${api}`);

  const data = await res.json();

  return {
    props: {
      allnew: data.articles,
    },
  };
}

export default function Home({ allnew }) {
  return (
    <>
      <div className={styles.title_container}>
        <h1 className={styles.title}>
          NEWS<span > of the day</span>
        </h1>

      </div>

      <div className={styles.new_container}>
        {allnew.map((news, index) => (
          <Card key={index} news={news} />
        ))}
      </div>


    </>
  )
}