import tuan1 from "../../asset/tuan1.jpg";
import tuan2 from "../../asset/tuan2.webp";
import tuan3 from "../../asset/tuan3.jpg";
import tuan4 from "../../asset/tuan4.jpg";
import tuan5 from "../../asset/tuan5.jpg";
import "./Exercise.scss";
import { GoArrowRight, GoArrowLeft } from "react-icons/go";
import React, { useState } from "react";
const Exercise = () => {
  const [listItems, setListItems] = useState([
    {
      id: 1,
      title: "EXERCISE 1 (Week3)",
      description: "A web page for a survey_Syntax: W4_StudentID",
      image: tuan1,
      linkgit: "https://github.com/nguyenvanbao1310/Lap-Web/tree/master",
      linkweb: "https://basicweb-5t6l.onrender.com/",
    },
    {
      id: 2,
      title: "EXERCISE 2 (Week4)",
      description: "Modify the servlet for the Email and Create a new servlet",
      image: tuan2,
      linkgit: "https://github.com/nguyenvanbao1310/Lap-Web/tree/week5",
      linkweb: "https://vanbao1310.onrender.com/",
    },
    {
      id: 3,
      title: "EXERCISE 3.1 (Week5)",
      description: "Modify the JSPs for the Email List application",
      image: tuan3,
      linkgit:
        "https://github.com/nguyenvanbao1310/BaiTapLTWeb/tree/master/ch06_ex1_email",
      linkweb: "https://labch06ex1.onrender.com",
    },
    {
      id: 4,
      title: "EXERCISE 3.2 (Week5)",
      description: "Create a new JSP",
      image: tuan4,
      linkgit:
        "https://github.com/nguyenvanbao1310/BaiTapLTWeb/tree/master/ch06_ex2_survey",
      linkweb: "https://labch06ex2.onrender.com",
    },
    {
      id: 5,
      title: "EXERCISE 4 (Week6)   ",
      description: "Cart",
      image: tuan5,
      linkgit:
        "https://github.com/nguyenvanbao1310/BaiTapLTWeb/tree/master/ch07",
      linkweb: "https://ch07-cart.onrender.com",
    },
    {
      id: 6,
      title: "EXERCISE 5 (Week7)",
      description: "How to use JDBC to work with a database",
      image: tuan1,
      linkgit:
        "https://github.com/nguyenvanbao1310/BaiTapLTWeb/tree/master/ch12",
      linkweb: "https://ch12-v27l.onrender.com",
    },

    {
      id: 7,
      title: "EXERCISE 6 (Week8)",
      description: "Pool connection",
      image: tuan2,
      linkgit:
        "https://github.com/nguyenvanbao1310/BaiTapLTWeb/tree/master/poolconnections",
      linkweb: "https://ch12-poolconnection.onrender.com",
    },
    {
      id: 8,
      title: "EXERCISE 7 (week9)",
      description: "How to use JPA to work with a database",
      image: tuan3,
      linkgit:
        "https://github.com/nguyenvanbao1310/BaiTapLTWeb/tree/master/JPA",
      linkweb: "https://ch13.onrender.com",
    },
    {
      id: 9,
      title: "EXERCISE 8 (Week10)",
      description: "How to use JavaMail to send email",
      image: tuan4,
      linkgit:
        "https://github.com/nguyenvanbao1310/BaiTapLTWeb/tree/master/ch14_ex1_email",
      linkweb: "https://ch14-oayr.onrender.com",
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
              <a href={item.linkgit}>{item.linkgit}</a>
              <br />
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
