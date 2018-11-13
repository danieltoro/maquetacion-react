import React from 'react';

const ListItem05 = () => {
    return (
        <div className="hotel-item">
            <div className="radius-top">
                <img src="../../img/home_3/pop_hotel_1.jpg" alt=""/>
                <div className="price price-s-1">$273</div>
            </div>
            <div className="title clearfix">
                <h4><b>royal Hotel</b></h4>
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
                <span className="f-14 color-dark-2">2 Place de la Sans Défense, Puteaux</span>
                <p className="f-14">Nunc cursus libero purus ac congue arcu cursus ut sed vitae pulvinar massa
                    idporta nequetiam.</p>
                <a href="booking.html" className="c-button bg-dr-blue hv-dr-blue-o b-50 fl">book now</a>

            </div>
        </div>
    );
};

export default ListItem05;