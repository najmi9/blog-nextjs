import React from 'react';
import Work from '../../components/Work';

const ShopSymfony = () => {
    const images = [
        {
            original: "imgs/work/shop-symfony/3.png"
        },
        {
            original: "imgs/work/shop-symfony/1.png"
        },
        {
            original: "imgs/work/shop-symfony/2.png"
        },
        {
            original: "imgs/work/shop-symfony/4.png"
        },
        {
            original: "imgs/work/shop-symfony/5.png"
        },
        {
            original: "imgs/work/shop-symfony/6.png"
        }
    ];
    return (
        <Work
            images={images}
            title="Ecommerce website with Symfony"
            link='https://weshopnow.herokuapp.com/'
            tags={['Symfony', 'Twig', 'Doctrine ORM', 'Messenger', 'Bootstrap', 'AJAX']}
            date="16:25 30/11/2019"
            text="Modern shop developed by symfony and Bootstrap, with the
            implantation of Paypal and Stripe, a user can buy products, add a product 
            to the card and like it, and give a better experience to the users by using ajax.
            integrating also the administration dashboard when the admin can do anything,
            and the reports page with beautiful graphs showing the statistics of the website."
        />
    );
}

export default ShopSymfony;