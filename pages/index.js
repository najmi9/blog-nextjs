import Head from 'next/head'
import About from '../me/about';
import Blog from '../me/blog';
import Facts from '../me/facts';
import Skills from '../me/skills';
import Resume from '../me/resume';
import Contact from '../me/contact';
import Testiomonials from '../me/testiomonials';
import Protofolio from '../me/protofolio';
import Services from '../me/services';

export default function Home({data}) {
  return (
    <>
      <Head>
        <title>Imad Najmi</title>
        <meta content="Imad Najmi: PHP Symfony Developer" name="description" />
        <meta content="Imad Najmi, Symfony, PHP, Developer" name="keywords" />
      </Head>

      <main id="main">
        <About />
        <Facts />
        <Skills />
        <Resume />
        <Protofolio />
        <Services />
        <Testiomonials />
        <Contact />
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