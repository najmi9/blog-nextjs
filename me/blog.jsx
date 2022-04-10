import React from 'react';
import BlogPost from '../blog/BlogPost';
import matter from 'gray-matter';
import Link from 'next/link';

export default function Blog ({data, all}) {
    const realData = data.map(blog => matter(blog));
    const listItems = realData.map(listItem => listItem.data);

    return (
        <section id="blog" className="blog">
            <div className="container">
                <div className="section-title">
                    <h2>Blogs</h2>
                    <p>Here Some articles that write in my free time.</p>
                </div>
                <div className="row g-2 d-flex align-items-center" data-aos="fade-in">
                    {listItems.map((post, i) => {
                        const Li = <div className="col-lg-4 col-md-6" key={'p'+i}><BlogPost post={post} /></div>;
                        if (all) {
                            return Li
                        } else {
                            return ( i < 6 ? Li : '')
                        }
                    })}
                </div>
                {!all && <Link href="/blog">
                    <a className="btn my-3 btn-primary fs-bolder">
                        See More <i className='bx bx-right-arrow-alt'></i>
                    </a>
                </Link>}
            </div>
        </section>
    );
}