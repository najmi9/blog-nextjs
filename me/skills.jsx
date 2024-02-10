import React from 'react';

const Skills = () => {

    return (
    <section id="skills" className="skills">
      <div className="container">

        <div className="section-title">
          <h2>Skills</h2>
        </div>

        <div className="row skills-content">

          <div className="col-lg-6">

            <div className="progress">
              <span className="skill">Python & Flask <i className="val">75%</i></span>
              <div className="progress-bar-wrap">
                  <div style={{"height": "10px", "width": "75%", backgroundColor: '#173b6c'}}></div>
              </div>
            </div>

            <div className="progress">
              <span className="skill">HTML && CSS <i className="val">80%</i></span>
                <div className="progress-bar-wrap">
                  <div style={{"height": "10px", "width": "80%", backgroundColor: '#173b6c'}}></div>
                </div>
            </div>

            <div className="progress">
              <span className="skill">JavaScript & React JS <i className="val">80%</i></span>
              <div className="progress-bar-wrap">
                <div style={{"height": "10px", "width": "80%", backgroundColor: '#173b6c'}}></div>
              </div>
            </div>

            <div className="progress">
              <span className="skill">ChainLang & ChatGPT<i className="val">90%</i></span>
              <div className="progress-bar-wrap">
                <div style={{"height": "10px", "width": "90%", backgroundColor: '#173b6c'}}></div>
              </div>
            </div>

          </div>

          <div className="col-lg-6">

            <div className="progress">
              <span className="skill">PHP & Symfony <i className="val">95%</i></span>
              <div className="progress-bar-wrap">
                <div style={{"height": "10px", "width": "95%", backgroundColor: '#173b6c'}}></div>
              </div>
            </div>

            <div className="progress">
              <span className="skill">Api Platform Library<i className="val">95%</i></span>
              <div className="progress-bar-wrap">
                <div style={{"height": "10px", "width": "85%", backgroundColor: '#173b6c'}}></div>
              </div>
            </div>

            <div className="progress">
              <span className="skill">Linux, Docker, Jenkins<i className="val">70%</i></span>
              <div className="progress-bar-wrap">
                <div style={{"height": "10px", "width": "70%", backgroundColor: '#173b6c'}}></div>
              </div>
            </div>
            <div className="progress">
              <span className="skill">AWS Cloud<i className="val">70%</i></span>
              <div className="progress-bar-wrap">
                <div style={{"height": "10px", "width": "80%", backgroundColor: '#173b6c'}}></div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
    );
}

export default Skills;
