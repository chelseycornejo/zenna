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
            </ul>
        </nav>
    )
}

export default NavBar;