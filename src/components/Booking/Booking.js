import React from 'react';
import { Link, useParams } from 'react-router-dom';
import placesFakeData from '../../placesFakeData/placesFakeData';
import Header from '../Header/Header';
import header from '../../images/Image/Rectangle 1.png';
import { Button, Container, Form } from 'react-bootstrap';
import './Booking.css';

const Booking = () => {
    const {id} = useParams();
    const uniquePlace = placesFakeData.find(pfk =>parseInt(pfk.id) === parseInt(id));
    //console.log(uniquePlace);
    const bookingPlaceId = parseInt(uniquePlace.id);
    console.log(bookingPlaceId);

    return (
        <div style={{backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) ), url('${header}')`}} className="header">
            <Header></Header>
            <Container className="booking-body">
                <div className="col-md-7">
                    <h1>{uniquePlace.placeName}</h1>
                    <br/>
                    <p>{uniquePlace.placeDetails}</p>
                </div>
                <div className="col-md-5">
                <Form className="form">
                    <Form.Group controlId="">
                        <Form.Label>Origin</Form.Label>
                        <Form.Control className="bg-gray" type="text" placeholder="Dhaka" />
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="">
                        <Form.Label>Destination</Form.Label>
                        <Form.Control className="bg-gray" type="text" placeholder="Cox's Bazar" />
                    </Form.Group>
                    <div className="flex">
                    <Form.Group controlId="" className="mr-10">
                        <Form.Label>From</Form.Label>
                        <input className="w-100" type="date" placeholder="01/09" />
                    </Form.Group>
                    <Form.Group controlId="">
                        <Form.Label>To</Form.Label>
                        <input className="w-100" type="date" placeholder="01/09" />
                    </Form.Group>
                    </div>
                    <Link to={"/booking/"+bookingPlaceId}>
                        <Button className="w-full main-button" type="submit">
                            Start Booking
                        </Button>
                    </Link>
                    </Form>
                </div>
            </Container>
        </div>
    );
};

export default Booking;