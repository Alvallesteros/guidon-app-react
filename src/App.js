import React, { useState } from 'react';
import './css/App.css';
import Header from './components/Header';
import Content from './components/Content';

function App() {

  const [BackgroundImage, setBackgroundImage] = useState('');

  const Data = [
    {
        title: "One Big Adventure",
        img: "/assets/imgs/one-big-adventure.png",
        link: "https://interactive.theguidon.com/2023/08/one-big-adventure/",
        date: "August 2023",
        bylines: "Reisha Jamola and Therese Alexandria Garcia",
        desc: "Experience a day as a student in the Ateneo in this interactive by The GUIDON."
    },
    {
        title: "Year-End Gallery",
        img: "/assets/imgs/yearend_gal.png",
        link: "https://interactive.theguidon.com/2023/05/year-end-gallery",
        date: "May 2023",
        bylines: "The Photos Staff",
        desc: "As academic year 2022-2023 has come to an end, The GUIDON invites you to look back on the various events experienced by the Ateneo in the last year."
    },
    {
        title: "Dead End: The Commuter Experience",
        img: "/assets/imgs/deadend.png",
        link: "https://interactive.theguidon.com/2023/05/dead-end",
        date: "May 2023",
        bylines: "Ariana Enriquez and Reign Iris Centeno",
        desc: "Dead End is a project by the Features, Photos, Video Production, and Digital Development Staffs of AY 2022–2023."
    },
    {
        title: "From the Hill to EDSA: 37 Years since the 1986 Revolution",
        img: "/assets/imgs/edsa.png",
        link: "https://interactive.theguidon.com/2023/02/from-the-hill-to-edsa",
        date: "February 2023",
        bylines: "Zoey C. Atillo, Lancelot Batara, Joaquin Baang, Enzo Bello, Eloiza Mariano, Aren Teodoro, and Khaela C. Vijar",
        desc: "From the Hill to EDSA is a project by the News, Inquiry, Photos, and Digital Development Staffs of AY 2022–2023."
    },
    {
        title: "A House Divided",
        img: "/assets/imgs/house_divided.png",
        link: "https://interactive.theguidon.com/2022/10/a-house-divided",
        date: "October 2022",
        bylines: "Jana O. Ang, Biel L.B. Arevalo, Felicity C. Santos, Pioee B. Bassig, Clayton Dejillas, Maxine S. Kang, Aidan Bernales, and Jacob Tambunting",
        desc: "A House Divided is a project by the Beyond Loyola, Features, Photos, and Digital Development Staffs of AY 2022-2023."
    },
    {
        title: "Buried with Lies",
        img: "/assets/imgs/lies.png",
        link: "https://interactive.theguidon.com/2022/09/buried-with-lies",
        date: "September 2022",
        bylines: "Simone Martinez and Derick M. Gabrillo",
        desc: "Buried With Lies showcases the most common contentions surrounding the late dictator Ferdinand Marcos: his years in power and his achievements."
    },
    {
        title: "Frozen in Time: Stories of the Ateneo Campus",
        img: "/assets/imgs/frozen-in-time.png",
        link: "https://interactive.theguidon.com/2022/08/frozen-in-time",
        date: "August 2022",
        bylines: "Enzo Lagamon, Ena Algopera, Jia Parma, Andrea Mikaela Llanes, Tatiana L. Maligro, George D. Kho, and Kiara Florencia Rodriguez",
        desc: "As another batch of seniors goes down the Hill, we immortalize some of their memories of campus here to remind us what life as an Atenean used to be like. Hopefully, these letters may also serve as guides for us when the time comes for the entire student body to return home."
    },
    {
        title: "Foreword 2022",
        img: "/assets/imgs/Foreword2022.jpg",
        link: "http://interactive.theguidon.com/2022/04/foreword-2022/",
        date: "April 2022",
        bylines: "Ivan Lewis C. Bueno, Kiana Lane R. Altoveros, and Monica Julianne C. Gallardo",
        desc: "The Presidential Candidates' Assembly aims to empower the Filipino electorate as they carefully discern and criticize the visions of the Presidential aspirants. Through the Foreword website, explore different features that showcase how the Presidential hopefuls visualize the Philippines under their respective administrations."
    },
    {
        title: "YEP: Year in Visual Stories",
        img: "/assets/imgs/creativity.png",
        link: "https://interactive.theguidon.com/2021/10/year-in-visual-stories",
        date: "October 2021",
        bylines: "Design Cluster",
        desc: "Creativity in crisis showcases the experiences and creative processes behind each designer’s craft despite the unfavorable circumstances in which journalism finds itself today. As the first interactive and digital folio of The GUIDON’s Design Cluster of AY 2020-2021, Creativity in crisis displays the best works of the cluster as visual storytellers."
    },
    {
        title: "Off Tangent",
        img: "/assets/imgs/off-tangent.png",
        link: "https://interactive.theguidon.com/2021/07/off-tangent",
        date: "July 2021",
        bylines: "Russell Louis Ku, Eala Julienne Nolasco, Adrian Jesper C. Cea, Christianna P. Lugod, and Paolo Buenaseda",
        desc: "As the Loyola Schools completes its first, online academic year, The GUIDON dives into three unique sectors of the Ateneo community."
    },
    {
        title: "A Geography of Goodbyes",
        img: "/assets/imgs/geography-goodbyes.png",
        link: "https://interactive.theguidon.com/2021/05/katipunan-casualties",
        date: "May 2021",
        bylines: "Teo A. Ricaforte, Justin Ginete, Dani Capinding, Caitlin Anne Young, Ann Domingo, Therese Hipol, Arnold Paguio, Mikaela Llanes, Zoe Andin, and Patricia Villoria",
        desc: "For one last time, Vantage Magazine says goodbye to the Katipunan establishments that have defined us."
    },
    {
        title: "Underpowered",
        img: "/assets/imgs/underpowered.png",
        link: "https://interactive.theguidon.com/2021/04/underpowered",
        date: "April 2021",
        bylines: "Kris M. Fetiza, Derick M. Gabrillo, Zachary C. Gonzales",
        desc: "Many Filipinos face consistent power interruptions and find themselves at a disadvantage to their energy-secure counterparts. In this interactive, we go through both narratives and compare their experiences."
    },
    {
        title: "Year in Quarantine",
        img: "/assets/imgs/year-in-quarantine.png",
        link: "https://interactive.theguidon.com/2021/03/year-in-quarantine/",
        date: "March 2021",
        bylines: "The GUIDON Photos Staff AY 2020-2021, Anna Pineda, Gerard Ma, Yanna Estrellado",
        desc: "On the night of March 9, 2020, President Duterte called for a five-day suspension of classes in all levels in Metro Manila and later on placed the region and other provinces under enhanced community quarantine. However, a year later, the Philippines still finds itself under various levels of community quarantine."
    },
    {
        title: "On the frontlines",
        img: "/assets/imgs/on-the-frontlines.png",
        link: "https://interactive.theguidon.com/2021/01/on-the-frontlines/",
        date: "January 2021",
        bylines: "Jean Mangaluz, Malaika Paculan",
        desc: "For decades, the gates between the University and Katipunan Avenue have served as the cradles of Atenean protest. They have borne witness to the members of the Ateneo community that took part in the tradition of resistance against the changing faces of injustice and oppression."
    },
    {
        title: "Under Fire",
        img: "/assets/imgs/under-fire.png",
        link: "http://interactive.theguidon.com/2020/07/under-fire/",
        date: "July 2020", 
        bylines: "Pioee B. Bassig, Derick M. Gabrillo and George Kho",
        desc: "The Philippines is among the most dangerous countries for journalists—only a handful of other countries compare to it in this regard. Despite the return to democracy after the 1986 EDSA Revolution that toppled Ferdinand Marcos’ dictatorship, press freedom is still under threat. At least 159 journalists have been killed in the country since 1986. Before the Maguindanao Massacre trial, the Philippines had the most number of unsolved journalist killings in the world with 41 cases."
    },
    {
        title: "The GUIDON Online",
        img: "/assets/imgs/guidon-online.png",
        link: "http://interactive.theguidon.com/2020/06/tgdn-90th",
        date: "June 2020",
        bylines: "Jasy C. Cruz, Enrique B. Halili",
        desc: "FOR 90 years, The GUIDON has endeavored to provide its readers accurate and engaging content, made accessible through newsstands found within campus confines. After the publication launched its online platforms in 2008, it began to delve into the world of digital journalism. Looking towards the future, The GUIDON hopes to fully transition into an online publication by its 100th year."
    },
    {
        title: "Catching light: Faces of hope in Marawi City",
        img: "/assets/imgs/marawi.jpg",
        link: "https://gdn-marawi.theguidon.com/",
        date: "January 2020",
        bylines: "Danielle R. Garcia, Alithea C. Soriano",
        desc: "The five-month battle between the extremist Maute Group and armed forces in Marawi City prompted President Rodrigo Duterte to declare Martial Law in Mindanao in 2017. Despite the uncertain future brought by persistent delays in the government’s rehabilitation efforts, the conclusion of Martial Law last December 31, 2019 has paved the way for Maranaos to embark on a new chapter starting this new year. “Catching light: Faces of hope in Marawi City” looks into the situation of Marawi’s residents as they, themselves, rebuild the Islamic city. As they battle insufficient relief efforts, makeshift classrooms, and religious discrimination from other Filipinos, residents remain hopeful that they will return home."
    },
    {
        title: "Santa's Real Evles",
        img: "/assets/imgs/santa-elves.png",
        link: "http://interactive.theguidon.com/2019/12/christmas-interactive/",
        date: "December 2019",
        bylines: "Keziah Maru Z. Pasion, Andrea Tibayan, Andrea Mikaela Llanes",
        desc: "Every Christmas season, there are some Filipinos who may see the holidays as just another ordinary working day. The GUIDON explores some of their stories through this interactive."
    },
    {
        title: "Strength and Resolve: Tales of Recovery in the Islamic City",
        img: "/assets/imgs/strength-resolve.jpg",
        link: "http://interactive.theguidon.com/2018/05/marawi/#/",
        date: "May 2018",
        bylines: "Liam C. Liu",
        desc: "In a joint project with The Crusader Publication, the student publication of Xavier University - Ateneo de Cagayan, The GUIDON looks into the situation in Marawi a year since the fated attack."
    },
    {
        title: "The AEWU Contention",
        img: "/assets/imgs/AEWU.jpg",
        link: "http://interactive.theguidon.com/2018/01/aewu-contention/",
        date: "January 2018",
        bylines: "Michelle D. Abad, Thea Unson",
        desc: "Months of negotiations have led to questions of just wages, the feasibility of expenses, and eventually, a positive strike vote."
    },
    {
        title: "A Year of 'Dutertismo'",
        img: "/assets/imgs/dutertismo.jpg",
        link: "http://interactive.theguidon.com/2017/07/duterte-promises/",
        date: "July 2017",
        bylines: "Liam C. Lu",
        desc: "AS PRESIDENT Rodrigo Duterte prepares for his second State of the Nation Address (SONA), Beyond Loyola revisits the bold plans he had laid out during his inaugural SONA last July 25, 2016. We looked at each of his promises and checked whether they were achieved."
    },
    {
        title: "Execution Day",
        img: "/assets/imgs/execution-day.jpg",
        link: "http://interactive.theguidon.com/2017/04/execution-day/",
        date: "April 2017", 
        bylines: "JC A. Beltran, Ina M. Morales, Janelle Paris",
        desc: "BEYOND LOYOLA: As the debate on the reimposition of the death penalty continues, we follow a prisoner sentenced to death as he goes through his last day."
    },
    {
        title: "The Road to Sanggunian",
        img: "/assets/imgs/sanggu-elections.jpg",
        link: "http://interactive.theguidon.com/2016/10/sanggu-elections/",
        date: "October 2016",
        bylines: "Andrea L. Taguines",
        desc: "The new Sanggunian is the culmination of efforts from a wide variety of sectors and institutions."
    },
    {
        title: "Re-visioning History",
        img: "/assets/imgs/re-visioning-history.jpg",
        link: "http://interactive.theguidon.com/2016/09/re-visioning-history",
        date: "September 2016",
        bylines: "Manuel M. Aldeguer"
    },
    {
        title: "Silenced Voices",
        img: "/assets/imgs/silenced-voices.jpg",
        link: "http://interactive.theguidon.com/2016/09/silenced-voices",
        date: "September 2016",
        bylines: "Nio Atrigenio",
        desc: "Extreme censorship under the Marcos administration controlled and repressed the media, putting both journalists and ordinary Filipinos alike at risk."
    },
    {
        title: "Finding your Footing: A guide to accreditation",
        img: "/assets/imgs/organization-accreditation.jpg",
        link: "http://interactive.theguidon.com/2016/08/organization-accreditation/",
        date: "August 2016",
        bylines: "Joaquin B. Jacinto, Jairus I. Paul",
        desc: "Unaccredited vs. Accredited: What makes accreditation so important? This interactive website illustrates the process and guidelines for organizational accreditation as a supplementary to Joining the club, an article on unaccredited organizations."
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
