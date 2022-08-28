import React, { useState } from 'react';
import ImageGallery from 'react-image-gallery';

const LeftNav = (props) => {
    return <button {...props} className="btn left-btn"> <i className='bi-arrow-left'></i> </button>
}

const RightNav = (props) => {
    return <button {...props} className="btn right-btn"> <i className='bi-arrow-right'></i> </button>
}

const Work = ({images, text, title, tags=[], date, link="#"}) => {
    const [state, setState] = useState('IDLE')
	return(
		<div className="card border bg-light h-100">
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
                    <h4 className="work-title"> {title} </h4>
                    { state === 'IDLE' && <button className='btn btn-sm btn-primary' onClick={() => setState('SHOW')}>
                        See details <i className="bi-arrow-down"></i>
                    </button>}
                    {state === 'SHOW' && <>
                    <button className='btn btn-sm btn-warning' onClick={() => setState('IDLE')}>
                        Close <i className="bi-arrow-up"></i>
                    </button>
                    <div className="work-description">{text}</div>
                    <div className="mt-1">
                        The website link :
                        <a className="btn btn-sm text-primary" href={link} rel="noreferrer" target="_blank">Here!</a>
                    </div>
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
