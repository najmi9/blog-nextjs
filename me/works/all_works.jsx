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
        <>
          <div className="row">
            <div className="col-lg-6">

            <div className="d-flex justify-content-center">
            <YoutubeVideo videoId="RcfVBRhZHVs" />
          </div>


            </div>
            <div className="col-lg-6">

            <div className="d-flex justify-content-center">
              <YoutubeVideo videoId="sueVDVQUkls" />
            </div>
            </div>
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
        </>
    );
}

const Col = ({children}) => {
  return (
    <div className="col-xl-3 col-lg-4 col-md-6 mt-2" style={{zIndex: 0}}>
      {children}
    </div>
  )
}


// component that display a youtube video on a iframe
function YoutubeVideo({videoId}) {
  return (
    <iframe
      width="700"
      height="400"
      src={`https://www.youtube.com/embed/${videoId}`}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  );
}
export default AllWorks;
