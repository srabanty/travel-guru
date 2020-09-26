import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './RelatedHotel.css';
import { faWifi, faSpa,faSwimmingPool,faPeopleArrows,faRestroom,faBed,faBath } from '@fortawesome/free-solid-svg-icons';

const RelatedHotels = (props) => {
    const relatedHotel = props.relatedHotel;
    return (
        <div>
            <div className="hotelDetail">
                <div>
                    <img src={relatedHotel.img} alt=""/>
                </div>
                <div>
                    <h5>{relatedHotel.name}</h5>
                    <p><small><FontAwesomeIcon icon={faPeopleArrows}></FontAwesomeIcon> {relatedHotel.guest} guest &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<FontAwesomeIcon icon={faRestroom}></FontAwesomeIcon> {relatedHotel.bedrooms}  bedrooms <br/>
                    <FontAwesomeIcon icon={faBed}></FontAwesomeIcon> {relatedHotel.beds} beds &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<FontAwesomeIcon icon={faBath}></FontAwesomeIcon> {relatedHotel.baths} baths <br/>{relatedHotel.kitchen}<br/>{relatedHotel.flexibility}</small></p>
                    <p><img className="star" src={relatedHotel.star} alt=""/><strong>{relatedHotel.rating}&nbsp;&nbsp;$ {relatedHotel.price}/night</strong><br/>
                    <small className="text-green"><FontAwesomeIcon icon={faWifi}></FontAwesomeIcon> &nbsp;Free Wifi &nbsp;&nbsp;&nbsp;&nbsp;<FontAwesomeIcon icon={faSpa}></FontAwesomeIcon>&nbsp; Spa &nbsp;&nbsp;&nbsp;&nbsp;<FontAwesomeIcon icon={faSwimmingPool}></FontAwesomeIcon> &nbsp;Pool</small></p>
                </div>
            </div>
        </div>
    );
};

export default RelatedHotels;