import React from "react";
import Header from "../Header/Header";
import MainBar from "../MainBar/MainBar";
import SideBar from "../SideBar/SideBar";
import './Landing.css';

export default function Landing () {

    return (
        <div id="grid-container">

            <div id="header">
                <Header/>
            </div>

            <div id="sidebar">
                <SideBar/>
            </div>

            <div id="mainbar">
                <MainBar/>
            </div>

        </div>
    )
}