import React from 'react';
import styled from 'styled-components';

export default function HomeHeader() {
    return (
        <Header>
            <HeaderLeft>
                <Logo src="./images/netflix-logo.svg"/>
            </HeaderLeft>
            <HeaderRight>
                <Language>
                    <LanguageSelect>
                        <option>English</option>
                        <option>Hindi</option>
                    </LanguageSelect>
                </Language>
                <Login href="/login">Sign In</Login>
            </HeaderRight>
        </Header>
    )
}


const Header = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 52px;
    position: relative
    z-index: 999;
`;

const HeaderRight = styled.div`
    display: flex;
`;

const Login = styled.a`
    padding: 7px 17px;
    background-color : #e50914;
    border-radius: 3px;
    color: white;
    font-weight: 400;
    font-size: 1rem;
    line-height: normal;
    text-decoration: none;
`;

const Language = styled.div`
    display: inline-block;
    margin: 0 .75rem;
`;

const LanguageSelect = styled.select`
    padding : 10px;
    color: white;
    background: rgba(0,0,0,.4);
`;

const HeaderLeft = styled.div`
    color: white;
`;

const Logo = styled.img`
    fill: red;
    width: 8.375rem;
    height: 2.25rem;
`;