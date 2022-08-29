import React from 'react';
import matter from "gray-matter";
import MarkDown from '../../blog/markdown-parser/MarkDown';
import Head from 'next/head';

function Blog(props) {
    const {data, content} = matter(props.content);
    const Description = (content) => <meta content={content} name="description" />
    const Keywords = (content) => <meta content={content} name="keywords" />

    return (
        <>
        <Head>
            <title>{data.title}</title>
            <Description content={data.title} />
            <Keywords content={data.slug} />
            <meta property="og:title" content={data.title} />
            <meta property="og:description"   content={data.description} />
            <meta property="og:image"         content={'https://www.najmidev.tech' + data.image} />
        </Head>
        <div id="blog-post-container">
            <div className="container">
                <h1 className="header">{data.title}</h1>
                <h3>{data.description}</h3>
                <MarkDown content={content}/>
            </div>
        </div>
    </>);
}

export const getStaticProps = async context => {
    const fs = require("fs");
    const {slug} = context.params;
    const content = fs.readFileSync(`${process.cwd()}/blog/posts/${slug}.md`, 'utf8')

    return {
        props: {
            content,
            standalone: true,
        }
    };
}

export async function getStaticPaths() {
    const fs = require("fs");
    const blogs = fs.readdirSync(`${process.cwd()}/blog/posts`, 'utf-8').filter(fn => fn.endsWith(".md"));

    return {
        paths: blogs.map(blog => ({
            params: {slug: blog.slice(0, blog.length - 3)}
        })),
        fallback: false,
    }
  }

export default Blog;
