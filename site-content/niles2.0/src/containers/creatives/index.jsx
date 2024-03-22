import React from "react";
import './styles.scss';
import Sections from "../sections";

import image1 from '../../assets/writings.jpg';
import image2 from '../../assets/photography.jpg';
import image3 from '../../assets/banksy.jpg';
import image4 from '../../assets/code_diary.jpg';


const descriptions=[
    "Writing is my passion, I Write short stories and I have also started a novel. Find them here.",
    "I express my thoughts and knowledge using photography, I love taking pictures everywhere. Find them here.",
    "Life is a single player game, let's make it a co-op and fight hand in hand. Join my blog on life.",
    "This is my tech diaries, I have a knack to learn new stuff. keep checking out."
]


function Creative() {
    return (
        <div>
            <h1>Creative Room,</h1>
            <div className="content">
                <Sections image={image1} title={"Writing"} description={descriptions[0]}></Sections>
                <Sections image={image2} title={"Photography"} description={descriptions[1]}></Sections>
                <Sections image={image3} title={"Blog On Life"} description={descriptions[2]}></Sections>
                <Sections image={image4} title={"Tech Diary"} description={descriptions[3]}></Sections>
            </div>
        </div>
    )
}

export default Creative;