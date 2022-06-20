import React from "react";
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import logo from "../../img/logo.png"





export const Navbar = () => {
    return  (
        <div className="divNav">
            <a id="logo">
                <img className="logoNav" src={logo} alt="" />
                <h1 className="colorEmpar">
                EMPAR<span className="colorSpan">SPA</span>
            </h1>
            </a>            
            <div className="divUlNav">
            <div role="presentation">
                <Breadcrumbs maxItems={2} aria-label="breadcrumb">
                    <Link underline="hover" color="black" href="#">
                    Home
                    </Link>
                     <Link underline="hover" color="black" href="#">
                    Masajes
                    </Link>
                    <Link underline="hover" color="black" href="#">
                    Manicura
                    </Link>
                    <Link underline="hover" color="black" href="#">
                     Pestañas
                    </Link>                    
                </Breadcrumbs>
            </div>
            </div>
        </div>
    ) 
};