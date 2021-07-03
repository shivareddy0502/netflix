import React, { useRef, useState } from 'react'
import "../Css/row.sass";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

import RowItem from "./RowItem";

export default function Row({openModal}) {
    const [sildeNumber, setSlideNumber] = useState(0);
    const sliderRef = useRef();

    const handleOnClick = (direction) =>{
        let distance = sliderRef.current.getBoundingClientRect().x - 50;
        if(direction === 'left' && sildeNumber > 0){
            sliderRef.current.style.transform = `translateX(${distance + 235}px)`;
            setSlideNumber(sildeNumber - 1)
        }
        if(direction === 'right' && sildeNumber < 10){
            sliderRef.current.style.transform = `translateX(${distance - 235}px)`;
            setSlideNumber(sildeNumber + 1)
        }
    }
    
    return (
        <div className="row">
            <h1 className="row__title">Netflix Originals</h1>
            <div className="row__posters">
                {
                    sildeNumber > 0 && <ArrowBackIosIcon className="sliderArrow left" onClick={()=>handleOnClick("left")}/>
                }
                <div className="row__poster__slider" ref={sliderRef}>
                    <RowItem index={0} openModal={openModal}/>
                    <RowItem index={1} openModal={openModal}/>
                    <RowItem index={2} openModal={openModal}/>
                    <RowItem index={3} openModal={openModal}/>
                    <RowItem index={4} openModal={openModal}/>
                    <RowItem index={5} openModal={openModal}/>
                    <RowItem index={6} openModal={openModal}/>
                    <RowItem index={7} openModal={openModal}/>
                    <RowItem index={8} openModal={openModal}/>
                    <RowItem index={9} openModal={openModal}/>
                    <RowItem index={10} openModal={openModal}/>
                    <RowItem index={11} openModal={openModal}/>
                    <RowItem index={12} openModal={openModal}/>
                    <RowItem index={13} openModal={openModal}/>
                    <RowItem index={14} openModal={openModal}/>
                </div>
                {
                    sildeNumber < 10 && <ArrowForwardIosIcon  className="sliderArrow right" onClick={()=>handleOnClick("right")}/>
                }
            </div>
        </div>
    )
}
