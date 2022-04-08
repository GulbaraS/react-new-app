import React from 'react'
import { motion } from "framer-motion"

import {FaHtml5, FaCss3Alt, FaSass, FaReact} from "react-icons/fa"
import {SiJavascript} from "react-icons/si"

import pic1 from "../../../images/flower.jpg"
import pic2 from "../../../images/yoga.jpg"
import pic3 from "../../../images/sweet.jpg"

import "./About.scss"

function About() {

  const h3Variants = {
    hidden: {
       x: -1000,
       opacity: 0,
    },
    visible: {
        x: 0,
        opacity: 1,
    },
  };

  const h1Variants = {
    hidden: {
      y: 3000,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  const worksItems = [
    {
      title: "Flower Shop",
      imgUrl: pic1,
    },
    {
      title: "Yoga Studio",
      imgUrl: pic2,
    },
    {
      title: "Candy Shop",
      imgUrl: pic3,
    },
  ];

  const worksVariants = {
    visible: (idx) => ({
      opacity: 1,
      transition: {
        delay: idx * 0.8,
      },
    }),
    hidden: {
      opacity: 0,
    },
  };

  return (
    <section className="about">
      <div className="container">

        <motion.h1 className='about__title'
        variants = {h1Variants}
        initial={"hidden"}
        animate={"visible"}
        transition = {{
           duration: 3,
        }}
        >Lifestyle Designer</motion.h1> 

        <h2>This is Page About Our Company</h2> 

        <motion.h3 
         variants={h3Variants}
         initial={"hidden"}
         animate={"visible"}
         transition = {{
            duration: 2,
          }}
        >To create your site we use</motion.h3>

        <ul className="skills">
          <li className="skills__item"><FaHtml5/> HTML</li>
          <li className="skills__item"><FaCss3Alt/> CSS</li>
          <li className="skills__item"><FaSass/> Sass</li>
          <li className="skills__item"><SiJavascript/> JavaScript</li>
          <li className="skills__item"><FaReact/> React</li>
        </ul>


        <h3>Latest Works</h3>

        <div className="works">

          <ul className="works__list">
            {worksItems.map((work, idx) => (
              <motion.li className="works__item"
              variants={worksVariants}
              initial={"hidden"}
              animate={"visible"}
              key={idx}
              custom={idx}
              >
              <img src={work.imgUrl} alt="" className="works__pic" />
              <h4>{work.title}</h4>
            </motion.li>
            ))}

          </ul>

        </div>
      </div>
    
    </section>
  )
}

export default About