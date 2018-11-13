import React from 'react';

const StarRating = () => {
    return (
        <div className="sidebar-block">
            <h4 className="sidebar-title color-dark-2">star rating</h4>
            <div className="sidebar-rating">
                <div className="input-entry color-1">
                    <input className="checkbox-form" id="star-5" type="checkbox"
                           name="checkbox" value="climat control"/>
                    <label className="clearfix" htmlFor="star-5">
                        <span className="sp-check"><i className="fa fa-check"/></span>
                        <span className="rate">
                                                    <span className="fa fa-star color-yellow"/>
                                                    <span className="fa fa-star color-yellow"/>
                                                    <span className="fa fa-star color-yellow"/>
                                                    <span className="fa fa-star color-yellow"/>
                                                    <span className="fa fa-star color-yellow"/>
                                                </span>
                    </label>
                </div>
                <div className="input-entry color-1">
                    <input className="checkbox-form" id="star-4" type="checkbox"
                           name="checkbox" value="climat control"/>
                    <label className="clearfix" htmlFor="star-4">
                        <span className="sp-check"><i className="fa fa-check"/></span>
                        <span className="rate">
                                                    <span className="fa fa-star color-yellow"/>
                                                    <span className="fa fa-star color-yellow"/>
                                                    <span className="fa fa-star color-yellow"/>
                                                    <span className="fa fa-star color-yellow"/>
                                                </span>
                    </label>
                </div>
                <div className="input-entry color-1">
                    <input className="checkbox-form" id="star-3" type="checkbox"
                           name="checkbox" value="climat control"/>
                    <label className="clearfix" htmlFor="star-3">
                                                    <span className="sp-check"><i
                                                        className="fa fa-check"></i></span>
                        <span className="rate">
                                        <span className="fa fa-star color-yellow"></span>
                                        <span className="fa fa-star color-yellow"></span>
                                        <span className="fa fa-star color-yellow"></span>
                                    </span>
                    </label>
                </div>
                <div className="input-entry color-1">
                    <input className="checkbox-form" id="star-2" type="checkbox"
                           name="checkbox" value="climat control"/>
                    <label className="clearfix" htmlFor="star-2">
                                                    <span className="sp-check"><i
                                                        className="fa fa-check"></i></span>
                        <span className="rate">
                                        <span className="fa fa-star color-yellow"></span>
                                        <span className="fa fa-star color-yellow"></span>
                                    </span>
                    </label>
                </div>
                <div className="input-entry color-1">
                    <input className="checkbox-form" id="star-1" type="checkbox"
                           name="checkbox" value="climat control"/>
                    <label className="clearfix" htmlFor="star-1">
                                                    <span className="sp-check"><i
                                                        className="fa fa-check"></i></span>
                        <span className="rate">
                                        <span className="fa fa-star color-yellow"></span>
                                    </span>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default StarRating;