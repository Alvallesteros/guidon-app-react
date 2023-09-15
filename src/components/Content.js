import React from 'react';
import "../css/Content.css"

function Content() {

    const Data = [
        {
            title: 'One Big Adventure',
            img: 'assets/imgs/one-big-adventure.png',
            link: 'https://www.google.com'
        }
    ]

    return (
        <div className="mainpage-container">
            <div className="section">
                <div className="center-container">
                    <div id="content-container">
                        {Data.map((content, index) => (
                            <a className="content" href={content.link}>
                                <div className="img-container">
                                    <img src={process.env.PUBLIC_URL + content.img} alt=""/>
                                </div>
                                <div className="content-title">
                                    <div className="title">{content.title}</div>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Content;