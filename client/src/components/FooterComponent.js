import React from 'react';
import { Link } from 'react-router-dom';
function Footer(props) {
    return(
        <div className="footer text-dark">
            <div className="container">
                <div className="row justify-content-center">             
                    <div className="col-4 offset-1 col-sm-2">
                        <h5>Links</h5>
                        <ul className="list-unstyled">
                            <li><Link to="/home" className="text-dark" >Home</Link></li>
                            <li><Link to="/aboutus" className="text-dark">About Us</Link></li>
                            <li><Link to="/Courses" className="text-dark">All Courses</Link></li>
                            <li><Link to="/Instructor" className="text-dark">Faculty</Link></li>
                            <li><Link to="/contactus" className="text-dark">Contact Us</Link></li>
                        </ul>
                    </div>
                    <div className="col-7 col-sm-5">
                        <h5>Our Address</h5>
                        <address className="text-dark">
                        Hyderabad, Telangana<br />
                        INDIA<br />
                        <i className="fa fa-phone fa-lg"></i>: <a className="text-dark" href="tel:+91 8978661535">8978661535</a><br />
                        <i className="fa fa-envelope fa-lg"></i>: <a className="text-dark" href="mailto:mohammed.tausifansari@gmail.com">
                            mohammed.tausifansari@gmail.com</a>
                        </address>
                    </div>
                    <div className="col-12 col-sm-4 align-self-center">
                        <div className="text-center">
                            <a className="btn btn-social-icon btn-github" href="https://github.com/"><i className="fa fa-github"></i></a>
                            <a className="btn btn-social-icon btn-facebook" href="https://www.facebook.com/"><i className="fa fa-facebook"></i></a>
                            <a className="btn btn-social-icon btn-linkedin" href="https://www.linkedin.com/"><i className="fa fa-linkedin"></i></a>
                            <a className="btn btn-social-icon btn-twitter" href="https://twitter.com/"><i className="fa fa-twitter"></i></a>
                            <a className="btn btn-social-icon" href="mailto:mohammed.tausifansari@gmail.com"><i className="fa fa-envelope-o"></i></a>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">             
                    <div className="col-auto">
                        <p>© Copyright 2020 Course-S</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;