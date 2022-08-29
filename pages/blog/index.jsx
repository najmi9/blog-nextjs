import Head from 'next/head';
import React from 'react';
import Blog from '../../me/blog';

const AllPosts = ({data}) => {
    return (
        <>
            <Head>
                <title>Imad Najmi| Blog</title>
                <meta content="Imad Najmi: Blog about web technologies" name="description" />
                <meta content="Imad Najmi, Blog, PHP, web" name="keywords" />
                <meta property="og:title" content="Imad Najmi Symfony Developer" />
                <meta property="og:description" content="Web Developer with stack PHP, Symfony, Javascript, React and Api platform framework" />
                <meta property="og:image" content="https://www.najmidev.tech/imgs/profile/profile-img.jpg" />
            </Head>
            <Blog data={data} all={true}/>
        </>
    );
}

export default AllPosts;

export async function getStaticProps() {
    const fs = require("fs");
    const blogs = fs.readdirSync(`${process.cwd()}/blog/posts`, 'utf-8').filter(fn => fn.endsWith(".md"));

    const data = blogs.map(blog => fs.readFileSync(`${process.cwd()}/blog/posts/${blog}`, {encoding: "utf-8"}));

    return {
        props: {
            data,
            standalone: true,
        }
    }
}
