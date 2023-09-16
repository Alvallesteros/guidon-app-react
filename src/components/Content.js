import React, { useState, useEffect } from "react";
import Banner from './Banner.js'
import "../css/Content.css"

function Content(props) {

    const {data} = props;
    const [selectedItem, setSelectedItem] = useState(null);

    const showDesc = (x) => {
        setSelectedItem(x);
        props.onData(x)
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
          });
    };

    return ( 
        <div className="mainpage-container">
            <div className="section">
                <div className="center-container">

                    {selectedItem && (
                        <Banner data={selectedItem} />
                    )}

                    <div id="content-container">
                        {data.map((content, index) => (
                            <>
                            <a key={index} onClick={() => showDesc(content)} className={`content ${JSON.stringify(selectedItem) === JSON.stringify(content) ? 'selected' : ''}`}> 
                                <div className="img-container" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + content.img})` }}></div>
                                <div className="content-title">
                                    <div className="title">{content.title}</div>
                                </div>
                            </a> </>
                        ))}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Content;