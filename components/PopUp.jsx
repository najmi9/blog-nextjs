import React, { useState } from 'react';

const PopUp = ({ children, trigger, title, increaseZIndex, decreaseZIndex}) => {
    const [state, setState] = useState('IDLE');

    const showPopUp = () => {
        setState(() => 'SHOW')
        document.body.classList.add('stop-scrolling');
        increaseZIndex();
        document.body.addEventListener('keydown', keyHandler);
    }
    const hidePopUp = () => {
        setState(() => 'IDLE');
        document.body.classList.remove('stop-scrolling');
        decreaseZIndex();
        document.body.removeEventListener('keydown', keyHandler);
    }

    const keyHandler = (e) => {
        if ('Escape' === e.code) {
            hidePopUp();
        }
    }

    return (
        <>
            {state === 'IDLE' && <span onClick={showPopUp}>{trigger}</span>}

            {state === 'SHOW' && <div className="popup-box">
                <div className="popup">
                    <div className="close-icon" onClick={hidePopUp}>
                        <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.2" baseProfile="tiny"><path d="M17.414 6.586c-.78-.781-2.048-.781-2.828 0l-2.586 2.586-2.586-2.586c-.78-.781-2.048-.781-2.828 0-.781.781-.781 2.047 0 2.828l2.585 2.586-2.585 2.586c-.781.781-.781 2.047 0 2.828.39.391.902.586 1.414.586s1.024-.195 1.414-.586l2.586-2.586 2.586 2.586c.39.391.902.586 1.414.586s1.024-.195 1.414-.586c.781-.781.781-2.047 0-2.828l-2.585-2.586 2.585-2.586c.781-.781.781-2.047 0-2.828z"/>
                        </svg>
                    </div>
                    <div className='popup-header'>
                        <div className="popup-title">
                            <h3>{title}</h3>
                        </div>
                    </div>
                    <div className="popup-body">
                        {children}
                    </div>
                </div>
            </div>}
        </>
    )
}

export default PopUp;