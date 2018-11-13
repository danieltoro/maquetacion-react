import React from 'react';

const ListItem06 = () => {
    return (
        <div className="hotel-item style-2">
            <div className="radius-top">
                <img src="../../img/home_3/hot_hotel_1.jpg" alt=""/>
                <div className="price price-s-1">save 20%</div>
            </div>
            <div className="title">
                <h4>From<b> $273</b></h4>
                <h4><b>bristol new york Hotel</b></h4>
                <div className="rate-wrap">
                    <div className="rate">
                        <span className="fa fa-star color-yellow"/>
                        <span className="fa fa-star color-yellow"/>
                        <span className="fa fa-star color-yellow"/>
                        <span className="fa fa-star color-yellow"/>
                        <span className="fa fa-star color-yellow"/>
                    </div>
                    <i>485 rewies</i>
                </div>
                <span className="f-14 color-dark-2">2 Place de la Sans Défense, Puteaux, Paris, France.</span>
                <p className="f-14">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore</p>
                <a href="#" className="c-button bg-dr-blue hv-dr-blue-o b-50"><i className="fa fa-flag"/> view more</a>

            </div>
        </div>
    );
};

export default ListItem06;