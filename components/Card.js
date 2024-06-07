import Image from 'next/image';
import Link from 'next/link';
import styles from "../styles/Card.module.css";

export default function Card({ news }) {
    return (

        <div className={styles.card}>

            <h3 className={styles.id}>{news.title} </h3>
            <p className={styles.id}>{news.author}</p>
            <div>{news.urlToImage ?
                <Image className={styles.img} src={news.urlToImage} alt="" height={240} width={400} /> : null}
            </div>
            <p className={styles.title}>{news.description}</p>
            <Link className={styles.btn} href={`/allNew/${news.title}`}>
                READ MORE
            </Link>
        </div>
    );
}
