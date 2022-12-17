import React from "react";
import Job from "../Job/Job";
import "./MainBar.css"

export default function MainBar() {

    return (
        <>
            <p id="experience" class="mainbar-titles"> Experience </p>

            <div id="left-jobs">

                <div id="rollup" class="job-entry">

                    <div id="rollup-title" class="experience-title"> 
                        <span id="rollup-text"> Rollup </span>
                        <span class="job-date"> (01/2022 - 05/2022) </span>
                    </div>

                    <h3> Product Manager / Associate Software Engineer </h3>

                    <span class="job-description"> 
                        Rollup is a hardware visualization startup that helps systems engineers keep track  <br/>
                        of iterations of a product that they are developing. Developed the flow view feature <br/>
                        of the product which allows systems complex systems stored on the platform to be <br/> 
                        visualized engineers to visualize the different components of a hardware system and see <br/>
                        how the components are integrated hardware system and see how the components are <br/>
                        integrated to a whole. Designed and Built DB backend on Supabase for RDS and Firebase <br/>
                        for NoSQL. Created visualization metrics on the platform and built authentication and <br/>
                        authorization features using AWS Lambda. <br/>
                    </span>

                </div>


                <div id="tesla" class="job-entry">

                    <div id="tesla-title" class="experience-title"> 
                        <span id="tesla-text"> Tesla </span>
                        <span class="job-date"> (08/2021 - 12/2021) </span>
                    </div>

                    <h3> Software Engineering Intern / Data Science Intern </h3>

                    <span class="job-description"> 
                            Worked with the Auto-Pilot team training computer vision machine learning models on <br/>
                            the Model X and Model Y cars. Was also on the precision recall team where I built a <br/>
                            pipeline that took data from embedded systems on the manufacturing line to flag <br/>
                            certain cars which might fail systems and stress tests. The model that I built correctly <br/>
                            flagged 4% of cars that passed human eye tests but were still not safe for market <br/>
                            according to Tesla Standards.
                    </span>

                </div>


                <div id="aws" class="job-entry">

                    <div id="aws-title" class="experience-title"> 
                        <span id="aws-text"> AWS </span>
                        <span class="job-date"> (06/2021 - 09/2021 & 06/2022 - 09/2022) </span>
                    </div>

                    <h3> Solutions Architect Intern </h3>

                    <span class="job-description"> 
                            I was on the cloud infrastructure team, designing higher efficiency storage and <br/>
                            creating algorithms that determine the best type of storage that certain data is <br/>
                            best fit for. Designed a highly reliable and performance efficient database system <br/>
                            and a point of recovery for any database failure. Worked with AWS Clients to design, <br/>
                            propose and modify infrastructure to fit performance, cost and security needs of <br/>
                            client. Pitched my own AWS service, AWS EasyView, which is a visualization service <br/>
                            for AWS and worked with the technical team to create the Service Proposal.
                    </span>

                </div>


                <div id="unisys" class="job-entry">

                    <div id="unisys-title" class="experience-title"> 
                        <span id="unisys-text"> Unisys </span>
                        <span class="job-date"> (02/2021 - 06/2021) </span>
                    </div>

                    <h3> Solutions Architect Intern </h3>

                    <span class="job-description"> 
                            I was on the cloud infrastructure team, designing higher efficiency storage and <br/>
                            creating algorithms that determine the best type of storage that certain data is best<br/>
                            fit for. Designed a highly reliable and performance efficient database system and a <br/>
                            point of recovery for any database failure. Worked with AWS Clients to design, test<br/>
                            and modify infrastructure to fit the performance, cost and security needs of the client.
                    </span>

                </div>

                <hr id="vertical-divider"/>

            </div>

        <div id="right-jobs">
            <div id="coupa" class="job-entry">
                <div id="coupa-title">
                    <span id="coupa-text"> Coupa </span>
                    <span class="job-date"> (06/2019 - 09/2019) </span>
                </div>

                <h3> Data Engineering Intern </h3>

                <span class="job-description">
                    Trained and ran over a dozen machine learning classifier models and neural nets which used <br/>
                    image processing libraries that looked at thousands of images of receipts and classified <br/>
                    them as either real or forged. Using the popular D3.js library, I also built large analytics <br/>
                    diagrams consisting of over 10 million data points of process flow to show which steps in a <br/>
                    process were causing the most delay in task completion. I also performed many code reviews <br/>
                    and wrote unit tests for commits of team members.
                </span>
            </div>

            <div id="stanford" class="job-entry">
                <div id="stanford-title">
                    <span id="stanford-text"> Stanford </span>
                    <span class="job-date"> (06/2018 - 09/2018) </span>
                </div>

                <h3> Data Engineering Intern </h3>

                <span class="job-description">
                    In charge of leading a team of 6 interns to design, create and document a prototype that <br/>
                    transfers programs, data, and documents from physical servers into AWS Cloud Containers. <br/>
                    I designed and created the Storage Hierarchy in Amazon S3 and used API Gateway and REST <br/>
                    API Protocol with JSON to access the data once inside AWS and Lambda functions to run <br/>
                    analytics programs of the data inside S3. <br/>
                </span>
            </div>

            <hr id="job-project-line"/>

        </div>

        <div id="pro-cert">
            <div id="pro-cert-title"> Project & Certifications </div>

            <div class="project">
                <div id="project-title"> Cofounder / CTO of Venue (10/2017 - Present) </div>
                <div id="project-name"> Won West Coast TigerLaunch Competition </div>
                <span class="project-text">
                    In my Freshman year, my roommates and I came up with the idea for our application called <br/>
                    Venue which would allow musicians and artists to easily contact local bars and restaurants <br/>
                    to perform. We pitched our idea and application at a startup competition and won the state <br/>
                    competition and advanced to the regional competition in Seattle where we finished third <br/>
                    place. Working on Venue helped me understand the SAS (Software-as-a-Service) platform and <br/>
                    business model.
                </span>
            </div>

            <div class="project">
                <div id="project-title"> Cofounder / CTO of Venue (10/2017 - Present) </div>
                <div id="project-name"> Won West Coast TigerLaunch Competition </div>
                <span class="project-text">
                    In my Freshman year, my roommates and I came up with the idea for our application called <br/>
                    Venue which would allow musicians and artists to easily contact local bars and restaurants <br/>
                    to perform. We pitched our idea and application at a startup competition and won the state <br/>
                    competition and advanced to the regional competition in Seattle where we finished third <br/>
                    place. Working on Venue helped me understand the SAS (Software-as-a-Service) platform and <br/>
                    business model.
                </span>
            </div>

            <div id="certs">
                <h3> AWS Certified Solutions Architect Associate (07/11/2021) </h3>
                <h3> AWS Certified Solutions Architect Professional (08/15/2021) </h3>
            </div>

        </div>


        </>
    )
}