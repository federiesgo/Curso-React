import React from "react";
import { Link } from 'react-router-dom';
import logo from "../../img/logo.png";
import CartWidget from "./CartWidget.jsx";

const categories = [
    {
        id: 1,
        path: '/',
        name: 'Home'
    },
    {
        id: 2,
        path: '/category/sillas',
        name: 'Sillas'
    },
    {
        id: 3,
        path: '/category/auriculares',
        name: 'Auriculares'
    },
    {
        id: 4,
        path: '/category/mouses',
        name: 'Mouses'
    }
]

const Navbar = () => {
    return (

        <nav className="navbar navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="logo" to={'/'}>
                    <span id="logo">
                        <img className="logoNav" src={logo} alt="" />
                        <h1 className="colorEmpar">
                            Empar<span className="colorSpan">G</span>
                        </h1>
                    </span>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="offcanvas offcanvas-end text-bg-dark" tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Artículos</h5>
                        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <ul className="navbar-ul-fix">
                            {categories.map((cat) => (
                                <div key={cat.id} data-bs-dismiss="offcanvas">
                                    <Link to={cat.path} decoration="none" color="inherit" >{cat.name}</Link>
                                </div>
                            ))}
                        </ul>
                        <Link id="ver-carrito" className="logo" to={"/cart"}> <button className={'btn btn-outline-success'}><CartWidget />Ver carrito</button> </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
};

export default Navbar;