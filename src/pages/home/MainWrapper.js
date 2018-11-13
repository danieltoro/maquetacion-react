import React from 'react';

const MainWrapper = () => {
    return (
        <div className="main-wraper">
            <div className="clip">
                <div className="bg bg-bg-chrome"
                     style={{backgroundImage: `url(img/home_1/tour_slider_bg.jpg)`}}>
                </div>
            </div>
            <div className="swiper-container" data-autoplay="0" data-loop="1" data-speed="1000"
                 data-slides-per-view="1" id="tour-slide">
                <div className="swiper-wrapper">
                    <div className="swiper-slide">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="slider-tour padd-90-90">
                                        <h3>from $960</h3>
                                        <div className="rate">
                                            <span className="fa fa-star color-yellow"></span>
                                            <span className="fa fa-star color-yellow"></span>
                                            <span className="fa fa-star color-yellow"></span>
                                            <span className="fa fa-star color-yellow"></span>
                                            <span className="fa fa-star color-yellow"></span>
                                        </div>
                                        <h2>Maldives Vacation Packages</h2>
                                        <h5>july <b>19th</b> to july <b>26th</b></h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="slider-tour padd-94-94">
                                        <h3>from $960</h3>
                                        <div className="rate">
                                            <span className="fa fa-star color-yellow"></span>
                                            <span className="fa fa-star color-yellow"></span>
                                            <span className="fa fa-star color-yellow"></span>
                                            <span className="fa fa-star"></span>
                                            <span className="fa fa-star"></span>
                                        </div>
                                        <h2>Maldives Vacation Packages</h2>
                                        <h5>july <b>19th</b> to july <b>26th</b></h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="slider-tour padd-94-94">
                                        <h3>from $960</h3>
                                        <div className="rate">
                                            <span className="fa fa-star color-yellow"></span>
                                            <span className="fa fa-star color-yellow"></span>
                                            <span className="fa fa-star color-yellow"></span>
                                            <span className="fa fa-star color-yellow"></span>
                                            <span className="fa fa-star color-yellow"></span>
                                        </div>
                                        <h2>Maldives Vacation Packages</h2>
                                        <h5>july <b>19th</b> to july <b>26th</b></h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="slider-tour padd-94-94">
                                        <h3>from $960</h3>
                                        <div className="rate">
                                            <span className="fa fa-star color-yellow"></span>
                                            <span className="fa fa-star color-yellow"></span>
                                            <span className="fa fa-star color-yellow"></span>
                                            <span className="fa fa-star color-yellow"></span>
                                            <span className="fa fa-star"></span>
                                        </div>
                                        <h2>Maldives Vacation Packages</h2>
                                        <h5>july <b>19th</b> to july <b>26th</b></h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pagination poin-style-1"></div>
            </div>
        </div>
    );
};

export default MainWrapper;