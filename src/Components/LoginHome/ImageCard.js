import React, {useState} from 'react';
import styled from 'styled-components';


export default function ImageCard({setIsHovered}) {
    let timer = null;
    const handleMouseEnter = () => {
        timer = setTimeout(()=>setIsHovered(true), 800);
    }
    const handleMouseLeave = () => {
        clearTimeout(timer);
    }
    return (
        <Box onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <Image src="https://occ-0-2186-2164.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABZKKD6oX8un702f4IgP8GUR4JaSfD08LabACmH6vlei9pdFSRa78nTs9SWlAbjyU38DWLhmrI901p05qa1KejG3Cf_qUrDsLS7qg4WOLVpAvjBh7bw-cik1-widd1TphmwhQGts_6vlbSlvpI7G0ASCtCIY.webp?r=75b"
                width="225"
                height="125"
            />
        </Box>
    )
}

const Box = styled.div`
    width: 225px;
    height: 125px;
    // position: absolute;
    z-index: -1;
`;

const Image = styled.img`
    border-radius: 3px;
`;