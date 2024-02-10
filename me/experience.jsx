import React from 'react';

const Experience = () => {
    return (
        <section id="experience" className="experience">
        <div className="container">
          <div className="section-title">
            <h2>Experience</h2>
          </div>
          <div>
            <ul>
              <li className='border-bottom mb-2'>
                <div className="row">
                  <div className="col-9">
                    <p>From June, 2023 To Present:</p>
                    <p><b>Back end Developer At <em>Passportscan Cloud Company</em></b></p>
                    <p>71-75 Shelton Street - Covent Garden
                      London WC2H 9JQ
                    </p>
                  </div>
                  <div className="col-3">
                    <img src="imgs/companies/primary_white_logo_PS.svg" width="150px" height="120px" alt="" />
                  </div>
                </div>
              </li>
              <li className='border-bottom mb-2'>
                <div className="row">
                  <div className="col-9">
                    <p>From 8th of September, 2021 To 20th of June, 2023:</p>
                    <p><b>Back end Developer At <em>Internet Company Site BV</em></b></p>
                    <p>P.J. Oudweg 4, 1314 CH Almere, Netherland</p>
                  </div>
                  <div className="col-3">
                      <img src="imgs/companies/logo-eu.svg" width="150px" class="bg-light" height="120px" alt="" />
                  </div>
                </div>
              </li>
              <li className='border-bottom mb-2'>
                <div className="row">
                  <div className="col-9">
                    <p>From 23 of October, 2020 To September, 2021:</p>
                    <p><b>PHP & FRONT END DEVELOPER At <em>GVET SOFT</em></b></p>
                    <p>Mar del plata, Buenos Aires 7600, Argentina</p>
                  </div>
                  <div className="col-3">
                    <img src="imgs/companies/logo_dark_bordered.a2e1bddd.png" width="150px" height="120px" alt="" />
                  </div>
                </div>
              </li>
              <li className='border-bottom mb-2'>
                <div className="row">
                  <div className="col-9">
                    <p>2019 To September, 2020:</p>
                    <p><b>Freelancer state At <em>Upwork</em></b></p>
                    <p>I do small tasks for client around the world</p>
                  </div>
                  <div className="col-3">
                    <img src="imgs/companies/Upwork.svg" width="150px" height="120px" alt="" />
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

    );
}

export default Experience;
