import React from 'react';
import Work from '../../components/Work';

const Chat = () => {
    const images = [
        {
            original: "imgs/work/chat/chat.png"
        }
    ];
    return (
        <Work
            images={images}
            title="Real Time Chat Built With React JS and Mercure"
            link='https://github.com/najmi9/mercure_symfony_blog'
            tags={['Symfony', 'Twig', 'Doctrine ORM', 'Messenger', 'Bootstrap', 'Mercure', 'React', 'SSE']}
            date="22:25 10/01/2021"
            text="Real time chat with Mercure and React, so any user can create a conversation and
            send messages to another user in live."
        />
    );
}

export default Chat;
