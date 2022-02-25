import React from 'react';
import Work from '../../components/Work';

const GvetAdmin = () => {
    const images = [
        {
            original: "imgs/work/gvet_admin/vet_show_page.png"
        },{
            original: "imgs/work/gvet_admin/vet_list.png"
        },{
            original: "imgs/work/gvet_admin/reports.png"
        },{
            original: "imgs/work/gvet_admin/payment_form.png"
        },{
            original: "imgs/work/gvet_admin/login.png"
        }
    ];
    return (
        <Work 
            images={images}
            title="Admin application with React JS"
            tags={['PHP', 'Symfony', 'Bootstrap', 'Chart js', 'API Platform', 'HttpFoundation Bundle', 'ReactJS']}
            date="16:25 11/01/2020"
            text="Back-end with API Platform framework, the front-end is in React JS, I use bootstrap to style the platform,
            the admin can see data, edit and delete data from the database."
        />
    );
}

export default GvetAdmin;