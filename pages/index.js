import Head from 'next/head'
import About from '../me/about';
import Blog from '../me/blog';
import Skills from '../me/skills';
import Contact from '../me/contact';
import Protofolio from '../me/protofolio';
import Hero from '../me/hero';
import Experience from '../me/experience';

export default function Home({data}) {
  return (
    <>
      <Head>
        <title>Imad Najmi</title>
        <meta content="Imad Najmi: PHP Symfony Developer" name="description" />
        <meta content="Imad Najmi, Symfony, PHP, Developer" name="keywords" />
      </Head>

      <Hero />
      <main id="main">
        <About />
        <Experience />
        <Skills />
        <Protofolio />
        <Contact />
        <Blog data={data}/>
      </main>
    </>
  )
}

export async function getStaticProps() {
  const fs = require('fs');
  const blogs = fs.readdirSync(`${process.cwd()}/blog/posts`, 'utf-8').filter(fn => fn.endsWith(".md"));

  const data = blogs.map(blog => fs.readFileSync(`${process.cwd()}/blog/posts/${blog}`, {encoding: "utf-8"}));

  return {
      props: {
          data,
      }
  }
}
