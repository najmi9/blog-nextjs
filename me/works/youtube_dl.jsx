import React from 'react';
import Work from '../../components/Work';

const YoutubeDl = () => {
    const images = [
        {
            original: "imgs/work/youtube_dl/home.png"
        },
    ];
    return (
        <Work
            images={images}
            title="Download videos from youtube tool"
            link='https://github.com/najmi9/youtube-dl-symfony'
            tags={['Symfony', 'Mercure', 'Process Component', 'Messenger']}
            date="17:25 27/08/2022"
            text="Use youtube-dl to download videos or convert them to an audio from youtube with symfony
            and show real time progress of the video downloading status with Mercure protocol"
        />
    );
}

export default YoutubeDl;
