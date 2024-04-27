import React from "react";
import styles from "./Header.module.css";
import chatbotBanner from "../../assets/chatbotbanner.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <p className={styles.heading}>
          "GQG - Government Query Genius"
        </p>
        <p className={styles.subHeading}>
        At GQG-ChatBot, we understand the importance of easy access to government information and services. That's why we created an innovative solution to help citizens navigate the complexities of governmental processes effortlessly.<br></br><br></br>

        Our team consists of dedicated developers and researchers committed to building a user-friendly platform that empowers individuals to interact with government agencies effectively.<br></br><br></br>

        With GQG-ChatBot, you can:<br></br>
        <ul>
        <li>Save time by quickly finding answers to your questions.</li>
        <li>Gain confidence in accessing accurate information from reputable sources.</li>
        <li>Streamline your interactions with government services, reducing frustration and confusion.</li>
        </ul>
        </p>
        <Link to="/chatbox">
          <button className={styles.btn}>Get Started</button>
        </Link>
      </div>
      <div className={styles.right}>
        <img src={chatbotBanner} alt="AI" />
      </div>
    </div>
  );
};

export default Header;
