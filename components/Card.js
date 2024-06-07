import Image from 'next/image';
import Link from 'next/link';
import styles from "../styles/Card.module.css";

export default function Card({ noticia }) {
    return (

        <div className={styles.card}>

            <h3 className={styles.id}>{noticia.title} </h3>
            <p className={styles.id}>{noticia.author}</p>
            <div>{noticia.urlToImage ?
                <Image className={styles.img} src={noticia.urlToImage} alt="" height={240} width={400} /> : null}
            </div>
            <p className={styles.title}>{noticia.description}</p>
            <Link className={styles.btn} href={"/noticias/${noticia.articles}"}>
                READ MORE
            </Link>
        </div>
    );
}
