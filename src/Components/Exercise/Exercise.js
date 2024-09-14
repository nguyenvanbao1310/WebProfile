import tuan1 from "../../asset/tuan1.jpg";
import tuan2 from "../../asset/tuan2.webp";
import tuan3 from "../../asset/tuan3.jpg";
import tuan4 from "../../asset/tuan4.jpg";
import tuan5 from "../../asset/tuan5.jpg";
import "./Exercise.scss";
import { GoArrowRight, GoArrowLeft } from "react-icons/go";
import React, { useState } from "react";
import "./Exercise.scss";
const Exercise = () => {
  const [listItems, setListItems] = useState([
    {
      id: 1,
      title: "EXERCISE 1 (Week1)",
      description: "Welcome to summer",
      image: tuan1,
    },
    {
      id: 2,
      title: "EXERCISE 2 (Week2)",
      description: "Welcome to summer",
      image: tuan2,
      linkgit: "https://github.com/nguyenvanbao1310/Lap-Web/tree/master",
      linkweb: "https://basicweb-5t6l.onrender.com/",
    },
    {
      id: 3,
      title: "EXERCISE 3 (Week3)",
      description: "Welcome to summer",
      image: tuan3,
      linkgit: "https://github.com/nguyenvanbao1310/Lap-Web/tree/master",
      linkweb: "https://basicweb-5t6l.onrender.com/",
    },
    {
      id: 4,
      title: "EXERCISE 4 (Week4)",
      description: "A web page for a survey_Syntax: W4_StudentID",
      image: tuan4,
      linkgit: "https://github.com/nguyenvanbao1310/Lap-Web/tree/master",
      linkweb: "https://basicweb-5t6l.onrender.com/",
    },
    {
      id: 5,
      title: "EXERCISE 5 (Week5)",
      description: "Modify the servlet for the Email and Create a new servlet",
      image: tuan5,
      linkgit: "https://github.com/nguyenvanbao1310/Lap-Web/tree/week5",
      linkweb: "https://basicweb-5t6l.onrender.com/",
    },
  ]);
  const handleNextClick = () => {
    const updatedItems = [...listItems.slice(1), listItems[0]];
    setListItems(updatedItems);
  };

  const handlePreClick = () => {
    const updatedItems = [
      listItems[listItems.length - 1],
      ...listItems.slice(0, listItems.length - 1),
    ];
    setListItems(updatedItems);
  };

  return (
    <div className="Exercise-container">
      <div className="slide">
        {listItems.map((item) => (
          <div
            key={item.id}
            className="item"
            style={{ backgroundImage: `url(${item.image})` }}
          >
            <div className="content">
              <div className="name">{item.title}</div>
              <div className="des">
                <b>{item.description}</b>
              </div>
              <span>github: </span>
              <a href={item.linkgit}>{item.linkgit}</a><br/>
              <span>linkweb: </span>
              <a href={item.linkweb}>{item.linkweb}</a>
              <br />
            </div>
          </div>
        ))}
      </div>
      <div className="buttons">
        <button id="prev" onClick={() => handlePreClick()}>
          <GoArrowLeft />
        </button>
        <button id="next " onClick={() => handleNextClick()}>
          <GoArrowRight />
        </button>
      </div>
    </div>
  );
};
export default Exercise;
