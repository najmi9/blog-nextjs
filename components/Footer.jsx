import React from 'react';

const Footer = () => {
    return (<>
        <footer id="footer">
        <div className="container">
          <div className="copyright">
            &copy; Copyright <strong><span>Imad Najmi</span></strong>
          </div>
        </div>
      </footer>
      <a href="#" className="back-to-top d-flex align-items-center justify-content-center">
        <svg width="20px" height="20px" viewBox="0 0 20 20"><polygon points="9 3.828 2.929 9.899 1.515 8.485 10 0 10.707 .707 18.485 8.485 17.071 9.899 11 3.828 11 20 9 20 9 3.828"/></svg>  
      </a>
  </>);
};

export default Footer;
