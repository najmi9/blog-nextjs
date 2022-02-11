import Image from 'next/image';
// import img from '../public/imgs/korimi.jpg';

const About = () => {

    return (
      <section id="about" className="about">
      <div className="container">

        <div className="section-title">
          <h2>About</h2>
          <p>
          My favorite framworks are Symfony and React JS, I've been doing Symfony every day for two years, I use also NextJS, I make Restful APIs that respects the common best practices,
          I use API-PLATFORM library, I'm familiar with React Admin to generate amazing admin interfaces, for the design and styling I use mostly bootstrap and I am good
          at integrating themes and templates to Symfony projects through webpack enecore.
          </p>
        </div>

        <div className="row">
          <div className="col-lg-4" data-aos="fade-right">
{/*             <Image src={img} className="img-fluid" alt="Imad Najmi" />
 */}          </div>
          <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
            <h3>Symfony PHP Developer.</h3>
            <p className="fst-italic">
              I'm dynamic, I learn quickly, I love work in teams and make new things.
            </p>
            <div className="row">
              <div className="col-lg-6">
                <ul>
                  <li><i className="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>22 March 1999</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Website:</strong> <span>najmidev.tch</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Mobile Phone:</strong> <span>+212 07 62 95 17 42</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>Morocco Marrakech Chichaoua</span></li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Physics Bachelor Degree</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Address Email:</strong> <span>imadnajmi9@gmail.com</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span></li>
                </ul>
              </div>
            </div>
            <p>
            For the languages, I am from Morocco, so I speak Arabic, Frensh and English, and I can understand Spanish too. You can see my Upwork profile
            <a href="https://www.upwork.com/freelancers/~01a391792ec0fb762e">@here.</a>
            </p>
          </div>
        </div>

      </div>
    </section>
    );
}

export default About;
