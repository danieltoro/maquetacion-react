import React from 'react';

const TourBlock01 = () => {
    return (
        <div className="radius-mask tour-block hover-aqua">
            <div className="clip">
                <div className="bg bg-bg-chrome act"
                     style={{backgroundImage: `url(img/home_1/sea_tour_img_1.jpg)`}}>
                </div>
            </div>
            <div className="tour-layer delay-1"></div>
            <div className="tour-caption">
                <div className="vertical-align">
                    <h3 className="hover-it">mauritius</h3>
                    <div className="rate">
                        <span className="fa fa-star color-yellow"></span>
                        <span className="fa fa-star color-yellow"></span>
                        <span className="fa fa-star color-yellow"></span>
                        <span className="fa fa-star color-yellow"></span>
                        <span className="fa fa-star color-yellow"></span>
                    </div>
                    <h4>from <b>$860</b></h4>
                </div>
                <div className="vertical-bottom">
                    <div className="fl">
                        <div className="tour-info">
                            <img src="img/people_icon.png" alt=""/>
                            <span className="font-style-2 color-grey-4"><strong
                                className="color-white">2</strong> adults, <strong
                                className="color-white">1</strong> kids</span>
                        </div>
                        <div className="tour-info">
                            <img src="img/calendar_icon.png" alt=""/>
                            <span className="font-style-2 color-grey-4">July<strong
                                className="color-white"> 19th</strong> to July<strong
                                className="color-white"> 26th</strong></span>
                        </div>
                    </div>
                    <a href="#" className="c-button b-50 bg-aqua hv-transparent fr"><img
                        src="img/flag_icon.png" alt=""/><span>view more</span></a>
                </div>
            </div>
        </div>
    );
};

export default TourBlock01;