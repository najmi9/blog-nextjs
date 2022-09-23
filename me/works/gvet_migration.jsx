import React from 'react';
import Work from '../../components/Work';

const GvetMigration = () => {
    const images = [
        {
            original: "imgs/work/gvet_core/0.png"
        },{
            original: "imgs/work/gvet_core/1.png"
        },{
            original: "imgs/work/gvet_core/2.png"
        },{
            original: "imgs/work/gvet_core/3.png"
        }
    ];
    return (
        <Work
            images={images}
            title="Software of veterinaries management"
            link='https://www.gvetsoft.com/'
            tags={['PHP', 'Symfony', 'Twig', 'Doctrine ORM', 'Bootstrap', 'Mercure', 'Redis', 'Chart js', 'API Platform']}
            date="16:25 11/01/2020"
            text="The veterinary will be able to request access to a vet online to take the management of your customers
             and the control of the medical history of their patients. Controlling hospital admissions, upload files, add complementary
             methods and many things more. You can also see and communicate with people applying for help at an emergency room and see statistics of
             the progress of your business."
        />
    );
}

export default GvetMigration;
