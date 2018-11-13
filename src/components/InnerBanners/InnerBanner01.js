import React from 'react';

const InnerBanner01 = () => {
    return (
        <div className="inner-banner">
            <img className="center-image" src="../../img/tour_list/inner_banner_1.jpg" alt=""/>
            <div className="vertical-align">
                <div className="container">
                    <ul className="banner-breadcrumb color-white clearfix">
                        <li><a className="link-blue-2" href="#">home</a> /</li>
                        <li><a className="link-blue-2" href="#">tours</a> /</li>
                        <li><span className="color-blue-2">list tours</span></li>
                    </ul>
                    <h2 className="color-white">all tours for you</h2>
                    <h4 className="color-white">We found: <span>640</span> tours</h4>
                </div>
            </div>
        </div>
    );
};

export default InnerBanner01;