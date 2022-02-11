import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
const BlogPost = ({post}) => {

    return (
        <div className="border p-1 rounded text-center">
            <Image src={post.image} alt={post.title} width="330" height="200" layout="fixed" className="img-fluid"/>
            <Link href={`/blog/${post.slug}`}>
                <a className="btn btn-link">
                    { post.title }
                </a>
            </Link>
        </div>
    );
}

export default BlogPost;
