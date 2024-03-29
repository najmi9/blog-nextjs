import React from 'react';

const Loader = () => {
    return (
        <div className="d-flex justify-content-center">
            <div className="spinner-grow text-danger" style={{width: '3rem', height: '3rem'}} role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    );
}

export default Loader;

