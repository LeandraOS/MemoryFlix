import React from 'react';
import Logo from "../../assets/image/LogoMain.png";
import './Menu.css';
import Button from '../Button';


function Menu (){
    return(
        <nav className="Menu">
            <a href= "/">
            <img class="Logo"src={Logo} alt= "AluraFlix logo"/>
            </a>

            <Button as="a" className="ButtonLink" href="/">
                Novo vídeo
            </Button>
        </nav>
    );
}

export default Menu;