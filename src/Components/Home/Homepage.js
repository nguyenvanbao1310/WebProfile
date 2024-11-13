import videoHomePage from "../../asset/video-homepage.mp4";
import "./Homepage.scss";
import React, { useState } from "react";
import {
  faReact,
  faHtml5,
  faCss3,
  faJs,
  faVuejs,
  faLaravel,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Homepage = () => {
  const [listSkills] = useState([
    {
      name: "HTML",
      des: "Understand the basic structure of a web page. Build and organize content such as text, images, tables, links, forms.",
      icon: faHtml5,
    },
    {
      name: "CSS",
      des: "Ad ad in cillum ut labore irure aliqua. Ex sit dolore ipsum id duis nostrud veniam. Nisi duis ut veniam ut eiusmod occaecat ullamco ullamco. Consequat eu sunt ut elit dolor sint magna magna velit ex. Excepteur occaecat reprehenderit tempor veniam.",
      icon: faCss3,
    },
    {
      name: "Javascript",
      des: "Sunt nostrud nulla qui cillum mollit aute anim anim aliqua aute magna tempor. Do culpa culpa excepteur officia ut eu deserunt proident sint non ut do magna minim. Sunt et excepteur tempor culpa irure non exercitation. Amet nostrud ex aute incididunt incididunt ipsum.",
      icon: faJs,
    },
    {
      name: "ReactJs",
      des: "Voluptate qui adipisicing dolore pariatur laboris deserunt consectetur reprehenderit. Esse dolor elit ullamco duis quis aliquip fugiat ipsum nisi est et. Nisi ut deserunt excepteur irure aliquip proident ",
      icon: faReact,
    },
  ]);
  return (
    <>
      <div className="homepage-container">
        <div className="homepage-content">
          <div className="title-1">Hi, I'm Bao</div>
          <div className="title-2">
            Started studying information technology at Ho Chi Minh City
            University of Technical Education
          </div>
          <div className="list">
            {listSkills.map((value, key) => (
              <div className={"item "} key={key}>
                <FontAwesomeIcon icon={value.icon} />
                <h3>{value.name}</h3>
                <div className="des">{value.des}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="video-homepage">
          <video autoPlay muted loop c>
            <source src={videoHomePage} type="video/mp4" />
          </video>
        </div>
      </div>
    </>
  );
};

export default Homepage;
