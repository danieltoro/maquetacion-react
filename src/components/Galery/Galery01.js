import React from 'react';

const Galery01 = () => {
    return (
        <div className="detail-top slider-wth-thumbs style-2">
            <div className="swiper-container thumbnails-preview" data-autoplay="0"
                 data-loop="1" data-speed="500" data-center="0" data-slides-per-view="1">
                <div className="swiper-wrapper">
                    <div className="swiper-slide active" data-val="0">
                        <img className="img-responsive img-full"
                             src="../../img/detail/m_slide_1.jpg" alt=""/>
                    </div>
                    <div className="swiper-slide" data-val="1">
                        <img className="img-responsive img-full"
                             src="../../img/detail/m_slide_2.jpg" alt=""/>
                    </div>
                    <div className="swiper-slide" data-val="2">
                        <img className="img-responsive img-full"
                             src="../../img/detail/m_slide_3.jpg" alt=""/>
                    </div>
                    <div className="swiper-slide" data-val="3">
                        <img className="img-responsive img-full"
                             src="../../img/detail/m_slide_4.jpg" alt=""/>
                    </div>
                    <div className="swiper-slide" data-val="4">
                        <img className="img-responsive img-full"
                             src="../../img/detail/m_slide_5.jpg" alt=""/>
                    </div>
                </div>
                <div className="pagination pagination-hidden"/>
            </div>
            <div className="swiper-container thumbnails" data-autoplay="0"
                 data-loop="0" data-speed="500" data-center="0"
                 data-slides-per-view="responsive" data-xs-slides="3"
                 data-sm-slides="5" data-md-slides="5" data-lg-slides="5"
                 data-add-slides="5">
                <div className="swiper-wrapper">
                    <div className="swiper-slide current active" data-val="0">
                        <img className="img-responsive img-full"
                             src="../../img/detail/m_slide_1s.jpg" alt=""/>
                    </div>
                    <div className="swiper-slide" data-val="1">
                        <img className="img-responsive img-full"
                             src="../../img/detail/m_slide_2s.jpg" alt=""/>
                    </div>
                    <div className="swiper-slide" data-val="2">
                        <img className="img-responsive img-full"
                             src="../../img/detail/m_slide_3s.jpg" alt=""/>
                    </div>
                    <div className="swiper-slide" data-val="3">
                        <img className="img-responsive img-full"
                             src="../../img/detail/m_slide_4s.jpg" alt=""/>
                    </div>
                    <div className="swiper-slide" data-val="4">
                        <img className="img-responsive img-full"
                             src="../../img/detail/m_slide_5s.jpg" alt=""/>
                    </div>
                </div>
                <div className="pagination hidden"/>
            </div>
        </div>
    );
};

export default Galery01;