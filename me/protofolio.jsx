import React from 'react';
import Calculators from './works/calculators';
import Chat from './works/chat';
import GvetAdmin from './works/gvet_admin';
import GVETMarketplace from './works/gvet_marketplace';
import GvetMigration from './works/gvet_migration';
import ShopSymfony from './works/symfony_shop';

const Protofolio = () => {

    return (
        <section id="portfolio" className="portfolio">
        <div className="container">
            <div className="section-title">
              <h2>Portfolio</h2>
            </div>

            <div className="row">
              <Col>
                <GvetMigration />
              </Col>
              <Col>
                <GVETMarketplace />
              </Col>
              <Col>
                <GvetAdmin />
              </Col>
              <Col>
                <Calculators/>
              </Col>
              <Col>
                <Chat/>
              </Col>
              <Col>
                <ShopSymfony/>
              </Col>
            </div>
          </div>
      </section>
    );
}

const Col = ({children}) => {
  return (
    <div className="col-lg-4 col-md-6 mt-2">
      {children}
    </div>
  )
}

export default Protofolio;
