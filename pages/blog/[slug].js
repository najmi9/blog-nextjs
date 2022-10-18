import React from 'react';
import MarkDown from '../../blog/markdown-parser/MarkDown';
import Head from 'next/head';
import { parsePost } from '../../services/blogParser';

function Blog(props) {
    const {metaData, content} = parsePost(props.content);
    const {image, slug, description, title} = metaData;
    const Description = (ct) => <meta content={ct} name="description" />
    const Keywords = (ct) => <meta content={ct} name="keywords" />

    return (
        <>
        <Head>
            <title>{title}</title>
            <Description content={title} />
            <Keywords content={slug} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={`https://www.najmidev.tech/${image}`} />
            <script
                type='application/ld+json'
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(
                        {
                            "@context": "http://schema.org",
                            "@type": "BlogPosting",
                            "mainEntityOfPage": {
                                "@type": "WebPage",
                                "@id": `https://najmidev.tech/blog/${slug} `
                            },
                            "headline": title,
                            "image": {
                                "@type": "ImageObject",
                                "url": `https://www.najmidev.tech/${image}`,
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
                            "description": description,
                            "articleBody": ''
                        }
                    )
                }}
            >
        </script>
        </Head>
        <div id="blog-post-container" style={{ color: 'white!important' }}>
            <div className="container">
                <h1 className="header">{title}</h1>
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
