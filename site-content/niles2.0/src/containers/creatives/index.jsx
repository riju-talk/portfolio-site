import React from "react";
import './styles.scss';
import Card from "../card";
import { Link } from "react-router-dom";

import image1 from '../../assets/writings.jpg';
import image2 from '../../assets/photography.jpg';
import image3 from '../../assets/banksy.jpg';
import image4 from '../../assets/code_diary.jpeg';


const descriptions = [
    ["Writing is my passion, I Write short stories and I have also started a novel. Till now I have written more than 10 short stories, 1 screenplay and I am currently working on 1 novel and 1 sci-fi series.", " I put in a lot of effort in however time I have and this is the result of, I am currently mvoing stuff from a different site so it is possible that you may not find everything. Click here.."],
    ["I express my thoughts and knowledge using photography,", "I mostly take low-light piuctures and right now I am exprerimenting with lighting and getting to know more about how camera works. I love taking pictures everywhere. Find them here. Click Here.."],
    ["Life is a single player game, let's make it a co-op and fight hand in hand. Join my blog on life.","I share my thoughts and lessons here. I welcome you wall to place where you can express your thoughts as well. Here you are pree and bound by nothing. Click here.."],
    ["This is my tech diaries, I have a knack to learn new stuff. keep checking out. I am geek like it says in the first page. I am making a series of all things one C.S major will come across in life.","This is my newest blog. First I had another bolg about my series of fanfics. Anyway, here you are welcome to join my thoughts and Share yours. Click here.."]
]


function Creative() {
    return (
        <div>
            <h1>Creative Room,</h1>
            <div className="content">
                    <Link className="navbar_container__menu__item__links" to={"https://www.webnovel.com/profile/4320094667?appId=10"} target="_blank" onClick={() => {}}>
                    <div className="item" >
                        <Card image={image1} title={"Writing"} body={descriptions[0]}></Card>
                    </div>
                    </Link>
                    <Link className="navbar_container__menu__item__links" to={"https://www.behance.net/rowdyboys1"} target="_blank" onClick={() => {}}>
                    <div className="item" >
                        <Card image={image2} title={"Photography"} body={descriptions[1]}></Card>
                    </div>
                    </Link>
                    <Link className="navbar_container__menu__item__links" to={"https://returningcontrol.blogspot.com/"} target="_blank" onClick={() => {}}>
                    <div className="item" >
                        <Card image={image3} title={"Blog On Life"} body={descriptions[2]}></Card>
                    </div>
                    </Link>
                    <Link className="navbar_container__menu__item__links" to={"https://returningcontrol.blogspot.com/"} target="_blank" onClick={() => {}}>
                    <div className="item" >
                        <Card image={image4} title={"Tech Diary"} body={descriptions[3]}></Card>
                    </div>
                    </Link>
            </div>
        </div>
    )
}

export default Creative;
