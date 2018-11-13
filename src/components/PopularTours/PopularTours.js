import React from 'react';

const PopularTours = () => {
    return (
        <div className="popular-tours bg-grey-2">
            <h4 className="color-dark-2">popular tours</h4>
            <div className="hotel-small style-2 clearfix">
                <a className="hotel-img black-hover" href="#">
                    <img className="img-responsive radius-3"
                         src="../../img/detail/hotel_small_1.jpg" alt="" />
                    <div className="tour-layer delay-1" />
                </a>
                <div className="hotel-desc">
                    <h5><span className="color-dark-2">from <strong>$273</strong></span>
                    </h5>
                    <h4>bristol Hotel</h4>
                    <div className="hotel-loc">2 Place de la Sans Défense, Puteaux, Paris,
                        France.
                    </div>
                </div>
            </div>
            <div className="hotel-small style-2 clearfix">
                <a className="hotel-img black-hover" href="#">
                    <img className="img-responsive radius-3"
                         src="../../img/detail/hotel_small_2.jpg" alt="" />
                    <div className="tour-layer delay-1" />
                </a>
                <div className="hotel-desc">
                    <h5><span className="color-dark-2">from <strong>$273</strong></span>
                    </h5>
                    <h4>bristol Hotel</h4>
                    <div className="hotel-loc">2 Place de la Sans Défense, Puteaux, Paris,
                        France.
                    </div>
                </div>
            </div>
            <div className="hotel-small style-2 clearfix">
                <a className="hotel-img black-hover" href="#">
                    <img className="img-responsive radius-3"
                         src="../../img/detail/hotel_small_3.jpg" alt="" />
                    <div className="tour-layer delay-1" />
                </a>
                <div className="hotel-desc">
                    <h5><span className="color-dark-2">from <strong>$273</strong></span>
                    </h5>
                    <h4>bristol Hotel</h4>
                    <div className="hotel-loc">2 Place de la Sans Défense, Puteaux, Paris,
                        France.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopularTours;