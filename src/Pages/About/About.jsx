import React from "react";
import "./About.css";
import linkedin from "../../assets/images/linkedin.png";
import instagram from "../../assets/images/instagram.png";
import facebook from "../../assets/images/facebook.png";
import photo from "../../assets/images/267503460_958099581468530_5160424842287441270_n.jpg";

const About = () => {
  return (
    <div className="main-about">
      <div className="name-about-page">
        <h1>ABOUT US</h1>
      </div>
      <div className="about-page">
        <div className="intro">
          <div className="prev-intro">
            <div className="photo">
              <img src={photo} height={400} width={400} alt="...error" />
            </div>
          </div>
          <div className="name">
            <h1>Swatantra Gupta</h1>
          </div>
          <div className="about-name">
            <p>
              Hi Everyone, I'm swatantra. I am pursuing B.Tech from G L Bajaj
              group of institutions, Mathura. I'm inclined towards of web
              development and UI/UX designing. Passionate about Coding, how to
              code efficiently. Software Engineer student, intermediate
              problem-solving skills and ability to perform well in a team with
              a Bachelor of Engineering focused in Information Technology
            </p>
          </div>
          <div className="inside-comment">
            <input
              type="text"
              placeholder="Leave a comment..."
              className="comment-input"
            />
            <button type="submit">Post</button>
          </div>
        </div>
        <div className="next-intro">
          <div className="photo">
            <img src={photo} height={400} width={400} alt="...error" />
          </div>
        </div>
      </div>
      <div className="left-portion">
        <div className="social-links">
          <h4> : Follow me on : </h4>
          <a
            href="https://www.linkedin.com/in/swatantra-gupta-02034819a/"
            target="_blank"
            rel="noreferrer"
            className="linkedin"
          >
            <img src={linkedin} alt="...error" height={40} width={40} />
          </a>
          <a
            href="https://www.instagram.com/er.swatantra.gupta/"
            target="_blank"
            rel="noreferrer"
            className="instagram"
          >
            <img src={instagram} alt="...error" height={40} width={40} />
          </a>
          <a
            href="https://www.facebook.com/swatantra.gupta.9028/"
            target="_blank"
            rel="noreferrer"
            className="facebook"
          >
            <img src={facebook} alt="...error" height={40} width={40} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
