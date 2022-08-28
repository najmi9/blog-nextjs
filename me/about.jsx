import { EMAIL, SITE, TEL } from '../config';

const About = () => {

    return (
      <section id="about" className="about">
      <div className="container">

        <div className="section-title">
          <h2>About</h2>
          <div className="row">
            <div className="col-lg-6" data-aos="fade-right">
              <ul>
                <li>I've been doing web development every day since 2019.</li>
                <li>I use PHP, <a href="https://symfony.com/">Symfony</a> and <b>Javascript</b>.</li>
                <li>I have done some project with React JS and Bootstrap.</li>
                <li>I love Tech and IT: <b>Linux</b>, <b>Docker</b>, <b>Git</b>.</li>
                <li>Experienced in <a href="https://api-platform.com/">API-PLATFORM</a> framework.</li>
                <li>I use <a href="https://mercure.rocks/">Mercure Protocol</a> to do real time stuff.</li>
                <li>Familiar with <b>PHPUnit</b> and functional tests</li>
              </ul>
            </div>
            <div className="col-lg-6" data-aos="fade-left">
              <div className="d-flex align-items-center justify-content-between">
                <img src="imgs/symfony_stack/sf.svg"  width={60} height={60} alt="Symfony Framework" />
                <img src="imgs/symfony_stack/php.svg"  alt="PHP" />
                <img src="imgs/symfony_stack/redis.svg"  width={60} height={60} alt="Redis Server" />
                <img src="imgs/symfony_stack/twig.svg"  width={60} height={60} alt="Twig Template" />
                <img src="imgs/symfony_stack/docker.svg"  width={60} height={60} alt="Docker Compose" />
                <img src="imgs/symfony_stack/webpack.svg" width={60} height={60} alt="Webpack Encore" />
              </div>
              <div className="d-flex align-items-center justify-content-between">
                <img src="imgs/symfony_stack/react.svg" width={60} height={60}  alt="React JS" />
                <img src="imgs/symfony_stack/javascript.svg" width={60} height={60} alt="Javascript" />
                <img src="imgs/symfony_stack/css.svg" width={60} height={60} alt="CSS3" />
                <img src="imgs/symfony_stack/git.svg" width={60} height={60} alt="Git Github" />
                <img src="imgs/symfony_stack/bootstrap-4.svg" width={60} height={60} alt="Bootstrap 5" />
                <img src="imgs/symfony_stack/api.svg" width={60} height={60} alt="Api Platform" />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4" data-aos="fade-right">
            <img src='imgs/profile/profile-img.jpg' className="img-fluid" alt="Imad Najmi" />
          </div>

          <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
            <h3>Symfony PHP Developer</h3>
            <p className="fst-italic">
              I'm dynamic, I learn quickly, I love work in teams and make new things.
            </p>
            <div className="row">
              <div className="col-lg-6">
                <ul>
                  <li><i className="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>22 March 1999</span></li>
                  <li><i className="bi bi-chevron-right"></i>
                    <strong>Website:</strong>
                    <span><a href={'https://' + SITE}>{SITE}</a></span>
                  </li>
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

        <div className="d-flex justify-content-center mt-2">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/WJL9VCwBPDc" title="Imad Najmi SYmfony Developer" frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
          </iframe>
        </div>
      </div>
    </section>
    );
}

export default About;
