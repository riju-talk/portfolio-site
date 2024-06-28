import React from "react";
import { Container, Row } from "react-bootstrap";
import Card from "../Components/Card/Card";
import this_site from "../assets/this_site.png";
import "./Projects.css";
import sign_lang from "../assets/sign_lang.png";
import online_store from "../assets/online_store.png";
import notes_app from "../assets/notes_app.png";
import bundle_scripts from "../assets/bundle_scripts.png";
import ecell_website from "../assets/e-cell.png";
import heydo from "../assets/heydo.png";
import { Helmet } from "react-helmet";


function Projects() {
    return (
        <div>
            <Helmet>
                <title>Take a Look at my projects</title>
                <meta name="description" content="Projects" />
            </Helmet>
            <Container fluid>
                <Row><h1>My Projects,</h1></Row>
                <Row className="grid gap-0 column-gap-5">
                    <div className="col-3 pt-4 px-3">
                        <div id="list-projects" className="list-group">
                            <a className="list-group-item list-group-item-action" href="#list-item-1">This Site</a>
                            <a className="list-group-item list-group-item-action" href="#list-item-2">Sign Language Classifier</a>
                            <a className="list-group-item list-group-item-action" href="#list-item-3">Online Electronics Store</a>
                            <a className="list-group-item list-group-item-action" href="#list-item-4">Note Taking and List Making App</a>
                            <a className="list-group-item list-group-item-action" href="#list-item-5">Bundle of Shell Scripts</a>
                            <a className="list-group-item list-group-item-action" href="#list-item-6">E-Cell IIIT-Delhi Website</a>
                            <a className="list-group-item list-group-item-action" href="#list-item-7">Heydo Tech - Form Builder</a>
                        </div>
                    </div>
                    <div className="col-8 overflow-y-scroll content">
                        <div data-bs-spy="scroll" data-bs-target="#list-projects" data-bs-smooth-scroll="true" className="scrollspy-example over" tabIndex="0">
                            <Card id="list-item-1" im={this_site} title="This Site" description="This website is my stepping stone towards webdev, I had used React.Js using Vite to execute the front end and it also contains a small back end feature which you can see in the /social route, just click on social. This is my 3rd portfolio site, which is responsive for all screen sizes. You can see my certifications and credentials in my resume and on my linked in profile."></Card>
                            <Card id="list-item-2" im={sign_lang} title="Sign Language Classifier" description="This is my project I made for my Statistical Machine Learning course, I use Datasets from Kaggle, I used couple datasets and Algorithms to achieve the same, I used CNN, FNN using both signmoid and Relu activation function to yeild better accuracy. But it still needs some work as there are minot fixatures to be made. I used opencv, tensorflow and keras to handle the traning and testing lagic, also did data augmentations for better result. "></Card>
                            <Card id="list-item-3" im={online_store} title="Online Electronics Store" description="This is a ful stack project based on React.Js and Python-Flask and ORM as the base. This is a start to end full stack project. I had worked with MySQL as the Database for this project and I has also used the technique of password hashing and JWT tokens for added security and I had also taken care of adding items to cart and then checking out from the database."></Card>
                            <Card id="list-item-4" im={notes_app} title="Note Taking and List Making App" description="This is my project I made for my Statistical Machine Learning course, I use Datasets from Kaggle, I used couple datasets and Algorithms to achieve the same, I used CNN, FNN using both signmoid and Relu activation function to yeild better accuracy. But it still needs some work as there are minot fixatures to be made. I used opencv, tensorflow and keras to handle the traning and testing lagic, also did data augmentations for better result. "></Card>
                            <Card id="list-item-5" im={bundle_scripts} title="Bundle of Shell Scripts" description="This is a collection of shell scripts that I have created to automate various tasks. These scripts are designed to improve productivity and streamline repetitive tasks. They cover a wide range of functionalities, including file manipulation, system administration, and data processing. Each script is well-documented and can be easily customized to suit specific needs."></Card>
                            <Card id="list-item-6" im={ecell_website} title="E-Cell IIIT-Delhi Website" description="I have contributed to the development of the E-Cell IIIT-Delhi website. E-Cell is an entrepreneurship cell that promotes innovation and startup culture in the college. The website serves as a platform to showcase various events, initiatives, and success stories. I have worked on implementing new features, improving the user interface, and optimizing the performance of the website. It is built using React.js and integrates with a backend API for data retrieval and management."></Card>
                            <Card id="list-item-7" im={heydo} title="Heydo Tech - Form Builder" description="Heydo Tech is a startup that specializes in form building solutions. I have been involved in the development of their flagship product, a drag-and-drop form builder. The application allows users to create custom forms with various input fields, validation rules, and submission actions. It also provides an intuitive interface for managing form submissions and generating reports. I have worked on both the frontend and backend components of the application, using React.js for the frontend and Node.js for the backend."></Card>
                        </div>
                    </div>
                </Row>
            </Container>
        </div>
    );
}

export default Projects;
