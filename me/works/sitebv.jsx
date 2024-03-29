import React from 'react';
import Work from '../../components/Work';

const SiteBV = () => {
    const images = [
        {
            original: "imgs/work/site_bv/sitebv.png"
        },
    ];
    return (
        <Work
            images={images}
            title="The all-in-one domain name and web hosting solution"
            link='https://site.eu'
            tags={['Linux', 'PHP', 'Docker']}
            date="17:25 27/09/2022"
            text="I am hired as a backend developer, I worked on creating REST APIs that will be consumed by the client side"
        />
    );
}

export default SiteBV;
