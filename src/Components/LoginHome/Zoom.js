import React from 'react';
import styled, { keyframes } from 'styled-components';
import Icon from '@material-ui/core/Icon';
import { withStyles } from '@material-ui/core/styles';
import { loadCSS } from 'fg-loadcss';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import AddCircleOutlineRoundedIcon from '@material-ui/icons/AddCircleOutlineRounded';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import KeyboardArrowDownRoundedIcon from '@material-ui/icons/KeyboardArrowDownRounded';
import { zoomIn } from 'react-animations';

const Zoom = ({ imagePath, setIsHovered }) => {

    const StyledRoundIcon = withStyles({
        root: {
          fontSize : "0.5rem"
        }
    })(FiberManualRecordIcon);

    const StyledPlusIcon = withStyles({
        root: {
            fontSize : "3rem"
        }
    })(AddCircleOutlineRoundedIcon);

    const StyledPlayIcon = withStyles({
        root: {
            fontSize : "3rem"
        }
    })(PlayCircleFilledIcon);

    const StyledThumbUpIcon = withStyles({
        root: {
            fontSize : "3rem"
        }
    })(ThumbUpIcon);

    const StyledThumbDownIcon = withStyles({
        root: {
            fontSize : "3rem"
        }
    })(ThumbDownIcon);

    const StyledArrowDownIcon = withStyles({
        root: {
            fontSize : "3rem"
        }
    })(KeyboardArrowDownRoundedIcon);

    const StyledIcon = withStyles({
        root: {
            fontSize : "2.5rem"
        }
    })(Icon);
      

    React.useEffect(() => {
        const node = loadCSS(
          'https://use.fontawesome.com/releases/v5.12.0/css/all.css',
          document.querySelector('#font-awesome-css'),
        );
    
        return () => {
          node.parentNode.removeChild(node);
        };
      }, []);

    return (
        
            <Wrapper onMouseLeave={()=>setIsHovered(false)}  animationDuration= '1s'>
                <HoverZoom
                    src="https://occ-0-2186-2164.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABZKKD6oX8un702f4IgP8GUR4JaSfD08LabACmH6vlei9pdFSRa78nTs9SWlAbjyU38DWLhmrI901p05qa1KejG3Cf_qUrDsLS7qg4WOLVpAvjBh7bw-cik1-widd1TphmwhQGts_6vlbSlvpI7G0ASCtCIY.webp?r=75b"
                    alt=""
                    width="290"
                    height="150"
                />
                <Description>
                    <Top>
                        <TopRight>
                            <StyledPlayIcon />
                            <StyledPlusIcon/>
                            <StyledThumbUpIcon />
                            <StyledThumbDownIcon />
                        </TopRight>
                        <TopLeft>
                            <StyledArrowDownIcon />
                        </TopLeft>
                    </Top>
                    <Middle>
                        <Match>99% Match</Match>
                        <Agegroup>18+</Agegroup>
                        <Duration>2h 28m</Duration>
                    </Middle>
                    <Bottom>
                        <Genre>Gory</Genre>
                        <StyledRoundIcon style={{marginTop : "1em"}}/>
                        <Genre>Violent</Genre>
                        <StyledRoundIcon style={{marginTop : "1em"}}/>
                        <Genre>Existing</Genre>

                    </Bottom>
                </Description>
            </Wrapper>
    );
};
const zoomInAnimation = keyframes`${zoomIn}`;
const Wrapper = styled.div`
    overflow: overlay;
    border-radius: 3px;
    width: 300px;
    height: 320px;
    margin: -11em 0 0 0;
    background-color: black;
    animation: 0.1s ${zoomInAnimation};
    z-index: 99;
    position: absolute;
`;
const HoverZoom = styled.img`
    // transform: scale(1.28);
    border-radius: 3px;
`;

const Description = styled.div`
    padding-left: 1em;
    padding-right: 1em;
`;

const Top = styled.div`
    // background-color: red;
    color: white;
    display: flex;
    justify-content: space-between;
`;
const TopRight = styled.div`
    flex: 4 ;
    display: flex;
    justify-content: space-between;
`;
const TopLeft = styled.div`
    flex: 2;
    display: flex;
    justify-content: flex-end;
`;

const Middle = styled.div`
    color: white;
    display: flex;
    margin: 1.8em 0 0 0;
`;
const Match = styled.div`
    color: #46D369;
    font-weight: 600;
`;
const Agegroup = styled.div`
    border: 1px solid;
    padding: 2px 10px;
    font-size: 1.2em;
    margin: -5px 0 0 10px;
`;
const Duration = styled.div`
    margin: 0 0 0 10px;
`;
const Bottom = styled.div`
    display: flex;
    color: #9e9c9c;
    justify-content: space-between;
    margin: 1em 0 0 0;
`;
const Genre = styled.div`
    color: white;
`;

export default Zoom;