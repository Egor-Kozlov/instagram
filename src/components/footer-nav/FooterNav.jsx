import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function FooterNav(params) {
    
    return (
        <Router>
            <footer className = 'footer-nav'>
                <div className='wrap'>
                <ul className = 'footer-nav__list'>
                    <li className = 'footer-nav__item footer-nav__item--home'>
                        <Link to = '/'></Link>
                    </li>
                    <li className = 'footer-nav__item footer-nav__item--search'>
                        <Link to = '/search'></Link>
                    </li>
                    <li className = 'footer-nav__item footer-nav__item--video'>
                        <Link to = '/video'></Link>
                    </li>
                    <li className = 'footer-nav__item footer-nav__item--shop'>
                        <Link to = '/shop'></Link>
                    </li>
                    <li className = 'footer-nav__item footer-nav__item--profile'>
                        <Link to = '/profile'></Link>
                    </li>
                </ul>
                </div>
            </footer>
            <Switch>
                
            </Switch>
        </Router>
    )
}

export default FooterNav