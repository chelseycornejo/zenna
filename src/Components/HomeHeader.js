// HOMEHEADER.JS

//COMPONENTS

import { Link } from 'react-router-dom';

// ASSETS

function HomeHeader() {

    return(
        <div className="homePageHeader">
            <h1>Great Fashion 2015</h1>
            <h3><hr></hr>New Arrivals Collection<hr></hr></h3>
            <Link to={`Shop`} className="shopNow">
                <h5>Shop Now</h5>
            </Link>
        </div>
    )
}

export default HomeHeader;