import React, {useState} from 'react';
import styled from 'styled-components';
import ImageCard from "./ImageCard";
import Zoom from "./Zoom";

export default function Card({scroll}) {
    const [isHovered, setIsHovered] = useState(scroll);
    const setIsHoveredTrue = () => {
        setIsHovered(true)
    }
    return (
        <Wrapper>
            <ImageCard setIsHovered={setIsHoveredTrue}/>
            {isHovered && <Zoom setIsHovered={setIsHovered}/>}
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 225px;
    margin: 0.25em;
`;