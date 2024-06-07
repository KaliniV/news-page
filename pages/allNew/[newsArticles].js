import Link from 'next/link'
import Image from 'next/image';
import styles from "../../styles/news.module.css";



export async function getStaticPaths() {
  const api = `https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=558693bede2e44809875de39f79645ee`;

  const res = await fetch(`${api}`);
  const data = await res.json();

  const paths = data.articles.map((news) => ({
    params: { newsArticles: news.title },
  }));

  return { paths, fallback: false };
}

export const getStaticProps = async ({ params }) => {
  const api = `https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=558693bede2e44809875de39f79645ee`;

  const res = await fetch(`${api}`);
  const data = await res.json();

  const news = data.articles.find((news) => news.title === params.newsArticles);

  return {
    props: {
      news: news,
    },
  };
};

export default function Principal({ news }) {

  return (
    <div className={styles.news_container}>
    
      <div Class>
      <h1 className={styles.title}>{news.title}</h1>
      <p>{news.author}</p>
      </div>

      <div>{news.urlToImage ?
        <Image src={news.urlToImage} alt="" height={260} width={420} /> : null}
      </div>

      <div className={styles.description_container}>
        
      <p>{news.description}</p>
      <p>{news.content}</p>
      </div>
      <Link className={styles.return_btn} href={`/`}>
        RETURN
      </Link>
    </div>
  )
}