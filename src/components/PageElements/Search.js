import React from 'react';

const Search = () => {
    return (
        <div className="sidebar-block">
            <h4 className="sidebar-title color-dark-2">search</h4>
            <div className="search-inputs">
                <div className="form-block clearfix">
                    <div className="input-style-1 b-50 color-3">
                        <img src="../../img/loc_icon_small_grey.png" alt=""/>
                        <input type="text" placeholder="Where do you want to go?"/>
                    </div>
                </div>
                <div className="form-block clearfix">
                    <div className="input-style-1 b-50 color-3">
                        <img src="../../img/calendar_icon_grey.png" alt=""/>
                        <input type="text" placeholder="Check In" className="datepicker"/>
                    </div>
                </div>
                <div className="form-block clearfix">
                    <div className="input-style-1 b-50 color-3">
                        <img src="../../img/calendar_icon_grey.png" alt=""/>
                        <input type="text" placeholder="Check Out" className="datepicker"/>
                    </div>
                </div>
            </div>
            <input type="submit" className="c-button b-40 bg-blue-2 hv-blue-2-o" value="search"/>
        </div>
    );
};

export default Search;