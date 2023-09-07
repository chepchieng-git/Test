import React, { useContext } from "react";
import "./Works.css";
import Moringa from "../../img/moringa.png";
import Jkuat from "../../img/jkuat.png";
import Education from "../../img/education.png";
import Github from "../../img/github1.png";
import React1 from "../../img/react.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import {Link} from 'react-scroll'
const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>
            Education & Experience
          </span>
          <span>Moringa School</span>
          <spane>
            Software Engineering
            <br />
            Javascript, ReactJs, Ruby on Rails, Postgres, Laravel, REST API
            <br />
            </spane>
          <span>JKUAT</span>
          <spane>
            BSc. Mathematics and Computer Science
            <br />
            Java, C, Data Structures & Algorithms, MVC 
          </spane>           
          <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">Hire Me</button>
          </Link>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={Moringa} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Jkuat} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Education} alt="" />
          </div>{" "}
          <div className="w-secCircle">
            <img src={Github} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={React1} alt="" />
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
