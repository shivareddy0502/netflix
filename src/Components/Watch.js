import React from 'react'
import ArrowBackOutlinedIcon from '@material-ui/icons/ArrowBackOutlined';
import "../Css/watch.sass"

export default function Watch() {
    const trailer = "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";
    return (
        <div className="watch">
            <div className="back">
                <a href="/login" className="back nobackground">
                    <ArrowBackOutlinedIcon /> Home
                </a>
                
            </div>
            <video 
                className="video"
                autoPlay
                progress
                controls
                loop
                src={trailer}/>
        </div>
    )
}
