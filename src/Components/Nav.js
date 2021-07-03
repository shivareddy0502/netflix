import React, {useState, useEffect} from 'react';
import NotificationsIcon from '@material-ui/icons/Notifications';
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

import "../Css/nav.sass";

export default function Nav() {

    const [show, setShow] = useState(false);

    const transitionMNavbar = () => {
        // console.log(window.pageYOffset);
        if(window.pageYOffset > 100){
            setShow(true);
        }
        else{
            setShow(false);
        }
    }

    useEffect(()=>{
        window.addEventListener("scroll", transitionMNavbar);
        return () => {
            window.removeEventListener("scroll", transitionMNavbar);
        }
    }, [])

    return (
        <div className={`nav ${show && 'nav__black'}`}>
            <div className="nav__contents">
                <div className="nav__contents__left">
                    <img 
                        src="/images/netflix-logo.svg" 
                        className="nav__logo"
                        alt=""
                    />
                    <div><a href="/login" className="nobackground">Home</a></div>
                    <div><a href="/tv" className="nobackground">Tv Shows</a></div>
                    <div><a href="/movies" className="nobackground">Movies</a></div>
                    <div><a href="/news" className="nobackground">{`News & Popular`}</a></div>
                    <div><a href="/mylist" className="nobackground">My List</a></div>
                </div>
                <div className="nav__contents__right">
                    <SearchIcon className="nav__icon"/>
                    <div>CHILDREN</div>
                    <NotificationsIcon className="nav__icon"/>
                    <img 
                        src="https://occ-0-2186-2164.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABbme8JMz4rEKFJhtzpOKWFJ_6qX-0y5wwWyYvBhWS0VKFLa289dZ5zvRBggmFVWVPL2AAYE8xevD4jjLZjWumNo.png?r=a41" 
                        alt=""
                        className="nav__avatar"
                    />
                    <ArrowDropDownIcon className="nav__icon"/>
                </div>
            </div>
        </div>
    )
}
