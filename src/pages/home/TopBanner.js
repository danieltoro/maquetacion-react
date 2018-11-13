import React from 'react';
import BannerTabs from "./BannerTabs";

const TopBanner = () => {
    return (
        <div className="top-baner swiper-animate arrows">
            <div className="swiper-container main-slider" data-autoplay="5000" data-loop="1" data-speed="900"
                 data-center="0" data-slides-per-view="1">
                <div className="swiper-wrapper">
                    <div className="swiper-slide active" data-val="0">
                        <div className="clip">
                            <div className="bg bg-bg-chrome act"
                                 style={{backgroundImage: `url(img/home_1/main_slide_1.jpg)` }}>
                            </div>
                        </div>
                        <div className="vertical-align">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="main-title vert-title">
                                            <div className="top-weather-info delay-1">
                                                <p>London</p>
                                                <img src="img/weather_icon.png" alt=""/>
                                                <span>+30&deg;C</span>
                                            </div>
                                            <h1 className="color-white delay-1">amazing santorini<br/> 7 days
                                                tour</h1>
                                            <p className="color-white-op delay-2">Curabitur nunc erat, consequat
                                                in erat ut, congue bibendum nulla. Suspendisse id pharetra
                                                lacus, et hendrerit mi quis leo elementum.</p>
                                            <a href="#" className="c-button bg-aqua hv-transparent delay-2"><img
                                                src="img/loc_icon.png" alt=""/><span>view our tours</span></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="swiper-slide" data-val="1">
                        <div className="clip">
                            <div className="bg bg-bg-chrome act"
                                 style={{backgroundImage: `url(img/home_1/main_slide_1.jpg)` }}>
                            </div>
                        </div>
                        <div className="vertical-align">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="main-title vert-title">
                                            <div className="top-weather-info delay-1">
                                                <p>London</p>
                                                <img src="img/weather_icon.png" alt=""/>
                                                <span>+30&deg;C</span>
                                            </div>
                                            <h1 className="color-white delay-1">amazing santorini<br/> 7 days
                                                tour</h1>
                                            <p className="color-white-op delay-2">Curabitur nunc erat, consequat
                                                in erat ut, congue bibendum nulla. Suspendisse id pharetra
                                                lacus, et hendrerit mi quis leo elementum.</p>
                                            <a href="#" className="c-button bg-aqua delay-2"><img
                                                src="img/loc_icon.png" alt=""/><span>view our tours</span></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pagination pagination-hidden poin-style-1"></div>
            </div>
            <div className="arrow-wrapp m-200">
                <div className="cont-1170">
                    <div className="swiper-arrow-left sw-arrow"><span className="fa fa-angle-left"></span></div>
                    <div className="swiper-arrow-right sw-arrow"><span className="fa fa-angle-right"></span>
                    </div>
                </div>
            </div>

            <BannerTabs/>
        </div>
    );
};

export default TopBanner;