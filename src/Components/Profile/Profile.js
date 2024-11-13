import "./Profile.scss";
import React from "react";
import anh1 from "../Profile/Image/nguyenvanbao.jpg";
import anh2 from "../Profile/Image/Age.png";
import anh3 from "../Profile/Image/Occupation.png";
import anh4 from "../Profile/Image/Status.png";
import anh5 from "../Profile/Image/Location.png";
import iconfacebook from "../Profile/Image/icon-facebook.png";
import iconyoutube from "../Profile/Image/icon-youtube.png";
import medium from "../Profile/Image/medium.png";
import Nextflix from "../Profile/Image/Nextflix.png";
import twitch from "../Profile/Image/twitch.png";

const Profile = () => {
  return (
    <div className="profile-container">
      <div className="rectangle-container">
        <div className="rectangle-left">
          <div className="circle">
            <img src={anh1} alt="Image in Circle" className="circle-image" />
          </div>
          <div className="story">
            "Bạn không thể thay đổi hướng gió, nhưng bạn có thể điều chỉnh cánh
            buồm để đạt được đích đến của mình."
          </div>
          <div className="info-container">
            <div className="info-item">
              <span className="icon">
                <img src={anh2} />
                Age
              </span>

              <span className="label">20</span>
            </div>
            <div className="info-item">
              <span className="icon">
                <img src={anh3} />
                Occupation
              </span>
              <span className="label">Student</span>
            </div>
            <div className="info-item">
              <span className="icon">
                <img src={anh4} />
                Status
              </span>
              <span className="label">Single</span>
            </div>
            <div className="info-item">
              <span className="icon">
                <img src={anh5} />
                Location
              </span>
              <span className="label">Q8,TP.HCM</span>
            </div>
          </div>

          <div className="character">
            <div className="rectangle-mini">
              <span className="text">PASSIONATE</span>
            </div>
            <div className="rectangle-mini">
              <span className="text">HONEST</span>
            </div>
          </div>

          <div className="character">
            <div className="rectangle-mini">
              <span className="text">CURIOUS</span>
            </div>
            <div className="rectangle-mini">
              <span className="text">ADVENTUROUS</span>
            </div>
          </div>
        </div>
        <div className="rectangle-right">
          <div className="persona">
            <div className="rectangle-persona">
              <span className="text-persona">PERSONA 1</span>
            </div>
            <div className="name-persona">Bao Nguyen</div>
          </div>
          <div className="content-persona">
            <span>Introduce my self</span>
            <div className="content">
              My name is Bao, I'm 20 years old, I was born and raised in Quang
              Ngai province. Currently I am living in Ho Chi Minh City. I am a
              student of the information technology department of the University
              of Technical Education. My hobbies are watching movies and
              listening to music, and I often play sports in my free time.
            </div>
          </div>
          <div className="goal-container">
            <div className="goal">
              <span>Needs / Goals</span>
              <ul className="bullet-list">
                <li>
                  Update knowledge of new language, framework and technology
                  installers.
                </li>
                <li>
                  Improve coding ability, efficiency and easy maintenance.
                </li>
                <li>
                  Improve communication ability of team members and
                  stakeholders.
                </li>
                <li>
                  Develop and fix errors in coding, improve application
                  stability.
                </li>
                <li>
                  Use creative thinking to develop solutions to complex
                  problems.
                </li>
              </ul>
            </div>

            <div className="challenge">
              <span>Pain points</span>
              <ul className="bullet-list">
                <li>
                  Struggle to express ideas or collaborate with others, leading
                  to misunderstandings.
                </li>
                <li>
                  Have difficulty letting go of legacy code, even though it is
                  no longer effective, resulting in complex code.
                </li>
                <li>
                  Often neglect to write documentation, making it difficult for
                  others to understand the source code.
                </li>
                <li>
                  Lack the patience to thoroughly test the code, leading to
                  potential bugs.
                </li>
                <li>
                  Focusing too much on the code may result in overlooking user
                  needs and feedback.
                </li>
              </ul>
            </div>
          </div>
          <div className="favourite-Personality">
            <div className="favourite-app">
              <span>Favourite-app</span>
              <div className="icon-item">
                <img src={iconfacebook} alt="icon-facebook" />
                <img src={iconyoutube} alt="icon-youtube" />
                <div className="medium-container">
                  <img src={medium} alt="Meidum" />
                </div>
              </div>
              <div className="web-items">
                <img src={Nextflix} alt="Nextflix" />
                <img src={twitch} alt="Twitch" />
              </div>
            </div>
            <div className="Personality">
              <span>Personality</span>
              <div className="personal-item">
                <div className="personal-label">
                  <span>Introvert</span>
                  <span>Extrovert</span>
                </div>
                <div className="sidebar">
                  <div className="sidebar-dump1"></div>
                </div>
              </div>
              <div className="personal-item">
                <div className="personal-label">
                  <span>Introvert</span>
                  <span>Intuition</span>
                </div>
                <div className="sidebar">
                  <div className="sidebar-dump2"></div>
                </div>
              </div>
              <div className="personal-item">
                <div className="personal-label">
                  <span>Thinking</span>
                  <span>Feeling</span>
                </div>
                <div className="sidebar">
                  <div className="sidebar-dump3"></div>
                </div>
              </div>
              <div className="personal-item">
                <div className="personal-label">
                  <span>Judging</span>
                  <span>Perceiving</span>
                </div>
                <div className="sidebar">
                  <div className="sidebar-dump4"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
