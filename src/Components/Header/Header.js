import React from "react";
import './Header.css';
import CircleIcon from '@mui/icons-material/Circle';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Header () {

    return (
        <div>
            <h1 id="name"> Rohan Ramani </h1>
            <span id="number"> 650-495-4958 </span>
            <CircleIcon id="circle"/>
            <span id="email"> rramani1230@gmail.com </span>
            
            <a href="https://www.linkedin.com/in/rohan-ramani-066093155/"> 
                <LinkedInIcon id="linkedin"/>
            </a>
            
            <a href="https://www.facebook.com/RohanRamani1230">
                <FacebookIcon id="facebook"/>
            </a>

            <a href="https://www.instagram.com/rohan_ramani_1230/">
                <InstagramIcon id="instagram"/>
            </a>

            <a href="https://github.com/rramani1230">
                <GitHubIcon id="github"/>
            </a>

        </div>
    );
}