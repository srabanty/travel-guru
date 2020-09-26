import React from 'react';
import header from '../../images/Image/Rectangle 1.png';
import placesFakeData from '../../placesFakeData/placesFakeData';
import Header from '../Header/Header';
import MainBody from '../MainBody/MainBody';

const Home = () => {
    const singlePlace = placesFakeData.find(pfk => pfk.id ===1)
    return (
        <div style={{backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) ), url('${header}')`}} className="header">
            <Header></Header>
            <MainBody singlePlace={singlePlace}></MainBody>   
        </div>
    );
};

export default Home;