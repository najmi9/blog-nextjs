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
                {isView && <div className="row g-2" data-aos="fade-right">
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
                {!all && <Link href="/blog">
                    <a className="btn my-3 btn-primary fs-bolder">
                        See More
                    </a>
                </Link>}
            </div>
        </section>
    );
}
