import React from 'react';
import styled from 'styled-components';
import Video from "./Video";
import Card from "./Card";


export default function HomeBottom({title, subTitle, image, video, reverse = false, addon = false, videoMarginTop, videoWidth}) {
//https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
    const Home = styled.div`
        display: flex;
        background-color : #040404;
        color : #fff;
        border-bottom: 8px solid #222;
        ${reverse && `flex-direction: row-reverse;`}
    `;

    return (
        <Home >
            <Left >
                <Header1>
                    {title}
                </Header1>
                <Header2>
                    {subTitle}
                </Header2>
            </Left>
            <Right >
                <Image alt="" src={image} />
                {video && <Video source={video} width={videoWidth} marginTop={videoMarginTop} />}
                {addon && <Card />}
            </Right>
        </Home>
    )
}


const Left = styled.div`
    margin: 8% 6%;
    text-align: left;

`;

const Right = styled.div`
    
`;

const Header1 = styled.h1`
    font-size: 3.125rem;
`;

const Header2 = styled.h2`
    font-size: 1.625rem;
    font-weight: 500;
`;



const Image = styled.img`
    z-index:99;
    position: relative;
`;