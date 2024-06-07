import Image from "next/image"
import styles from '../styles/About.module.css'
export default function About (){
    return(
        <div className={styles.about}>
            <h1>About the project</h1>
            <p>News is an application built on Next.js to consult news from NEWSAPI</p>
            <p>Home: The home page displays a list of news obtained from the NewsAPI API.
            Read more: When clicking on a news story on the home page, the user is directed 
            to a page with more details about the news.
            </p>
        </div>
    )
}