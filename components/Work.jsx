import React, { useState } from 'react';
import ImageGallery from 'react-image-gallery';

const LeftNav = (props) => {
    return <button {...props} className="btn left-btn"> 
        <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none">
            <path d="M20.3287 11.0002V13.0002L7.50042 13.0002L10.7429 16.2428L9.32873 17.657L3.67188 12.0001L9.32873 6.34326L10.7429 7.75747L7.50019 11.0002L20.3287 11.0002Z" fill="black"/>
        </svg>
    </button>
}

const RightNav = (props) => {
    return <button {...props} className="btn right-btn">
            <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none">
                <path d="M15.0377 6.34326L13.6268 7.76078L16.897 11.0157L3.29199 11.0294L3.294 13.0294L16.8618 13.0158L13.6466 16.246L15.0641 17.6569L20.7078 11.9869L15.0377 6.34326Z" fill="black"/>
            </svg>
        </button>
}

const Work = ({images, text, title, tags=[], date, link="#"}) => {
    const [state, setState] = useState('IDLE')
    return(
        <div className="card border bg-light work-card h-100">
            <div className="card-header">
                <ImageGallery showNav={true} showBullets={true} infinite={true} showPlayButton={false}
                slideDuration={10} items={images}
                renderLeftNav={(onClick, disabled) => (
                    <LeftNav onClick={onClick} disabled={disabled} />
                  )}
                renderRightNav={(onClick, disabled) => (
                    <RightNav onClick={onClick} disabled={disabled} />
                  )}
                />
            </div>
            <div className="card-body">
                <div className="card-text">
                    <h6 className="work-title"> {title} </h6>
                    { state === 'IDLE' && <button className='btn btn-sm btn-primary' onClick={() => setState('SHOW')}>
                        See details
                    </button>}
                    {state === 'SHOW' && <>
                    <button className='btn btn-sm btn-warning' title='Close' onClick={() => setState('IDLE')}>
                        <svg width="15px" height="15px" viewBox="0 0 20 20"><polygon points="9 3.828 2.929 9.899 1.515 8.485 10 0 10.707 .707 18.485 8.485 17.071 9.899 11 3.828 11 20 9 20 9 3.828"/></svg>
                    </button>
                    <div className="work-description">{text}</div>
                    {
                        link && <div className="mt-1 text-dark">
                            The website link :
                            <a className="btn btn-sm text-primary" href={link} rel="noreferrer" target="_blank">Here!</a>
                        </div>
                    }

                    <div className="tags">
                        {
                            tags.map((e, i) => (<span key={i} className="tag">
                                #{e}
                            </span>
                            ))
                        }
                    </div>
                    <i className="fas fa-clock"></i>
                    <time dateTime="2019-10-01">{ date }</time>
                    </>}
                </div>
            </div>
        </div>
    );
}

export default Work;
