import React from 'react';
import styled from 'styled-components';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

export default function HomeCenter() {
    return (
        <Center>
            <Header1>
                Unlimited movies, TV shows and more.
            </Header1>
            <Header2>
                Watch anywhere. Cancel anytime.
            </Header2>
            <Header3>
                Ready to watch? Enter your email to create or restart your membership.
            </Header3>
            <Group>
                <Email id="email" placeholder="Email address"/>
                {/* <EmailLabel for="email">Email address1</EmailLabel> */}
                <GetStarted>
                    <Span>Get Started</Span>
                    <ArrowForwardIosIcon />
                </GetStarted>
            </Group>
        </Center>
    )
}


const Center = styled.div`
    color : white;
    margin: auto;
    width: 70%;
    padding-top: 125px;
    padding-bottom: 125px;
`;

const Header1 = styled.h1`
    font-size: 3.125rem;
`;

const Header2 = styled.h2`
    font-size: 1.625rem;
    font-weight: 500;
`;

const Header3 = styled.h3`
    font-size: 1.2rem;
    font-weight: 400;
`;

const Email = styled.input`
    font-size: 20px;
    width: 50%;
    padding : 20px;
`;

const EmailLabel = styled.label`
    padding: 12px;
    pointer-events: none;
    position:absolute;
    left:0;
    top:0;
    transition: 0.2s;
    transition-timing-function: ease;
    transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);
    opacity:0.5;
    color: #8c8c8c;
`;

const Group = styled.div`
    margin: 20px 0;
    position: relative;
    display: flex;
    justify-content: center;
`;

const GetStarted = styled.button`
    width : 25%;
    border-radius: 3px;
    border: none;
    background-color : #e50815;
`;

const Span = styled.span`
    font-size: 1.625rem;
`;