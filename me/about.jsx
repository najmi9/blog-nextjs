import Image from 'next/image';
import { EMAIL, SITE, TEL } from '../config';
import img from '../public/imgs/profile/profile-img.jpg';

const About = () => {

    return (
      <section id="about" className="about">
      <div className="container">

        <div className="section-title">
          <h2>About</h2>
          <p>
          Hi, my name is IMAD Najmi, I am from Morocco, I am 23 years old, I am a PHP Symfony developer,  I've been doing Symfony every day for two years, 
          I work also with Javascript, I have some experience in ReactJS, I use bootstrap, I integrate bootstrap templates in my Symfony back-end.
          <br/>
          I am a guy who loves technologies, I am a big fan of Linux world, I use Docker in my development environment and I know what I need in git and github.<br />
    
          I love Restful APIs, I use API-PLATFORM framework the friend of Symfony, I'm familiar with React Admin to generate amazing admin dashboards,
          I use Messenger component of Symfony to do asynchronous jobs with redis server, I use also Mercure protocol to push data to clients in real time.
          </p>
        </div>
        <div className="row">
          <div className="col-lg-4" data-aos="fade-right">
            <Image src={img} className="img-fluid" alt="Imad Najmi" />
          </div>
    
          <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
            <h3>Symfony PHP Developer.</h3>
            <p className="fst-italic">
              I'm dynamic, I learn quickly, I love work in teams and make new things.
            </p>
            <div className="row">
              <div className="col-lg-6">
                <ul>
                  <li><i className="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>22 March 1999</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Website:</strong> <span><a href={SITE}>{SITE}</a></span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Mobile Phone:</strong> <span>{TEL}</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>Morocco Marrakech Chichaoua</span></li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Physics Bachelor Degree</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Address Email:</strong> <span>
                      <a href={"mailto:"+EMAIL}>{EMAIL}</a></span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Github:</strong> <span><a href="https://github.com/najmi9">https://github.com/najmi9</a></span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Languages:</strong> <span>English, French, Arabic</span></li>
                </ul>
              </div>
            </div>
            <p>
            You can see my Upwork profile: <a href="https://www.upwork.com/freelancers/~01a391792ec0fb762e">@here.</a>
            </p>
          </div>
        </div>

        {/* <div className="d-flex justify-content-center">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/WJL9VCwBPDc" title="YouTube video player" frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
          </iframe>
        </div> */}
      </div>
    </section>
    );
}

export default About;
