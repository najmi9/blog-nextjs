import Head from 'next/head'
import Blog from '../me/blog';

export default function Home({data}) {
  return (
    <>
      <Head>
        <title>Imad Najmi</title>
        <meta content="Imad Najmi: PHP Symfony Developer" name="description" />
        <meta content="Imad Najmi, Symfony, PHP, Developer" name="keywords" />
      </Head>

      <main id="main">
        <h1>Hello World, where is my fuel !!</h1>
        <Blog data={data}/>
      </main>
    </>
  )
}

export async function getStaticProps() {
  const fs = require("fs");
  const blogs = fs.readdirSync(`${process.cwd()}/blog/posts`, 'utf-8').filter(fn => fn.endsWith(".md"));

  const data = blogs.map(blog => fs.readFileSync(`${process.cwd()}/blog/posts/${blog}`, {encoding: "utf-8"}));

  return {
      props: {
          data,
      }
  }
}