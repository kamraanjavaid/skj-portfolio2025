import React from "react";
import { motion } from "framer-motion"; // Import motion
import "./Hero.css";
import profile_img from "../../assets/profilePic.png";

const Hero = () => {
  const resumeUrl =
    "https://drive.google.com/file/d/14jAodokSSfpVnXL411opnKQ34Gpt6KLD/view?usp=sharing";
  return (
    <div id="home" className="hero">
<motion.img
  src={profile_img}
  alt="Profile"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 5 }}
/>

      {/* Animate the Intro Heading */}
      <motion.h1
        initial={{ x: "-100vw" }} // Start off-screen to the left
        animate={{ x: 0 }} // Slide into view
        transition={{
          type: "spring", // Spring animation
          stiffness: 50, // Adjusts speed
          damping: 7, // Controls bounciness
        }}
      >
        <span>I'm Kamran Javaid,</span> frontend developer based in Pakistan
      </motion.h1>

      <motion.p initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 3, delay: 1 }} >
        I’m a passionate Software Engineering graduate with a knack for creating dynamic, user-friendly web applications. My journey began with HTML and CSS, and I soon dove deep into JavaScript and ReactJS, discovering my love for building interactive web experiences. Currently, I'm expanding my horizons by mastering the MERN stack to enhance my full-stack development skills. I’m always eager to learn, innovate, and collaborate on exciting projects. Welcome to my portfolio – let’s create something amazing together!
      </motion.p>
      <div className="hero-action">
        <div className="hero-connect">Connect With Me</div>
        <a href={resumeUrl} target="_blank" rel="noopener noreferrer">
          <div className="hero-resume">My Resume</div>
        </a>
      </div>
    </div>
  );
};

export default Hero;
