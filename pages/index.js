import Head from 'next/head'
import About from '../me/about';
import Skills from '../me/skills';
import Contact from '../me/contact';
import Hero from '../me/hero';
import Experience from '../me/experience';
import Portfolio from '../me/portfolio';
import Blog from '../me/blog';




export default function Home({data}) {
  return (
    <>
      <Head>
        <title>Imad Najmi</title>
        <meta content="Imad Najmi: PHP Symfony Developer" name="description" />
        <meta content="Imad Najmi, Symfony, PHP, Developer" name="keywords" />
        <meta property="og:title" content="Imad Najmi Symfony Developer" />
        <meta property="og:description" content="Web Developer with stack PHP, Symfony, Javascript, React and Api platform framework" />
        <meta property="og:image" content="https://www.najmidev.tech/imgs/profile/profile-img.jpg" />
      </Head>

      <Hero />
      <main id="main" style={{ color: 'white!important' }}>
        <About />
        <Experience />
        <Skills />
        <Portfolio />
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
