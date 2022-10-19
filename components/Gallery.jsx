import React, { useCallback, useState } from 'react';

function Gallery({images}) {
    if(!images || !Array.isArray(images)) throw Error('images props is not an array');

    const [currentImage, setCurrentImage] = useState(0);

    const style = {
        maxHeight: '50vh',
        maxWidth: '50wh',
    }

    const nextImage = useCallback(() => {
        setCurrentImage(i => i + 1)
    }, []);

    const previousImage = useCallback(() => {
        setCurrentImage(i => i - 1)
    }, []);

    const LastIndex = images.length;

    return (
        <div style={{marginBottom: '50px'}}>
            {
                images.map(
                    (src, index) => currentImage === index && <img src={src} key={`img-${index}`} alt='Dev' 
                    width='100%' height='100%' style={style}/>
                )
            }

            {
                LastIndex > 1 && <div style={{marginTop: '5px'}} className='d-flex justify-content-between'>
                    <button 
                        disabled={currentImage === LastIndex - 1}
                        onClick={nextImage}
                        className='btn btn-sm btn-icon btn-danger'
                    >
                        <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none">
                            <path d="M20.3287 11.0002V13.0002L7.50042 13.0002L10.7429 16.2428L9.32873 17.657L3.67188 12.0001L9.32873 6.34326L10.7429 7.75747L7.50019 11.0002L20.3287 11.0002Z" fill="black"/>
                        </svg>
                    </button>
                    <button
                        disabled={currentImage === 0}
                        onClick={previousImage}
                        className='btn btn-sm btn-icon btn-danger'
                    >
                        <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none">
                            <path d="M15.0377 6.34326L13.6268 7.76078L16.897 11.0157L3.29199 11.0294L3.294 13.0294L16.8618 13.0158L13.6466 16.246L15.0641 17.6569L20.7078 11.9869L15.0377 6.34326Z" fill="black"/>
                        </svg>    
                    </button>
                </div>
            }
        </div>
    );
}

export default Gallery;