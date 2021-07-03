import React, { useState } from 'react';
import "../Css/rowItem.sass";
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import AddIcon from '@material-ui/icons/Add';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ThumbDownAltOutlinedIcon from '@material-ui/icons/ThumbDownAltOutlined';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import KeyboardArrowDownRoundedIcon from '@material-ui/icons/KeyboardArrowDownRounded';
import { withStyles } from '@material-ui/core/styles';
import MoreInfo from "./MoreInfo";
export default function RowItem({index, openModal}) {
    const [model, setModel] = useState(false);
    const StyledRoundIcon = withStyles({
        root: {
          fontSize : "0.5rem"
        }
    })(FiberManualRecordIcon);

    const modalOpen = () => {
        console.log("model open");
        setModel(true);
    }
    
    const modalClose = () => {
        console.log("model close");
        setModel(false);
    }

    const [isHovered, setIsHovered] = useState(false)
    const trailer = "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";
    return (
        <>
        <div className="row__item" 
            style={{left: isHovered && index * 225 - 50 + (index * 10)} }
            onMouseEnter={()=>setIsHovered(true)} 
            onMouseLeave={()=>setIsHovered(false)}
        >
            <img 
                className="row__item__image" 
                src="https://occ-0-2186-2164.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABZKKD6oX8un702f4IgP8GUR4JaSfD08LabACmH6vlei9pdFSRa78nTs9SWlAbjyU38DWLhmrI901p05qa1KejG3Cf_qUrDsLS7qg4WOLVpAvjBh7bw-cik1-widd1TphmwhQGts_6vlbSlvpI7G0ASCtCIY.webp?r=75b"
                alt="Movie"
            />
            {   isHovered && 
                <React.Fragment>
                    <video src={trailer} autoPlay={true} loop/>
                    <div className="row__item__info">
                        <div className="icons">
                            <div className="icons__left">
                                <a href="/play" className="nobackground">
                                    <PlayArrowIcon className="icon"/>
                                </a>
                                <AddIcon className="icon"/>
                                <ThumbUpAltOutlinedIcon className="icon"/>
                                <ThumbDownAltOutlinedIcon className="icon"/>
                            </div>
                            <div className="icons__right">
                                <div onClick={openModal}>
                                    <KeyboardArrowDownRoundedIcon className="icon"/>
                                </div>
                            </div>
                        </div>
                        <div className="top">
                            <div className="top__match">99% Match</div>
                            <div className="top__age__group">18+</div>
                            <div className="top__duration">2h 28m</div>
                        </div>
                        <div className="bottom">
                            <span className="bottom__genre">Gruesome</span>
                            <StyledRoundIcon style={{marginTop : "1em"}}/>
                            <span className="bottom__genre">Gory</span>
                            <StyledRoundIcon style={{marginTop : "1em"}}/>
                            <span className="bottom__genre">Violent</span>
                        </div>
                    </div>
                    {/* <Model show={model} handleClose={modalClose}/> */}
                        
                </React.Fragment>
            }
            
        </div>
        </>
    )
}
