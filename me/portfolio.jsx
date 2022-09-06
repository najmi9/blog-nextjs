import React, {Suspense, useEffect, useRef } from 'react';
import dynamic from 'next/dynamic'
import useIntersect from '../hooks/useIntersect';
import Loader from '../components/Loader';

const Portfolio = () => {
    const AllWorks = dynamic(() => import('./works/all_works'), {ssr: false});
    const ref = useRef(null);

    const [isView, setNode] = useIntersect();

    useEffect(() => {
        setNode(ref)
    }, [ref]);

    return (
      <section id="portfolio" className="portfolio">
          <div className="container" ref={ref}>
            <div className="section-title">
              <h2>Portfolio</h2>
            </div>
           <Suspense fallback={<Loader />}>
              {isView &&  <AllWorks />}
           </Suspense>
        </div>
      </section>
    );
}

export default Portfolio;
