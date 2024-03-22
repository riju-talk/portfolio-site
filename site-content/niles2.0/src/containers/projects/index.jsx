import React from "react";
import image1 from "../../assets/portfolio-site.png";
import image2 from "../../assets/note_taking_app.png";
import image3 from "../../assets/placeholder.jpg";

import './styles.scss';
import Card from "../card";
function Project() {
    return (
        <div>
            <h1>Projects,</h1>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                <Card image={image1} title={"This website"} discription="This is my website I made using React.Js, Sass and CSS" sub_title="Website"></Card>
                <Card image={image2} title={"Note Making App"} discription="This is my first attempt at app-develpment using flutter and hive" sub_title="Mobile-App"></Card>
                <Card image={image3} title={"Sign Language Clssifier"} discription="This is my first ML project about a sign language classifier" sub_title="Code"></Card>
                <Card image={image3} title={"E-commerece Webpage"} discription="This is my Dbms project" sub_title="Website"></Card>
            </div>
        </div>
    )
}

export default Project;