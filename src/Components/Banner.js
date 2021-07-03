import React, { useState, useEffect } from 'react';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import InfoRoundedIcon from '@material-ui/icons/InfoRounded';
import "../Css/banner.sass";
import { withStyles } from '@material-ui/core/styles';

export default function Banner({type, openModal}) {
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerWidth);

    const resizeDimentions = () => {
        setWidth(window.innerWidth);
        setHeight(window.innerWidth);
        console.log(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener("resize", resizeDimentions);
    });

    const StyledInfoIcon = withStyles({
        root: {
          fontSize : "3vw"
        }
    })(InfoRoundedIcon);

    const StyledPlayIcon = withStyles({
        root: {
          fontSize : "3vw"
        }
    })(PlayArrowIcon);

    const truncate = (string , n) => {
        return string?.length > n ? string.substr(0, n-1) + '...' : string;
    }

    return (
        <header className="banner" style={{
            backgroundImage : `linear-gradient(to right, rgba(56, 56, 56, 0.5) , transparent), linear-gradient(to top, black , transparent), url('https://occ-0-2186-2164.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABWsi0xSek9Lz5rD87AR4FL6LzqjismoTPlfc2V_wOD6Vie8q-fBHBV963F4zjq7o-4_WM3GbgKqaWYom-SIcy-oGWeL3.webp?r=522)`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
            height: width/1.5 + 'px',
            
        }}>
            <div>
                
                <div className="banner__contents" style={{
                        width: width/2 + 'px'
                    }}>

                        {
                            type && (
                                <div className="banner__category">
                                    <span className="banner__category__type">
                                        {
                                            type === 'movies' ? 'Movies' : 'Series'
                                        }
                                    </span>
                                    <select name="genre" id="genre">
                                        <option>Genre</option>
                                        <option value="adventure">Adventure</option>
                                        <option value="comedy">Comedy</option>
                                        <option value="crime">Crime</option>
                                        <option value="fantacy">Fantacy</option>
                                        
                                    </select>
                                </div>
                            )
                        }
                        
                    <img src="https://occ-0-2186-2164.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABXHDWbGGJ1ynJ1MTNO9xBwcxestFwUmrFEcoZ7vGoev3xQu7wcHRE6vucrDmlHIo9I_0Tt1TV4_1gndv0nFyZF-JqWNAO9icLn4S.webp?r=570"
                        width= {width/3 + "px"} 
                        className="banner__title" 
                        alt=""
                    />
                    <h1 className="banner_description" >
                    {
                        truncate('Clashing views on intimacy lead a couple to go their separate ways to reflect on commitment and companionship, before suddenly crossing paths again.', 500)
                    }
                    </h1>
                    <div className="banner__buttons">
                        <a href="/play" className="banner__button play nobackground">
                            <StyledPlayIcon />
                            <div className="banner__space__between"></div>
                            <div className="info">Play</div>
                        </a>
                        <button className="banner__button more_info" onClick={openModal}>
                            <StyledInfoIcon />
                            <div className="banner__space__between"></div>
                            <div className="info">More Info</div>
                        </button>
                    </div>
                    
                </div>
                <div className="banner__gener">13+</div>
                {/* <div className="banner__fade__bottom" style={{
                    height: height/3 + 'px'
                }}/> */}
            </div>
        </header>
    )
}


// background-image: linear-gradient(180%, transparent, rgba(37,37,37, 0.61), #111);