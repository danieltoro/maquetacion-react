import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-dark type-2">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                        <div className="footer-block">
                            <img src="img/theme-1/logo.png" alt="" className="logo-footer" />
                                <div className="f_text color-grey-7">Lorem ipsum dolor sit amet, consectetur adipiscing
                                    elit, sed do eiusmod tempor incididunt ut labore magna aliqua. Ut aliquip ex ea
                                    commodo consequat.
                                </div>
                                <div className="footer-share">
                                    <a href="#"><span className="fa fa-facebook"></span></a>
                                    <a href="#"><span className="fa fa-twitter"></span></a>
                                    <a href="#"><span className="fa fa-google-plus"></span></a>
                                    <a href="#"><span className="fa fa-pinterest"></span></a>
                                </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 col-sm-6 no-padding">
                        <div className="footer-block">
                            <h6>Travel News</h6>
                            <div className="f_news clearfix">
                                <a className="f_news-img black-hover" href="#">
                                    <img className="img-responsive" src="img/home_6/news_1.jpg" alt="" />
                                        <div className="tour-layer delay-1"></div>
                                </a>
                                <div className="f_news-content">
                                    <a className="f_news-tilte color-white link-red" href="#">amazing place</a>
                                    <span className="date-f">Mar 18, 2015</span>
                                    <a href="#" className="r-more">read more</a>
                                </div>
                            </div>
                            <div className="f_news clearfix">
                                <a className="f_news-img black-hover" href="#">
                                    <img className="img-responsive" src="img/home_6/news_2.jpg" alt="" />
                                        <div className="tour-layer delay-1"></div>
                                </a>
                                <div className="f_news-content">
                                    <a className="f_news-tilte color-white link-red" href="#">amazing place</a>
                                    <span className="date-f">Mar 18, 2015</span>
                                    <a href="#" className="r-more">read more</a>
                                </div>
                            </div>
                            <div className="f_news clearfix">
                                <a className="f_news-img black-hover" href="#">
                                    <img className="img-responsive" src="img/home_6/news_1.jpg" alt="" />
                                        <div className="tour-layer delay-1"></div>
                                </a>
                                <div className="f_news-content">
                                    <a className="f_news-tilte color-white link-red" href="#">amazing place</a>
                                    <span className="date-f">Mar 18, 2015</span>
                                    <a href="#" className="r-more">read more</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                        <div className="footer-block">
                            <h6>Tags:</h6>
                            <a href="#" className="tags-b">flights</a>
                            <a href="#" className="tags-b">traveling</a>
                            <a href="#" className="tags-b">sale</a>
                            <a href="#" className="tags-b">cruises</a>
                            <a href="#" className="tags-b">cars</a>
                            <a href="#" className="tags-b">hotels</a>
                            <a href="#" className="tags-b">tours</a>
                            <a href="#" className="tags-b">booking</a>
                            <a href="#" className="tags-b">countries</a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                        <div className="footer-block">
                            <h6>Contact Info</h6>
                            <div className="contact-info">
                                <div className="contact-line color-grey-3"><i className="fa fa-map-marker"></i><span>Aenean vulputate porttitor</span>
                                </div>
                                <div className="contact-line color-grey-3"><i className="fa fa-phone"></i><a
                                    href="tel:93123456789">+93 123 456 789</a></div>
                                <div className="contact-line color-grey-3"><i className="fa fa-envelope-o"></i><a
                                    href="mailto:">letstravel@mail.com</a></div>
                                <div className="contact-line color-grey-3"><i className="fa fa-globe"></i><a
                                    href="#">let’s_travel@world.com</a></div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-link bg-black">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="copyright">
                                <span>&copy; 2015 All rights reserved. LET'STRAVEL</span>
                            </div>
                            <ul>
                                <li><a className="link-aqua" href="#">Privacy Policy </a></li>
                                <li><a className="link-aqua" href="#">About Us</a></li>
                                <li><a className="link-aqua" href="#">Support </a></li>
                                <li><a className="link-aqua" href="#">FAQ</a></li>
                                <li><a className="link-aqua" href="#">Blog</a></li>
                                <li><a className="link-aqua" href="#"> Forum</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;