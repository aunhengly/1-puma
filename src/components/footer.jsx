import React, { Component } from 'react';
import '../CSS/Footer.css';

class Header extends Component {
    render() {
        return (
            <div className='footer'>
                <div className='f-header'>
                    <div className='f-logo'>
                        <img id='logo' src='https://imgur.com/iIxCEum.png' />
                    </div>
                    <div className='email'>
                        <i class="fa fa-envelope-open"></i>
                        <span id='singup-text'>Email SignUp</span>
                        <input id='sign-email' type='email' placeholder='Email' />
                        <button className='arrow' type='submit'><i class="fa fa-arrow-right"></i></button>
                    </div>
                </div>
                <div className='sub-footer'>
                    <div className='information'>
                        <div className='contact'>
                            <h3 id='contact-us'><i class="fa fa-address-book icons"></i>CONTACT US</h3>
                            <div className='f-detail'>
                                <div className='location'>
                                    <span>US</span>
                                </div>
                                <span><a tel='1-619-817-1489'>1-619-817-1489</a></span>
                                <br/>
                                7am-MIDNIGHT PCT
                                <br/>
                                7 days a week
                                <br/>
                                <span><a className='none-link' href='#'>aunhengly@gmail.com</a></span>
                                <div className='location'>
                                    <a href='#' className='none-link'><i className="fa fa-map-marker-alt icons"></i>Store Locator</a>
                                </div>
                            </div>
                        </div>
                        <div className='f-support'>
                            <h3><i class="fa fa-question-circle icons"></i>SUPPORT</h3>
                            <div className='support'>
                                <div className='support1'>
                                    <ul className='f-support1'>
                                        <li><a href="#" className="none-link">Customer Service</a></li>
                                        <li><a href="#" className="none-link">Check Gift Card Balance</a></li>
                                        <li><a href="#" className="none-link">Contact Us</a></li>
                                        <li><a href="#" className="none-link">Return Policy</a></li>
                                    </ul>
                                </div>
                                <div className='support1'>
                                    <ul className='f-support1'>
                                        <li><a href="#" className="none-link">Studen Discount</a></li>
                                        <li><a href="#" className="none-link">Privacy Policy</a></li>
                                        <li><a href="#" className="none-link">Term of Use</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='f-about'>
                            <h3>ABOUT PUMA</h3>
                            <div className='about'>
                                <div className='about1'>
                                    <ul className='f-about1'>
                                        <li><a href="#" className="none-link">Company</a></li>
                                        <li><a href="#" className="none-link">Corporate News</a></li>
                                        <li><a href="#" className="none-link">Press Center</a></li>
                                    </ul>
                                </div>
                                <div className='about1'>
                                    <ul className='f-about1'>
                                        <li><a href="#" className="none-link">Investor</a></li>
                                        <li><a href="#" className="none-link">Sustainability</a></li>
                                        <li><a href="#" className="none-link">Careers</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        Policy
                    </div>
                </div>
            </div>

        );
    }
}

export default Header;