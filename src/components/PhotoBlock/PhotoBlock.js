import React from 'react';

const PhotoBlock = () => {
    return (
        <div className="photo-block hover-aqua">
            <div className="tour-layer delay-1"></div>
            <img src="img/home_1/photo_2.jpg" alt=""/>
            <div className="vertical-align">
                <div className="photo-title">
                    <h4 className="delay-1"><b>Only <span className="color-aqua">$235</span></b>
                    </h4>
                    <a className="hover-it" href="#"><h3>promotional trip</h3></a>
                    <h5 className="delay-1">Orlando, Air/3 Nights</h5>
                </div>
            </div>
        </div>
    );
};

export default PhotoBlock;