import React from 'react';
import { Link } from 'react-router-dom';
import './PlaceImages.css';

const PlaceImages = (props) => {
    // console.log(props.placeImg.img);
    // console.log(props.placeImg.id);
    const id = props.placeImg.id;
    // console.log(id);
    return (
        <div className="">
            <Link to={`/places/`+id}> <img className="img-fluid placeImg" src={props.placeImg.img} alt=""/></Link>
            <h4 className="">{props.placeImg.placeName}</h4>
        </div>
    );
};

export default PlaceImages;