import React from "react";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
    return (
        <div className="contenedor-footer">
            <footer>
                <div className="my-5 d-flex justify-content-evenly">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FacebookIcon /></a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><InstagramIcon /></a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><TwitterIcon /></a>
                </div>
                <p className="text-center">EmparGaming. Todos los derechos reservados 2022</p>
            </footer>
        </div>
    )
}

export default Footer;