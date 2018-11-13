import React from 'react';

const ReviewScore = () => {
    return (
        <div className="sidebar-block">
            <h4 className="sidebar-title color-dark-2">Review Score</h4>
            <div className="sidebar-score">
                <div className="input-entry type-2 color-2">
                    <input className="checkbox-form" id="score-5" type="checkbox"
                           name="checkbox" value="climat control"/>
                    <label className="clearfix" htmlFor="score-5">
                                    <span className="checkbox-text">
                                        5
                                        <span className="rate">
                                            <span className="fa fa-star color-yellow"/>
                                        </span>
                                    </span>
                        <span className="sp-check"><i
                            className="fa fa-check"/></span>
                    </label>
                </div>
                <div className="input-entry type-2 color-2">
                    <input className="checkbox-form" id="score-4" type="checkbox"
                           name="checkbox" value="climat control"/>
                    <label className="clearfix" htmlFor="score-4">
                                    <span className="checkbox-text">
                                        4
                                        <span className="rate">
                                            <span className="fa fa-star color-yellow"/>
                                        </span>
                                    </span>
                        <span className="sp-check"><i className="fa fa-check"/></span>
                    </label>
                </div>
                <div className="input-entry type-2 color-2">
                    <input className="checkbox-form" id="score-3" type="checkbox"
                           name="checkbox" value="climat control"/>
                    <label className="clearfix" htmlFor="score-3">
                                    <span className="checkbox-text">
                                        3
                                        <span className="rate">
                                            <span className="fa fa-star color-yellow"/>
                                        </span>
                                    </span>
                        <span className="sp-check"><i className="fa fa-check"/></span>
                    </label>
                </div>
                <div className="input-entry type-2 color-2">
                    <input className="checkbox-form" id="score-2" type="checkbox"
                           name="checkbox" value="climat control"/>
                    <label className="clearfix" htmlFor="score-2">
                                    <span className="checkbox-text">
                                        2
                                        <span className="rate">
                                            <span className="fa fa-star color-yellow"></span>
                                        </span>
                                    </span>
                        <span className="sp-check"><i
                            className="fa fa-check"></i></span>
                    </label>
                </div>
                <div className="input-entry type-2 color-2">
                    <input className="checkbox-form" id="score-1" type="checkbox"
                           name="checkbox" value="climat control"/>
                    <label className="clearfix" htmlFor="score-1">
                                    <span className="checkbox-text">
                                        1
                                        <span className="rate">
                                            <span className="fa fa-star color-yellow"></span>
                                        </span>
                                    </span>
                        <span className="sp-check"><i className="fa fa-check"/></span>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default ReviewScore;