import React from 'react'
import styled from 'styled-components';
import HomeHeader from './HomeHeader';
import HomeCenter from './HomeCenter';
import HomeBottom from "./HomeBottom";
import Card from "./Card";

export default function Welcome() {
    return (
        <WelcomePage>
            <HomeComponent>
                {/* <StoryBackground >
                    <BackgroundImage src="./images/netflix_home_bg.jpeg" />
                    <Gradient />
                </StoryBackground> */}
                <Top>
                    <HomeHeader />
                    <HomeCenter />
                </Top>
            </HomeComponent>
            <FadeBottom />
            <HomeBottom 
                title="Enjoy on your TV."
                subTitle="Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more."
                video="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v"
                image="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" />
            <HomeBottom 
                title="Download your shows to watch offline."
                subTitle="Save your favourites easily and always have something to watch."
                addon={true}
                image="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
                reverse={true} />
            <HomeBottom 
                title="Watch everywhere."
                subTitle="Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV."
                video="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v"
                image="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png" 
                videoMarginTop = "-446px"
                videoWidth="83%"/>
            <HomeBottom 
                title="Create profiles for children."
                subTitle="Send children on adventures with their favourite characters in a space made just for them—free with your membership."
                
                image="https://occ-0-2186-2164.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABVxdX2WnFSp49eXb1do0euaj-F8upNImjofE77XStKhf5kUHG94DPlTiGYqPeYNtiox-82NWEK0Ls3CnLe3WWClGdiJP.png?r=5cf"
                reverse={true} />
        </WelcomePage>
    )
}

const WelcomePage = styled.div`
    text-align: center;
    background-image: linear-gradient(to top,rgba(0,0,0,.8) 0,rgba(0,0,0,0) 60%,rgba(0,0,0,.8) 100%), url('./images/netflix_home_bg.jpeg');
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    
`;

const FadeBottom = styled.div`
    background: linear-gradient(to bottom, transparent, rgba(37, 37, 37, 0.61), #111)
`;

const HomeComponent = styled.div`
    // background:url('./images/netflix_home_bg.jpeg');
    position: relative;
    border-bottom: 8px solid #222;
`;

const BackgroundImage = styled.img`
    height : 705px;
    width : 100%;
`;

const StoryBackground = styled.div`
    height : 0px;
    z-index : 0;
`;

const Gradient = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-image: linear-gradient(to top,rgba(0,0,0,.8) 0,rgba(0,0,0,0) 60%,rgba(0,0,0,.8) 100%);
`;

const Top = styled.div`
    position: relative;
    z-index : 99;
`;