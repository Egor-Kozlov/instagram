import React from 'react'

function Header (params) {
    
    return (
    <header className = 'header'>
        <div className='wrap'>
                <div className = 'header-logo'></div>
                <nav className = 'header-nav'>
                    <ul className = 'header-nav__list'> 
                        <li className = 'header-nav__item header-nav__item--add'></li>
                        <li className = 'header-nav__item header-nav__item--heart'></li>
                        <li className = 'header-nav__item header-nav__item--messenger'></li>
                    </ul>
                </nav>
        </div>    
    </header>
    )
}

export default Header