// NAVBAR.JS

import {Link} from 'react-router-dom';

// ASSETS
import logodark from '../assets/logodark.png';
import { FaSearch } from 'react-icons/fa';
import { BsBagFill } from 'react-icons/bs';
function NavBar() {

    return (
        <div className="wrapper navFlex">
            <figure>
                <img src={logodark} alt='logo in black' />
            </figure>
            <nav className="menu">
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
            </nav>
            <ul className="cart-menu">
                <li>
                    <Link to={`MyAccount`}>
                        <h4>My Account</h4>
                    </Link>
                </li>
                <li>
                    <Link to={`Search`}>
                        <h4><FaSearch /></h4>
                    </Link>
                </li>
                <li> 
                    <Link to={`Cart`}>
                        <h4><BsBagFill /></h4>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default NavBar;