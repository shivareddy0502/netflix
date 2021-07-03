import React from 'react';
import "../Css/moreInfo.sass";
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';
import InfoRoundedIcon from '@material-ui/icons/InfoRounded';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import { withStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ThumbDownAltOutlinedIcon from '@material-ui/icons/ThumbDownAltOutlined';
import VolumeOffOutlinedIcon from '@material-ui/icons/VolumeOffOutlined';

export default function MoreInfo({modalClose, show}) {
    const StyledPlayIcon = withStyles({
        root: {
          fontSize : "3vw"
        }
    })(PlayArrowIcon);
    const StyledInfoIcon = withStyles({
        root: {
          fontSize : "3vw"
        }
    })(InfoRoundedIcon);
    return (
        <div className={`moreInfo`} style={{
            backgroundImage : `linear-gradient(to right, rgba(56, 56, 56, 0.5) , transparent), url('https://occ-0-2186-2164.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABWsi0xSek9Lz5rD87AR4FL6LzqjismoTPlfc2V_wOD6Vie8q-fBHBV963F4zjq7o-4_WM3GbgKqaWYom-SIcy-oGWeL3.webp?r=522)`,
            backgroundSize: "850px",
        }}>
            <div className="moreInfo__close">
                <div onClick={modalClose}>
                    <CloseOutlinedIcon className="icon"/>
                </div>
            </div>
            <div className="moreInfo__contents">
                <img 
                    width= {850/2 + "px"} 
                    src="https://occ-0-2186-2164.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABXvErg_7ZjFJTuBKwr4Uo-l2DMGOXvb4oCqsaZ65albMJa2acK-4pUz3HfmdvIT4rHDUJnl15fG1t6-tlkCgU7w8Q8tp7rEfGbPpMeX6dDaJUeFMlXUaXPCahWNN6eQLtppfsZevwjRtNJKD8vIUklK7CBcS3zUyyIjwnjzRpZfx.webp?r=da6"/>
                <div className="icons">
                    <div className="icons__left">
                        <div className="button__play">
                            <PlayArrowIcon /> <div className="icon__play">Play</div>
                        </div>
                        <AddIcon className="icon"/>
                        <ThumbUpAltOutlinedIcon className="icon"/>
                        <ThumbDownAltOutlinedIcon className="icon"/>
                    </div>
                    <div className="icons__right">
                        <VolumeOffOutlinedIcon className="icon mute"/>
                    </div>
                </div>
                
            </div>
            <div className="fade__between"/>
            <div className="moreInfo__desc">
                <div className="moreInfo__desc__left">
                    <div className="top">
                        <div className="top__match">93% Match</div>
                        <div className="top__duration">2021</div>
                        <div className="top__age__group">18+</div>
                        <div className="top__duration">1 Season</div>
                    </div>
                    <div className="middle">
                        <b>Watch in Hindi, Telugu and Tamil</b>
                    </div>
                    <div className="bottom">
                        From secrets and lies to jealousy and control, four stories in this anthology film explore the darker, deceptive sides of love.
                    </div>
                </div>
                <div className="moreInfo__desc__right">
                    <div className="desc">
                        <span className="title">Cast: </span>
                        <span>
                            <a>Manchu Lakshmi, </a>
                            <a>Saanve Megghana, </a>
                            <a>Naveen Kumar, </a>
                            <a>more</a>
                        </span>
                    </div>
                    <div className="desc">
                        <span className="title">Genre: </span>
                        <span>
                            <a>Manchu Lakshmi, </a>
                            <a>Saanve Megghana, </a>
                            <a>Naveen Kumar, </a>
                            <a>more</a>
                        </span>
                    </div>
                    <div className="desc">
                        <span className="title">This show is: </span>
                        <span>
                            <a>Manchu Lakshmi, </a>
                            <a>Saanve Megghana, </a>
                            <a>Naveen Kumar, </a>
                            <a>more</a>
                        </span>
                    </div>
                </div>
            </div>
            <div>
                <div className="horizontal__line"/>
            </div>
            <div className="moreInfo__about">
                <div className="moreInfo__about__wrapper">
                    <span className="title">About: </span>
                    <span className="title__desc"><b>Mallesham</b></span>
                </div>
                <div className="moreInfo__about__wrapper">
                    <span className="subtitle">Director: </span>
                    <span className="subtitle_desc">Raj R</span>
                </div>
                <div className="moreInfo__about__wrapper">
                    <span className="subtitle">Cast: </span>
                    <span className="subtitle_desc">Janshi, Priyadarshi Pullikonda, Ananya Magalla</span>
                </div>
                <div className="moreInfo__about__wrapper">
                    <span className="subtitle">Writter: </span>
                    <span className="subtitle_desc">Raj R</span>
                </div>
                <div className="moreInfo__about__wrapper">
                    <span className="subtitle">Genres: </span>
                    <span className="subtitle_desc">Social Issue Dramas, Movies Based on Real Life, Telugu-Language Movies, Independent Movies</span>
                </div>
                <div className="moreInfo__about__wrapper">
                    <span className="subtitle">This movie is: </span>
                    <span className="subtitle_desc">Inspiring, Emotional, Feel-Good</span>
                </div>
                <div className="moreInfo__about__wrapper">
                    <span className="subtitle">Maturity rating: </span>
                    <span className="subtitle_desc">7+ Rocommended for ages 7 and up</span>
                </div>
            </div>
        </div>
    )
}
