import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import useIntersect from '../hooks/useIntersect';
import { postsMetadata } from '../services/blogParser';

export default function Blog ({data, all}) {
    const BlogPost = dynamic(() => import('../blog/BlogPost'), {ssr: false});

    const ref = useRef(null);

    const [isView, setNode] = useIntersect();

    useEffect(() => {
        setNode(ref)
    }, [ref]);

    return (
        <section id="blog" className="blog" ref={ref}>
            <div className="container">
                <div className="section-title">
                    <h2>Blogs</h2>
                    <p>Here Some articles that write in my free time.</p>
                </div>
                <h1>Secure deployment</h1>
                <iframe src="https://meeetings.s3.eu-west-3.amazonaws.com/secure_deployment/secure_deployment/index.html#/" width="100%" height="500" frameborder="0"></iframe>

            <hr />
                <h1>Reverse engineering: Example of Doctrine ORM</h1>
                <iframe src="https://56q35vbhrxkfcivwcgqkbu4g6u0viasw.lambda-url.eu-west-3.on.aws/" width="100%" height="1000" frameborder="0"></iframe>

                <hr />
                {isView && <div className="row g-2">
                    {postsMetadata(data).map((post, i) => {
                        const Li = <div className="col-xl-3 col-lg-4 col-md-6" key={'p'+i}>
                            <BlogPost post={post} />
                        </div>;
                        if (all) {
                            return Li
                        } else {
                            return ( i < 8 ? Li : '')
                        }
                    })}
                </div>}
                <hr />
                <h1>Setup worker to consume the queued messenger messages</h1>
                <iframe src="https://3eqnzdpbchcrvrphsdrnekkphy0vsdna.lambda-url.eu-west-3.on.aws/" width="100%" height="1000" frameborder="0"></iframe>
                {!all && <Link href="/blog">
                    <a className="btn my-3 btn-primary fs-bolder">
                        See More
                    </a>
                </Link>}
            </div>
        </section>
    );
}
