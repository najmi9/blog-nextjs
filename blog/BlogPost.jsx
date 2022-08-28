import React from 'react';
import Link from 'next/link';
const BlogPost = ({post}) => {

    return (
        <div className="border p-1 rounded h-100">
            <img src={post.image} alt={post.title} width="330" height="200" layout="fixed" className="img-fluid"/>
            <Link href={`/blog/${post.slug}`}>
                <a className="btn btn-link">
                    { post.title }
                </a>
            </Link>
        </div>
    );
}

export default BlogPost;
