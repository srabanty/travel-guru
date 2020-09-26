import React from 'react';
import { Container } from 'react-bootstrap';
import hotelFakeData from '../../hotelFakeData/hotelFakeData';
import GoogleMap from '../GoogleMap/GoogleMap';
import RelatedHotels from '../RelatedHotels/RelatedHotels';
import './HotelInfo.css';


const HotelInfo = (props) => {
    //console.log(props.hotelInfo);
    const hotelInfo = props.hotelInfo;
    const relatedHotels = hotelFakeData.filter(hfk => parseInt(hfk.hotelId) === parseInt(hotelInfo));
    console.log(relatedHotels);
    console.log(typeof(relatedHotels));
    return (
        <div>
            <Container className="display-flex">
                <div className="col-md-7">
                    <p><strong>252 stays Apr 13-17 3 Guests</strong></p>
                    <h5>Stay in {relatedHotels[0].place}</h5>
                    <br/>
                    {
                        relatedHotels.map(relatedHotel=><RelatedHotels
                            key={relatedHotel.id}
                            relatedHotel={relatedHotel}
                            ></RelatedHotels>)
                    }
                </div>
                <div className="col-md-5 padding-top-100">
                    <GoogleMap></GoogleMap>
                </div>
            </Container>
        </div>
    );
};

export default HotelInfo;
