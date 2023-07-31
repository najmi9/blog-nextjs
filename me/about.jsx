import { EMAIL, SITE, TEL } from '../config';

const About = () => {
    const ChevronRight = <svg width="16px" height="16px" viewBox="0 0 16 16" fill="currentColor"><path fillRule="evenodd" clipRule="evenodd" d="M10.072 8.024L5.715 3.667l.618-.62L11 7.716v.618L6.333 13l-.618-.619 4.357-4.357z"/></svg>;
    return (
      <section id="about" className="about">
      <div className="container">

        <div className="section-title">
          <h2>About</h2>
          <div className="row">
            <div className="col-lg-6">
              <ul>
                <li>I've been doing web development for more than 4 years.</li>
                <li>I use PHP, Python and <b>Javascript</b>.</li>
                <li>
                  I am experienced with <a href="https://symfony.com/" target={'_blank'}><b>
                  Symfony </b> </a> and <a href="https://flask.palletsprojects.com/" target={'_blank'}><b> Flask</b>
                  </a>.
                </li>
                <li>I have done some project with <a href="https://reactjs.org/" target={'_blank'}><b>React JS</b></a> and Bootstrap.</li>
                <li>
                    I have <a href="https://openai.com/" target={'_blank'}>
                      <b>ChatGpt/</b>
                      </a><a href="https://python.langchain.com/docs/get_started/introduction.html" target={'_blank'}><b>LangChain</b></a> skills:
                    <ul>
                      <li>✅Models - LLMs and Chat Models</li>
                      <li>✅Text Splitting & Embedding</li>
                      <li>✅VectorStores (Pinecone, ChrimaDB, PGVector ...)</li>
                      <li>✅Agents & Toolkits - LLM & Conversation Agents & OpenAI Agents</li>
                    </ul>

                </li>
                <li>I love Tech and IT: <b>Linux</b>, <b>Docker</b>, <b>Git</b>.</li>
                <li>Experienced in <a href="https://api-platform.com/">API-PLATFORM</a> framework.</li>
                <li>I use <a href="https://mercure.rocks/">Mercure Protocol</a> to do real time stuff.</li>
                <li>Familiar with <b>PHPUnit</b> and functional tests</li>
              </ul>
            </div>
            <div className="col-lg-6">
              <div className="d-flex align-items-center justify-content-between">
                <img src="imgs/symfony_stack/php.svg" alt="PHP" />
                <img src="imgs/symfony_stack/python.svg"  width={60} height={60} alt="Python" />
                <img src="imgs/symfony_stack/javascript.svg" width={60} height={60} alt="Javascript" />
                <img src="imgs/symfony_stack/sf.svg"  width={60} height={60} alt="Symfony Framework" />
                <img src="imgs/symfony_stack/flask.svg"  width={60} height={60} alt="Flask Framework" />
                <img src="imgs/chain.png"  width={60} height={60} alt="ChainLang" />
              </div>
              <div className="d-flex align-items-center justify-content-between">
                <img src="imgs/symfony_stack/git.svg" width={60} height={60} alt="Git Github" />
                <img src="imgs/symfony_stack/docker.svg"  width={60} height={60} alt="Docker Compose" />
                <img src="imgs/symfony_stack/redis.svg"  width={60} height={60} alt="Redis Server" />
                <img src="imgs/symfony_stack/react.svg" width={60} height={60}  alt="React JS" />
                <img src="imgs/symfony_stack/api.svg" width={60} height={60} alt="Api Platform" />
                <img src="imgs/chatgpt-openai.webp" width={60} height={60} alt="ChatGPT" />
              </div>
            </div>
          </div>
        </div>
        <div className="row d-flex align-items-center">
          <div className="col-lg-4">
            <img src='imgs/profile/profile-img.jpg' className="img-fluid" alt="Imad Najmi" />
          </div>

          <div className="col-lg-8 pt-4 pt-lg-0 content">
            <h3>Symfony PHP Developer</h3>
            <p className="fst-italic">
              I'm dynamic, I learn quickly, I love work in teams and make new things.
            </p>
            <div className="row">
              <div className="col-lg-6">
                <ul>
                  <li>{ ChevronRight} <strong>Birthday:</strong> <span>22 March 1999</span></li>
                  <li>{ ChevronRight}
                    <strong>Website:</strong>
                    <span><a href={'https://' + SITE}>{SITE}</a></span>
                  </li>
                  <li>{ ChevronRight} <strong>Mobile Phone:</strong> <span>{TEL}</span></li>
                  <li>{ ChevronRight} <strong>City:</strong> <span>Morocco Marrakech Chichaoua</span></li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  <li>{ ChevronRight} <strong>Degree:</strong> <span>Physics Bachelor Degree</span></li>
                  <li>{ ChevronRight} <strong>Address Email:</strong> <span>
                      <a href={"mailto:"+EMAIL}>{EMAIL}</a></span></li>
                  <li>{ ChevronRight} <strong>Github:</strong> <span><a href="https://github.com/najmi9">https://github.com/najmi9</a></span></li>
                  <li>{ ChevronRight} <strong>Languages:</strong> <span>English, French, Arabic</span></li>
                </ul>
              </div>
            </div>
            <p>
              You can see my Upwork profile: <a href="https://www.upwork.com/freelancers/~01a391792ec0fb762e" target='_blank' rel='noreferrer'>@here.</a> <br/>
              Or on Youtube: <a href="https://www.youtube.com/watch?v=WJL9VCwBPDc" title='Imad Najmi' target='_blank' rel='noreferrer'>@here.</a>
            </p>
          </div>
        </div>

        {/* <div className="d-flex justify-content-center mt-2">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/WJL9VCwBPDc" title="Imad Najmi SYmfony Developer" frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
          </iframe>
        </div> */}
      </div>
    </section>
    );
}

export default About;
