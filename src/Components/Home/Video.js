import React from 'react'
import styled from 'styled-components';
//"https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v"
export default function Video({source, width, marginTop}) {
    const VideoEle = styled.div`
        position: absolute;
        z-index: 1;
        margin-top: ${marginTop ? marginTop : `-390px`};
        margin-left: 84px;
    `;

    return (
        <VideoEle>
            <video class="our-story-card-video" autoplay="" playsinline="" muted="" loop="" width={width}>
                <source src={source} type="video/mp4" />
            </video>
        </VideoEle>
    )
}

