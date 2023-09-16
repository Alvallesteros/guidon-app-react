import React from 'react';
import "../css/Banner.css"

function Banner({data}) {

    const twitterDesc = (data) =>  {
       return "View " + data.title + " A @TheGUIDON Interactive Article: "
    }

    return (
        <div id="banner-container">
            <div className="inner-container">
                <div className="image-container">
                    <div className="preview" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + data.img})` }}></div>
                </div>
                <div className='desc-container'>
                    <div className='info-container'>
                        <div className="date">{data.date}</div>
                        <div className="title">{data.title}</div>
                        <div className="bylines">Written by {data.bylines}</div>
                        <div className="description">{data.desc}</div>
                    </div>
                    <div className='btn-container'>
                        <a className='btn-fb' target="_blank" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + "/assets/imgs/facebook.png"})` }} href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(data.link)}`}></a>
                        <a className='btn-twtr' target='_blank' style={{ backgroundImage: `url(${process.env.PUBLIC_URL + "/assets/imgs/twitter.png"})` }} href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(twitterDesc(data))}&url=${encodeURIComponent(data.link)}`}></a>
                        <a className='btn-view' target='_blank' style={{ backgroundImage: `url(${process.env.PUBLIC_URL + "/assets/imgs/view.png"})`}} href={data.link}>View Interactive</a>
                    </div>
                </div>
            </div>
            <div className="content-header">All Interactive Articles</div>
        </div>
    );
}

export default Banner;