import React from "react";
import Breadcrumbs from '@mui/material/Breadcrumbs';
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
        path: '/category/masajes',
        name: 'Masajes'
    },
    {
        id: 3,
        path: '/category/manicura',
        name: 'Manicura'
    },
    {
        id: 4,
        path: '/category/pestanias',
        name: 'Pestañas'
    }
]


const Navbar = () => {
    return (

        <nav className="divNav">
            <Link className="logo" to={'/'}>
                <a id="logo">
                    <img className="logoNav" src={logo} alt="" />
                    <h1 className="colorEmpar">
                        EMPAR<span className="colorSpan">SPA</span>
                    </h1>
                </a>
            </Link>
            <div className="divUlNav">
                <div role="presentation">
                    <Breadcrumbs maxItems={4} aria-label="breadcrumb">
                        <ul>
                            {categories.map((cat) => (
                                <Link to={cat.path} key={cat.id} underline="hover" color="black" >{cat.name}</Link>
                            ))}
                        </ul>
                        <CartWidget />
                    </Breadcrumbs>
                </div>
            </div>
        </nav>

    )
};

export default Navbar;