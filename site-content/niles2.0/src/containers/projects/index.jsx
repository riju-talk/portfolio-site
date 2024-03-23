import React from "react";
import './styles.scss';
function Project() {
    return (
        <div>
            <h1>Projects,</h1>
            {/*<div className="row row-cols-1 row-cols-md-3 g-4 content">
                <Card image={image1} title={"This website"} discription="This is my website I made using React.Js, Sass and CSS" sub_title="Website"></Card>
                <Card image={image2} title={"Note Making App"} discription="This is my first attempt at app-develpment using flutter and hive" sub_title="Mobile-App"></Card>
                <Card image={image3} title={"Sign Language Clssifier"} discription="This is my first ML project about a sign language classifier" sub_title="Code"></Card>
                <Card image={image3} title={"E-commerece Webpage"} discription="This is my Dbms project" sub_title="Website"></Card>
            </div>*/}
            <div class="main-body">
                <div className="row">
                    <div className="col-3">
                        <nav id="navbar-example3" class="h-100 flex-column align-items-stretch pe-4 border-end">
                            <nav className="nav nav-pills flex-column">
                                <a className="text-color" href="#item-1">This Website</a>
                                <a className="text-color" href="#item-2">Notes Android App</a>
                                <a className="text-color" href="#item-3">Sign Lanuage Classifier</a>
                                <a className="text-color" href="#item-4">E-Commerse Website KRSR</a>
                                <a className="text-color" href="#item-5">E-Cell IIIT-Delhi Website</a>
                                <a className="text-color" href="#item-6">Group of Shell Scripts</a>
                                <a className="text-color" href="#item-7">Stick Hero Clone</a>
                            </nav>
                        </nav>
                    </div>
                    <div className="col-7">
                        <div data-bs-spy="scroll" data-bs-target="#navbar-example3" data-bs-smooth-scroll="true" className="layout" tabindex="0">
                            <div id="item-1" className="project-item">
                                <h3 className="title-color">This Website</h3>
                                <p>I had made this website using React.Js, Sass and Bootstap CSS framework. This is my second website. First one I made by using HTML, CSS and Javacript only.</p>
                                <p>In this website I put everything related to me. My Social media profiles, my projects and my creative stuff. I am a very passionate writer and I am also a photographer. I have 2 blogs as well. </p>
                                <p><a class="link-opacity-75-hover text-color" href="#">Visit The Repo <i class="bi bi-box-arrow-up-right text-color"></i></a></p>
                            </div>
                            <div id="item-2" className="project-item">
                                <h3 className="title-color">Note Taking and List Making App</h3>
                                <p>I have made my first note taking and list making app using flutter sdk and hive local database. This is just a code right now.</p>
                                <p>Visit my github to know more about dependecies and features of this app.</p>
                                <p><a class="link-opacity-75-hover text-color" href="#">Visit The Repo <i class="bi bi-box-arrow-up-right text-color"></i></a></p>
                            </div>
                            <div id="item-3" className="project-item">
                                <h3 className="title-color">Sign Language Classifier.</h3>
                                <p>This was my college proejct for my Machine Learning course.</p>
                                <p>This was a group project of 2, We made using several datasets from kaggle. We used Python as out programming language and several Python libraries such as Opencv for computer vision and Scikit and Keras for classification. More people are joining this project to make something more useful and inclusive.</p>
                                <p><a class="link-opacity-75-hover text-color" href="#">Visit The Repo <i class="bi bi-box-arrow-up-right text-color"></i></a></p>
                            </div>
                            <div id="item-4" className="project-item">
                                <h3 className="title-color">E-Commerce Website KRSR</h3>
                                <p>This was my college proejct for my Databse Management course.</p>
                                <p>This was also a group project of 4 people we used the similar tech stack as tjis website to create the front-end. To handle the backend however we use python along with the flask framework. We used MYSQL as our databse to store information about projects such as robots, electrical components, users, membership discounts etc.</p>
                                <p><a class="link-opacity-75-hover text-color" href="#">Visit The Repo <i class="bi bi-box-arrow-up-right text-color"></i></a></p>
                            </div>
                            <div id="item-5" className="project-item">
                                <h3 className="title-color">E-Cell IIT-Delhi Website</h3>
                                <p>This E-Cell IIIT-Delhi's Website, I am contributing as a front-end developer to the making of this website.</p>
                                <p>Currently I am working with the about page section of this website. I am using my knwoledge of SASS and React.Js to place content on the site and set some initial routing only to the pages within the body.</p>
                                <p><a class="link-opacity-75-hover text-color" href="#">Visit The Repo <i class="bi bi-box-arrow-up-right text-color"></i></a></p>
                            </div>
                            <div id="item-6" className="project-item">
                                <h3 className="title-color">Group of Shell-Scripts</h3>
                                <p>This is a group of some practice projects me and my friend made in linux to understand how scripts work.</p>
                                <p>More scripts will be added soon. For more utility scripts out there. It already contains 6 scripts, these 6 scripts are utlity scripts for downloading, organising, setting customisation for your linux servers.</p>
                                <p><a class="link-opacity-75-hover text-color" href="#">Visit The Repo <i class="bi bi-box-arrow-up-right text-color"></i></a></p>
                            </div>
                            <div id="item-7" className="project-item">
                                <h3 className="title-color">Stick Hero Game</h3>
                                <p>This is also a college project for my Advanced Programming course.</p>
                                <p>This was also a group project of 2. It was made using Java and Javafx and for making graphics. We compiles the entire proejct into a jar file using apache maven. We design indivudal screens and including points and used serialization to store important classes as game files. It is a rough clone of Stick o Hero game Ketchapp and MetaJoin.</p>
                                <p><a class="link-opacity-75-hover text-color" href="#">Visit The Repo <i class="bi bi-box-arrow-up-right text-color"></i></a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project;