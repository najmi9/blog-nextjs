import React from 'react';
import Work from '../../components/Work';

const GVETMarketplace = () => {
    const images = [
        {
            original: "imgs/work/gvet_market/0.png"
        },{
            original: "imgs/work/gvet_market/1.png"
        },{
            original: "imgs/work/gvet_market/2.png"
        },{
            original: "imgs/work/gvet_market/3.png"
        },{
            original: "imgs/work/gvet_market/4.png"
        },{
            original: "imgs/work/gvet_market/5.png"
        }
    ];
    return (
        <Work
            images={images}
            title="Marketplace Symfony Application"
            link=''
            tags={['PHP', 'Symfony', 'Mercure', 'Redis', 'API Platform', 'Elasticsearch', 'Linux']}
            date="16:25 11/01/2021"
            text="Marketplace when sellers can sell multiple products, a user can sign up and buy an order,
            follow the status of his order and see tracking data. the seller has a dashboard when he can manage orders and payments,
            the admin has also a dashboard when he can approve the a store or remove it,
            the sellers will pay an invoice of each months that depends on how many products they bought."
        />
    );
}

export default GVETMarketplace;
