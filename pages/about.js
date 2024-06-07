import Image from "next/image"
import styles from '../styles/About.module.css'
export default function About (){
    return(
        <div className={styles.about}>
            <h1>Sobre o projeto</h1>
            <p>News is an application built on Next.js to consult news from NEWSAPI</p>
            <Image src="/images/noticiass.jpg"
            width={300}
            height={300}
            alt="Logo"/>
        </div>
    )
}