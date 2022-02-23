import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { images } from "../../constants";

import "./About.scss";

const abouts = [
  {title : 'Web Development', description : 'I am a good web developer.', imgUrl : ''},
  {title : 'Web Design', description : 'I am a good web designer.', imgUrl : ''},
  {title : 'UI/UX', description : 'I am a good UI/UX Designer .', imgUrl : ''},   
  {title : 'Web Animations', description : 'I am a Web Animations designer .', imgUrl : ''}   
]

const About = () => {
  return (
    <>
    <h2 className="head-text">
      I know that
      <span>Good Design</span>
      <br/>
      means
      <span>Good Business</span>
    </h2>
    </>
  )
};

export default About;
