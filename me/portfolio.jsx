import React, {useEffect, useRef } from 'react';
import dynamic from 'next/dynamic'
import useIntersect from '../hooks/useIntersect';

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
           {isView &&  <AllWorks />}
        </div>
      </section>
    );
}

export default Portfolio;
