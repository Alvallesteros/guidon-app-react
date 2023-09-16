import React, { useState } from 'react';
import './css/App.css';
import Header from './components/Header';
import Content from './components/Content';

function App() {

  const [BackgroundImage, setBackgroundImage] = useState('');

  const Data = [
    {
        title: "One Big Adventure",
        img: "assets/imgs/one-big-adventure.png",
        link: "https://interactive.theguidon.com/2023/08/one-big-adventure/",
        date: "August 2023",
        bylines: "Reisha Jamola and Therese Alexandria Garcia",
        desc: "Experience a day as a student in the Ateneo in this interactive by The GUIDON."
    },
    {
        title: "Year-End Gallery",
        img: "assets/imgs/yearend_gal.png",
        link: "https://interactive.theguidon.com/#/view/one-big-adventure"
    },
    {
        title: "Dead End: The Commuter Experience",
        img: "assets/imgs/deadend.png",
        link: "https://interactive.theguidon.com/#/view/one-big-adventure"
    },
    {
        title: "From the Hill to EDSA: 37 Years since the 1986 Revolution",
        img: "assets/imgs/edsa.png",
        link: "https://interactive.theguidon.com/#/view/one-big-adventure"
    },
    {
        title: "A House Divided",
        img: "assets/imgs/house_divided.png",
        link: "https://interactive.theguidon.com/#/view/one-big-adventure"
    },
    {
        title: "Buried with Lies",
        img: "assets/imgs/lies.png",
        link: "https://interactive.theguidon.com/#/view/one-big-adventure"
    },
    {
        title: "Frozen in Time: Stories of the Ateneo Campus",
        img: "assets/imgs/frozen-in-time.png",
        link: "https://interactive.theguidon.com/#/view/one-big-adventure"
    },
    {
        title: "Foreword 2022",
        img: "assets/imgs/Foreword2022.jpg",
        link: "https://interactive.theguidon.com/#/view/one-big-adventure"
    },
    {
        title: "YEP: Year in Visual Stories",
        img: "assets/imgs/creativity.png",
        link: "https://interactive.theguidon.com/#/view/one-big-adventure"
    },
    {
        title: "Off Tangent",
        img: "assets/imgs/off-tangent.png",
        link: "https://interactive.theguidon.com/#/view/one-big-adventure"
    },
    {
        title: "A Geography of Goodbyes",
        img: "assets/imgs/geography-goodbyes.png",
        link: "https://interactive.theguidon.com/#/view/one-big-adventure"
    },
    {
        title: "Underpowered",
        img: "assets/imgs/underpowered.png",
        link: "https://interactive.theguidon.com/#/view/one-big-adventure"
    },
    {
        title: "Year in Quarantine",
        img: "assets/imgs/year-in-quarantine.png",
        link: "https://interactive.theguidon.com/#/view/one-big-adventure"
    },
    {
        title: "On the frontlines",
        img: "assets/imgs/on-the-frontlines.png",
        link: "https://interactive.theguidon.com/#/view/one-big-adventure"
    },
    {
        title: "Under Fire",
        img: "assets/imgs/under-fire.png",
        link: "https://interactive.theguidon.com/#/view/one-big-adventure"
    },
    {
        title: "The GUIDON Online",
        img: "assets/imgs/guidon-online.png",
        link: "https://interactive.theguidon.com/#/view/one-big-adventure"
    },
    {
        title: "Catching light: Faces of hope in Marawi City",
        img: "assets/imgs/marawi.jpg",
        link: "https://interactive.theguidon.com/#/view/one-big-adventure"
    },
    {
        title: "Santa's Real Evles",
        img: "assets/imgs/santa-elves.png",
        link: "https://interactive.theguidon.com/#/view/one-big-adventure"
    },
    {
        title: "Strength and Resolve: Tales of Recovery in the Islamic City",
        img: "assets/imgs/strength-resolve.jpg",
        link: "https://interactive.theguidon.com/#/view/one-big-adventure"
    },
    {
        title: "The AEWU Contention",
        img: "assets/imgs/AEWU.jpg",
        link: "https://interactive.theguidon.com/#/view/one-big-adventure"
    },
    {
        title: "A Year of 'Dutertismo'",
        img: "assets/imgs/dutertismo.jpg",
        link: "https://interactive.theguidon.com/#/view/one-big-adventure"
    },
    {
        title: "Execution Day",
        img: "assets/imgs/execution-day.jpg",
        link: "https://interactive.theguidon.com/#/view/one-big-adventure"
    },
    {
        title: "The Road to Sanggunian",
        img: "assets/imgs/sanggu-elections.jpg",
        link: "https://interactive.theguidon.com/#/view/one-big-adventure"
    },
    {
        title: "Re-visioning History",
        img: "assets/imgs/re-visioning-history.jpg",
        link: "https://interactive.theguidon.com/#/view/one-big-adventure"
    },
    {
        title: "Silenced Voices",
        img: "assets/imgs/silenced-voices.jpg",
        link: "https://interactive.theguidon.com/#/view/one-big-adventure"
    },
    {
        title: "Finding your Footing: A guide to accreditation",
        img: "assets/imgs/organization-accreditation.jpg",
        link: "https://interactive.theguidon.com/#/view/one-big-adventure"
    }

]


  const getBGImage = (data) => {
    setBackgroundImage(data);
  };

  return (
    <div className="App">
      <div id="background-container">
          <div className="background-image"  style={{ backgroundImage: `url(${process.env.PUBLIC_URL + BackgroundImage.img})` }}></div>
          <div className="background-gradient"></div>
      </div>
      <Header />
      <Content data={Data} onData={getBGImage} />
    </div>
  );
}

export default App;
