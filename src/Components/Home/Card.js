import React from 'react'
import styled from 'styled-components';

export default function Card() {
    return (
        <Parent>
            <Left>
                <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png" width="70" height="85"/>
            </Left>
            <Center>
                <CenterTitle>
                    Stranger Things
                </CenterTitle>
                <CenterSubTitle>
                    Downloading...
                </CenterSubTitle>
            </Center>
            <Right>
                <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/download-icon.gif" width="50" height="50"/>
            </Right>
        </Parent>
    )
}
const Left = styled.div`
    margin: 0 1em 0 0; 
`
const Center = styled.div`
    margin: 1em 0 0 -4em;
    text-align: left;
`;
const CenterTitle = styled.div`
    font-size: 1em;
    font-weight: 700;
`;
const CenterSubTitle = styled.div`
    color: #0071eb;
`;
const Right = styled.div`
    margin: 1em 0 0 0;
`;
const Parent = styled.div`
    display: flex;
    width: 60%;
    justify-content: space-between;
    background: black;
    color: white;
    height: 90px;
    border-radius: 0.8rem;
    border: 2px solid #404040;
    margin: -7em 0 0 8em;
    z-index: 100;
    position: relative
`;