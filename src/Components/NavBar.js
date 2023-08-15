// NAVBAR.JS

import {Link} from 'react-router-dom';

// ASSETS
import logodark from '../assets/logodark.png';


function NavBar() {

    return (
        <nav>
            <figure>
                <img src={logodark} alt='logo in black' />
            </figure>
            <ul>
                <li>
                    <Link to={`/`}>
                        <h4>Home</h4>
                    </Link>
                </li>
                <li>
                    <Link to={`Shop`}>
                        <h4>Shop</h4>
                    </Link>
                </li>
                <li>
                    <Link to={`Pages`}>
                        <h4>Pages</h4>
                    </Link>
                </li>
                <li>
                    <Link to={`Blog`}>
                        <h4>Blog</h4>
                    </Link>
                </li>
                <li>
                    <Link to={`Features`}>
                        <h4>Features</h4>
                    </Link>
                </li>
                <li>
                    <Link to={`Elements`}>
                        <h4>Elements</h4>
                    </Link>
                </li>
            </ul>
            <ul>
                <li>
                    <Link to={`MyAccount`}>
                        <h4>My Account</h4>
                    </Link>
                </li>
                <li>
                    <Link to={`Search`}>
                        <h4>Search</h4>
                    </Link>
                </li>
                <li> 
                    <Link to={`Cart`}>
                        <h4>Cart</h4>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;