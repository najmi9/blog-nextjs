import React, { useRef } from 'react';
import Gallery from './Gallery';
import PopUp from './PopUp';

const Work = ({images, text, title, tags=[], date, link="#"}) => {
    const firstImageSrc = images[0].original;

    const ref = useRef(null);

    const trigger = <button className='btn btn-sm btn-primary'>See details</button>

    const increaseZIndex = () => {
        if (ref.current) {
            ref.current.parentElement.style.zIndex = 10;
        }
    }

    const decreaseZIndex = () => {
        if (ref.current) {
            ref.current.parentElement.style.zIndex = 1;
        }
    }

    return(
        <div className="card border bg-light work-card h-100" ref={ref}>
            <div className="card-header">
                <img src={firstImageSrc} alt={title} width='100%' height='100%'/>
            </div>
            <div className="card-body">
                <div className="card-text">
                    <h6 className="work-title"> {title} </h6>

                    <PopUp title={title} trigger={trigger} increaseZIndex={increaseZIndex} decreaseZIndex={decreaseZIndex}>
                        <Gallery images={images.map(img => img.original)} />
                        <div className="work-description">{text}</div>
                        {
                            link && <div className="mt-1 text-dark">
                                The website link :
                                <a className="btn btn-sm text-primary" href={link} rel="noreferrer" target="_blank">Here!</a>
                            </div>
                        }

                        <div className="tags">
                            {
                                tags.map((tag, i) => (<span key={i} className="tag">
                                    #{tag}
                                </span>
                                ))
                            }
                        </div>
                        <i className="fas fa-clock"></i>
                        <time dateTime="2019-10-01">{ date }</time>
                    </PopUp>
                </div>
            </div>
        </div>
    );
}

export default Work;
