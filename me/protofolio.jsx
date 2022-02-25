import React from 'react';
import GvetAdmin from './works/gvet_admin';
import GVETMarketplace from './works/gvet_marketplace';
import GvetMigration from './works/gvet_migration';

const Protofolio = () => {

    return (
        <section id="portfolio" className="portfolio section-bg">
      <div className="container">

        <div className="section-title">
          <h2>Portfolio</h2>
        </div>

        <div className="row">
          <div className="col">
            <GvetMigration />
          </div>
          <div className="col">
            <GVETMarketplace />
          </div>
          <div className="col">
            <GvetAdmin />
          </div>
        </div>
      </div>
    </section>
    );
}

export default Protofolio;
