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
            <meta property="og:description" content={data.description} />
            <meta property="og:image" content={'https://www.najmidev.tech' + data.image} />
            <script
                type='application/ld+json'
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(
                        {
                            "@context": "http://schema.org",
                            "@type": "BlogPosting",
                            "mainEntityOfPage": {
                                "@type": "WebPage",
                                "@id": `https://najmidev.tech/blog/${data.slug} `
                            },
                            "headline": data.title,
                            "image": {
                                "@type": "ImageObject",
                                "url": `https://www.najmidev.tech/${data.image}`,
                                "height": 463,
                                "width": 700
                            },
                            "datePublished": "2022-08-29",
                            "dateModified": "2022-08-30",
                            "author": {
                                "@type": "Person",
                                "name": "Imad Najmi"
                            },
                            "publisher": {
                                "@type": "Organization",
                                "name": "NajmiDev",
                                "logo": {
                                    "@type": "ImageObject",
                                    "url": "https://www.najmidev.tech/imgs/profile/logo.png",
                                    "width": 550,
                                    "height": 60
                                }
                            },
                            "description": data.description || 'Symfony PHP Developer',
                            "articleBody": data.description || 'Article body'
                        }
                    )
                }}
            >
        </script>
        </Head>
        <div id="blog-post-container">
            <div className="container">
                <h1 className="header">{data.title}</h1>
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
