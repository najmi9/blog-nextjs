import React from 'react';
import { EMAIL, TEL } from '../config';

const Contact = () => {

    return (
        <section id="contact" className="contact">
      <div className="container">

        <div className="section-title">
          <h2>Contact</h2>
        </div>

        <div className="info d-flex justify-content-around align-items-between">

            <div className="address">
              <h4>Location:</h4>
              <p>
                <a href="https://www.google.com/maps?q=Chichaoua&t&z=9&ie=UTF8" target='_blank' rel='noreferrer'>
                  Chichaoua Marrakech Morocco
                </a>
                </p>
            </div>
            <div className="email">
              <h4>Email:</h4>
              <p>{EMAIL}</p>
            </div>

            <div className="phone">
              <h4>Call:</h4>
              <p>{TEL}</p>
            </div>
          </div>
      </div>
    </section>
    );
}

export default Contact;
