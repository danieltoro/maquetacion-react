import React from 'react';

const PriceRange = () => {
    return (
        <div className="sidebar-block">
            <h4 className="sidebar-title color-dark-2">price range</h4>
            <div className="slider-range color-1 clearfix" data-counter="$"
                 data-position="start" data-from="0" data-to="1500" data-min="0"
                 data-max="2000">
                <div className="range"/>
                <input type="text" className="amount-start" readOnly value="$0"/>
                <input type="text" className="amount-end" readOnly value="$1500"/>
            </div>
            <input type="submit" className="c-button b-40 bg-blue-2 hv-blue-2-o"
                   value="search"/>
        </div>
    );
};

export default PriceRange;