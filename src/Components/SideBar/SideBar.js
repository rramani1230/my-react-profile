import React from "react";
import "./SideBar.css";

export default function SideBar () {

    return (
        <div id="sidebar">
            <div id="education">
                <p id="education-title" class="sidebar-titles"> Education Title </p>
                
                <p class="berkeley"> U.C Berkeley (2021 - 2023) </p>
                <p class="berkeley"> M.S Info Systems and Computer Science (3.715) </p>
                
                <hr id="college-divider"/>

                <p class="slo"> Cal Poly SLO (2017 - 2021) </p>
                <p class="slo"> B.S Software Engineering (3.911) </p>


            </div>

            <hr id="education-divider"/>

            <div id="relevant-coursework">
                <p id="rc-title" class="sidebar-titles"> Relevant Coursework </p>
                <ul id="coursework">
                    <li class="courses"> CPE 202 - Data Structures (Python) </li>
                    <li class="courses"> CPE 203 - Object Oriented Programming (Java)  </li>
                    <li class="courses"> CSC 308/309 - Agile Software Engineering (Dart/Flutter) </li>
                    <li class="courses"> CPE 357 - Systems Programming (C) </li>
                    <li class="courses"> CSC 349 - Algorithm Analysis and Implementation (Java) </li>
                    <li class="courses"> CSC 365/366 - Intro & Advanced Database Design (SQL / Java) </li>
                    <li class="courses"> CPE 440 - Operating Systems I (C)</li>
                    <li class="courses"> DATA 301 - Intro to Data Analysis & Machine Learning  </li>
                    <li class="courses"> CSC 464 - Knowledge and Discovery of Data (Python) </li>
                    <li class="courses"> CSC 484 - User Interface Design and Development (Figma) </li>
                    <li class="courses"> INFO 225 - Customer Acquisition & Segmenting </li>
                    <li class="courses"> INFO 271 - Advanced Quantitative Analysis </li>
                    <li class="courses"> INFO 287 - Venture Dictionary & Entrepreneurship </li>
                    <li class="courses"> INFO 288 - Product Design & Development </li>
                    
                </ul>
            </div>

            <hr id="coursework-divider"/>

            <div id="technologies"> 
                <p id="language" class="sidebar-titles"> Language / Technologies </p>
                <span class="tech" id="python"> Python </span>
                <span class="tech" id="java"> Java </span>
                <span class="tech" id="c"> C/C++ </span>
                <span class="tech" id="tensor"> TensorFlow </span>
                <span class="tech" id="react"> React </span>
                <span class="tech" id="react-native"> React Native </span>
                <span class="tech" id="aws-cloud"> AWS </span>
                <span class="tech" id="azure-cloud"> Azure Cloud </span>
                <span class="tech" id="javascript"> Javascript </span>
                <span class="tech" id="typescript"> TypeScript </span>
                <span class="tech" id="firebase"> Firebase </span>
                <span class="tech" id="supabase"> Supabase </span>
            </div>

        </div>
    )
}