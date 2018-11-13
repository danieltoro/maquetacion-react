import React from 'react';

const SpecialOffers = () => {
    return (
        <div className="main-wraper">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="second-title">
                            <h2>Special Offers</h2>
                            <p className="color-grey">Curabitur nunc erat, consequat in erat ut, congue bibendum
                                nulla.</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="top-baner arrows">
                        <div className="swiper-container offers-slider" data-autoplay="5000" data-loop="1"
                             data-speed="500" data-slides-per-view="responsive" data-mob-slides="1"
                             data-xs-slides="2" data-sm-slides="2" data-md-slides="3" data-lg-slides="3"
                             data-add-slides="3">
                            <div className="swiper-wrapper">
                                <div className="swiper-slide" data-val="0">
                                    <div className="offers-block radius-mask">
                                        <div className="clip">
                                            <div className="bg bg-bg-chrome act"
                                                 style={{backgroundImage: `url(img/home_1/offers_slide_1.jpg)`}}>
                                            </div>
                                        </div>
                                        <div className="tour-layer delay-1"></div>
                                        <div className="vertical-top">
                                            <div className="rate">
                                                <span className="fa fa-star color-yellow"></span>
                                                <span className="fa fa-star color-yellow"></span>
                                                <span className="fa fa-star color-yellow"></span>
                                                <span className="fa fa-star color-yellow"></span>
                                                <span className="fa fa-star color-yellow"></span>
                                            </div>
                                            <h3>greece</h3>
                                        </div>
                                        <div className="vertical-bottom">
                                            <ul className="offers-info">
                                                <li><b>35</b>tours</li>
                                                <li><b>24</b>cities</li>
                                                <li><b>90</b>hotels</li>
                                            </ul>
                                            <p>Nunc cursus libero purus ac congue arcu cursus ut sed vitae
                                                pulvinar massa idporta nequetiam.</p>
                                            <a href="#" className="c-button bg-aqua hv-aqua-o b-40"><span>view more</span></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide" data-val="1">
                                    <div className="offers-block radius-mask">
                                        <div className="clip">
                                            <div className="bg bg-bg-chrome act"
                                                 style={{backgroundImage: `url(img/home_1/offers_slide_2.jpg)`}}>
                                            </div>
                                        </div>
                                        <div className="tour-layer delay-1"></div>
                                        <div className="vertical-top">
                                            <div className="rate">
                                                <span className="fa fa-star color-yellow"></span>
                                                <span className="fa fa-star color-yellow"></span>
                                                <span className="fa fa-star color-yellow"></span>
                                                <span className="fa fa-star color-yellow"></span>
                                                <span className="fa fa-star color-yellow"></span>
                                            </div>
                                            <h3>france</h3>
                                        </div>
                                        <div className="vertical-bottom">
                                            <ul className="offers-info">
                                                <li><b>58</b>tours</li>
                                                <li><b>49</b>cities</li>
                                                <li><b>70</b>hotels</li>
                                            </ul>
                                            <p>Nunc cursus libero purus ac congue arcu cursus ut sed vitae
                                                pulvinar massa idporta nequetiam.</p>
                                            <a href="#" className="c-button bg-aqua hv-aqua-o b-40"><span>view more</span></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide" data-val="2">
                                    <div className="offers-block radius-mask">
                                        <div className="clip">
                                            <div className="bg bg-bg-chrome act"
                                                 style={{backgroundImage: `url(img/home_1/offers_slide_3.jpg)`}}>
                                            </div>
                                        </div>
                                        <div className="tour-layer delay-1"></div>
                                        <div className="vertical-top">
                                            <div className="rate">
                                                <span className="fa fa-star color-yellow"></span>
                                                <span className="fa fa-star color-yellow"></span>
                                                <span className="fa fa-star color-yellow"></span>
                                                <span className="fa fa-star color-yellow"></span>
                                                <span className="fa fa-star color-yellow"></span>
                                            </div>
                                            <h3>spain</h3>
                                        </div>
                                        <div className="vertical-bottom">
                                            <ul className="offers-info">
                                                <li><b>88</b>tours</li>
                                                <li><b>10</b>cities</li>
                                                <li><b>193</b>hotels</li>
                                            </ul>
                                            <p>Nunc cursus libero purus ac congue arcu cursus ut sed vitae
                                                pulvinar massa idporta nequetiam.</p>
                                            <a href="#" className="c-button bg-aqua hv-aqua-o b-40"><span>view more</span></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="pagination  poin-style-1 pagination-hidden"></div>
                        </div>
                        <div className="swiper-arrow-left offers-arrow"><span
                            className="fa fa-angle-left"></span></div>
                        <div className="swiper-arrow-right offers-arrow"><span
                            className="fa fa-angle-right"></span></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SpecialOffers;