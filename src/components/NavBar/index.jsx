import React from 'react';
import CartWidget from '../CartWidget';



export const NavBar = () => {
    return ( 
        <div className='container'>
            <nav className='nav'>
                <div className='nav__brand'>
                    <a className='nav__link' href="#">Enfoque al infinito</a>
                </div>
                <ul className='nav__list'>
                    <li>
                        <a className='nav__link' href="#">Italia</a> 
                    </li>
                    <li>
                        <a className='nav__link' href="#">Austria</a> 
                    </li>
                    <li>
                        <a className='nav__link' href="#">alemania</a> 
                    </li>
                    <li>
                        <a className='nav__link' href="#">
                        </a> 
                        <CartWidget />
                    </li>

                </ul>
            </nav>

        </div>
     );
}
 
export default NavBar;