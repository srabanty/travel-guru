import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import placesFakeData from '../../placesFakeData/placesFakeData';
import PlaceImages from '../PlaceImages/PlaceImages';

const MainBody = (props) => {
    const singlePlace = props.singlePlace;
    return (
        <Container>
            <div className="main-body">
                    <div className="col-md-3">
                        <h2 className="placeName">
                            {
                                singlePlace.placeName
                            }
                        </h2>
                        <br/>
                        <p className="placeDetail"><small>
                            {
                               singlePlace.placeDetails.slice(0,115).concat('...')
                            }
                        </small></p>
                        <Link to={"/booking/"+singlePlace.id}>
                            <button className="main-btn">Booking →</button>
                        </Link>
                    </div>
                    <div className="col-md-9 placeImg">
                        {
                            placesFakeData.map(pfk => <PlaceImages 
                                key={pfk.id}
                                placeImg = {pfk}>
                                </PlaceImages>)
                        }
                    </div>
                </div>
        </Container>
    );
};

export default MainBody;