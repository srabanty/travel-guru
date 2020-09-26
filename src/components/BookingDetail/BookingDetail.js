import React from 'react';
import { useParams } from 'react-router-dom';
import HotelInfo from '../HotelInfo/HotelInfo';
import NewHeader from '../NewHeader/NewHeader';
import './BookingDetail.css';

const BookingDetail = () => {
    const {bookingPlaceId} = useParams()
    console.log(bookingPlaceId);
    return (
        <div>
            <NewHeader></NewHeader>
            <HotelInfo hotelInfo={bookingPlaceId}></HotelInfo>
        </div>
    );
};

export default BookingDetail;