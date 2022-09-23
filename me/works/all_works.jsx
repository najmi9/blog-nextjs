import React from 'react';
import Calculators from './calculators';
import GVETMarketplace from './gvet_marketplace';
import GvetMigration from './gvet_migration';
import ShopSymfony from './symfony_shop';
import YoutubeDl from './youtube_dl';
import Chat from './chat';
import SiteBV from './sitebv';
import GvetAdmin from './gvet_admin';

const AllWorks = () => {

    return (
        <div className="row" data-aos="fade-in">
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
                <Calculators />
              </Col>
              <Col>
                <SiteBV />
              </Col>
              <Col>
                <Chat />
              </Col>
              <Col>
                <ShopSymfony />
              </Col>
              <Col>
                <YoutubeDl />
              </Col>
            </div>
    );
}

const Col = ({children}) => {
  return (
    <div className="col-xl-3 col-lg-4 col-md-6 mt-2">
      {children}
    </div>
  )
}

export default AllWorks;
