import React, { useState } from 'react';
import styled from 'styled-components';
import Card from './Card';


export default function Slider() {
    const [showExploreAll, setShowExploreAll] = useState(false);
    return (
        <Wrapper>
            <SliderHeading onMouseLeave={()=>setShowExploreAll(false)}>
                <Heading onMouseEnter={()=>setShowExploreAll(true)} >
                    Only on Netflix
                </Heading>
                {
                    showExploreAll &&
                    <Explore onMouseEnter={()=>setShowExploreAll(true)} onMouseLeave={()=>setShowExploreAll(false)}>
                        Explore All 
                    </Explore>
                }
                
            </SliderHeading>
            <SliderWrapper >
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </SliderWrapper>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    margin: 0 0 0 3em;
`;
const Heading = styled.div`
    font-size : 1.5em;
    font-weight: 500;
`;
const Explore = styled.div`
    margin: 8px 0 0 1em;
    text-align: bottom;
`;
const SliderHeading = styled.div`
    text-align: left;
    display: flex;
`;

const SliderWrapper = styled.div`
    display: flex;
    flex-direction: row;
    margin: 1em 0 0 0;
    overflow: scroll;
`;