import Link from 'next/link'
// export async function getStaticPaths() {
//     return {
//         paths: [], //indicates that no page needs be created at build time
//         fallback: 'blocking' //indicates the type of fallback
//     }
//   }

export async function getStaticProps() {
  const data = await fetch(
  `https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=558693bede2e44809875de39f79645ee`)
  const noticia = await data.json();
  return {
    props:{noticias: data.articles}
  }
}
export async function getStaticPaths() {

  const response = await fetch(
    `https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=558693bede2e44809875de39f79645ee`
  )
  const data = await response.json()

  const paths = data.articles.map((noticia) =>{

    return{
      params: {
        noticiaArticles: `${noticia.articles}`
      }
    }
  })
  return {paths, fallback: true}


}


export default function Principal({noticia}) {

  return (
    <>
      <Link href={`/`}>
        Voltar
      </Link>
      <h1>exibição: </h1>
      <h3>Texto: {noticia.content}</h3>
      
    </>
  )
}