import React from "react";
import './styles.scss'
import image from "../../assets/delhi_metro.jpg";

function Home() {
    return (
        <div>
            <h1>Hello there,</h1>
            <div id="description_body">
                <p class="description">My name is Rijusmit Biswas A.K.A Niles Drake I am Geek (lol).
                    But, yes I am a nerd who is a nut for code and sci-fi flicks.
                    I am a novice programmer with knowledge and efficiency in several
                    programming languages and technologies.
                </p>
                <p class="description">
                    I am also a web developer by choice and passion. I am a writer
                    who is currently working on web novels you can find on known
                    pages. I love to connect and collaborate with a lot of people.
                    I am 19 years old and I am an undergrad at IIIT-Delhi, pursuing
                    my Bachelors in computer science and social science.  I aspire
                    to learn and become a researcher in machine learning. My current
                    expertise lies in UI/UX, Web Development and Ethnography.
                </p>
                <p class="description">
                    I also love photography and also writing and I have an ever growing tech stack and a consistent thirst for knowledge.
                </p>
            </div>
            <img src={image} alt="Delhi metro mai apka swagat hai (Welcome to Delhi metro)" id="image"/>
        </div>
    )
}

export default Home;