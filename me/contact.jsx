import React from 'react';
import { EMAIL, TEL } from '../config';

const Contact = () => {

    return (
        <section id="contact" className="contact">
      <div className="container">

        <div className="section-title">
          <h2>Contact</h2>
        </div>

        <div className="row" data-aos="fade-in">

          <div className="col-lg-5 d-flex align-items-stretch">
            <div className="info">
              <div className="address">
                <i className="bi bi-geo-alt"></i>
                <h4>Location:</h4>
                <p>Morocco Marrakech Chichaoua Sidi El Mokhtar</p>
              </div>

              <div className="email">
                <i className="bi bi-envelope"></i>
                <h4>Email:</h4>
                <p>{EMAIL}</p>
              </div>

              <div className="phone">
                <i className="bi bi-phone"></i>
                <h4>Call:</h4>
                <p>{TEL}</p>
              </div>
            </div>
          </div>

            <div className="col-lg-7 d-flex align-items-stretch">
              <iframe width="844" height="498" id="gmap_canvas" src="https://maps.google.com/maps?q=Chichaoua%20sidi%20el%20mokhtar&t=&z=9&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" />
            </div>


        </div>

      </div>
    </section>
    );
}

export default Contact;
