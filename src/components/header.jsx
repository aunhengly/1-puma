import React, { Component } from 'react';
import '../CSS/Header.css';

class Header extends Component {
    render() {
        return (
            <nav>
                    <ul>
                        <li className='nav-logo'><img id='logo' src='https://imgur.com/iIxCEum.png' /></li>
                        <li className='nav-pages'>
                            <div className='site-nav'>
                                <li className='nav-list'><a className='menu' href=''>WOMEN</a></li>
                                <li className='nav-list'><a className='menu'href=''>MENS</a></li>
                                <li className='nav-list h-border'><a className='menu' href=''>KIDS</a></li>
                                <li className='nav-list h-border'><a className='menu'href=''>EXPLORE</a></li>
                            </div>
                        </li>
                        <li>
                            <div className='nav-search'>
                                <i id='searchIcon' className="fa fa-search"></i>
                                <input className='inputSearch' type='text' placeholder='Search' />
                            </div>
                        </li>
                        <li>
                            <div className='nav-chart'>
                                <a href=''>
                                    <i id='liveChart' className="fab fa-rocketchat"></i>
                                    <span>Live Chart</span>
                                </a>
                            </div>
                        </li>
                        <li>
                            <div className='nav-login-language'>
                                <a href=''>
                                    <i id='login' className="fa fa-user-circle"></i>
                                    <span>Login</span>
                                </a>
                            </div>
                            <div className='nav-login-language'>
                                <a href=''>
                                    <img id='language-logo' src="https://us.puma.com/on/demandware.static/Sites-NA-Site/-/default/dwae78a501/flags/us.svg" />
                                    <span>En</span>
                                </a>
                            </div>
                        </li>
                        <li>
                            <div>
                                <a href=''>
                                    <span>0</span>
                                    <i id='bag' class="fas fa-shopping-bag"></i>
                                </a>
                            </div>
                        </li>
                        <li className='nav-hamburger'>
                            {/* Creating Hamburger */}
                            <a href='#' onClick=''>
                                <svg width="25" height="25">
                                    <path d="M0,5 20,5" stroke="#000" stroke-width="2" />
                                    <path d="M0,14 20,14" stroke="#000" stroke-width="2" />
                                    <path d="M0,23 20,23" stroke="#000" stroke-width="2" />
                                </svg>
                            </a>
                        </li>
                    </ul>

            </nav>
        );
    }

}


export default Header;