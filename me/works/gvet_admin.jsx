import React from 'react';
import Work from '../../components/Work';

const GvetAdmin = () => {
    const images = [
        {
            original: "imgs/work/gvet_admin/th.webp"
        }
    ];
    return (
        <Work
            images={images}
            title="Admin application written with React JS"
            tags={['PHP', 'Symfony', 'Bootstrap', 'Chart js', 'API Platform', 'ReactJS']}
            date="16:25 11/01/2020"
            text="I created this React JS application for an admin to control data from different servers."
        />
    );
}

export default GvetAdmin;
