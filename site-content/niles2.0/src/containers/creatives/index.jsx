import React from "react";
import './styles.scss';
import Card from "../card";

import image1 from '../../assets/writings.jpg';
import image2 from '../../assets/photography.jpg';
import image3 from '../../assets/banksy.jpg';
import image4 from '../../assets/code_diary.jpg';


const descriptions = [
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
            <a href="https://www.webnovel.com/profile/4320094667?appId=10" target="_blank">
                <div className="item" >    
                    <Card image={image1} title={"Writing"} body={descriptions[0]}></Card>
                </div></a>
                <a href="https://www.behance.net/rowdyboys1" target="_blank">
                <div className="item" >
                    <Card image={image2} title={"Photography"} body={descriptions[1]}></Card>
                </div>
                </a>
                <a href="https://returningcontrol.blogspot.com/" target="_blank">
                <div className="item" >
                    <Card image={image3} title={"Blog On Life"} body={descriptions[2]}></Card>
                </div></a>
                <a href="" target="_blank">
                <div className="item" >
                    <Card image={image4} title={"Tech Diary"} body={descriptions[3]}></Card>
                </div></a>
            </div>
        </div>
    )
}

export default Creative;
