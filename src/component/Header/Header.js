import React from 'react';
import logo from '../../images/logo2.png';
import './Header.css'
const Header = () => {
    return (
        
        <div>
            <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="#"><img src={logo}></img></a>
                {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button> */}

                <div className="collapse navbar-collapse " id="navbarSupportedContent">
                    {/* <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Lohin</a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Login</a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Login</a>
                        </li>
                    </ul> */}
                    
            </div>
</nav>
            </div>
        </div>
    );
};

export default Header;