import React, { useState } from 'react';
import { SectionWrapper } from '../hoc';
import style from './styles/about.module.css';
import { BallContainer, Pagination } from './Ball';
import { technologies } from '../constants';
import { motion } from "framer-motion";
import { textVariant, fadeIn, slideIn } from '../utils/motion';
import mypicture from '../assets/mypicture.jpg';

const About = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const ItemsPerPage = 4;

  return (
    <div>
      <motion.h1 variants={textVariant()} className={style.title}>About Me</motion.h1>
      <div className={style.content}>
        <motion.div variants={slideIn("left", "", 0, 1)} className={style.para}>
          <p className={style.text}>My name is <a href='https://www.linkedin.com/in/kaungmyatkyaw/' target='_blank' className={style.link}>Kaung Myat Kyaw (Barry)</a>, and I've spent the last several months developing real-world projects from scratch in a remote environment. I love Math, Programming, Movies, and all kinds of Music.</p>
          <p className={style.text}>I also worked as a general secretary and a social welfare officer at the Students' Union of my University for two years. It is not the same type of work as development, but it taught me some of the skills I now use every day as a developer: problem-solving, working under pressure, effective communication, and more.</p>
          <p className={style.text}>I can help you build a product, feature, or website. Look through some of my work and experience! If you like what you see and have a project you need to be coded for, don't hesitate to contact me.</p>
        </motion.div>
        <motion.div variants={slideIn("right", "", 0, 1)} className={style.img_container}>
          <div className={style.overlay}></div>
          <img className={style.img} src={mypicture} alt="my picture" />
        </motion.div>
      </div>
      <motion.p variants={fadeIn("", "", 0.15, 1)} className={style.subtitle}>Here are a few technologies I`ve been working with recently:</motion.p>
      <motion.div variants={fadeIn("", "", 0.25, 1)} className={style.ball_container}>
      <BallContainer technologies={technologies} currentPage={currentPage} />
      <Pagination
        totalItems={technologies.length}
        itemsPerPage={ItemsPerPage}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </motion.div>
    </div>
  )
}

export default SectionWrapper(About, "about", false, "my-8");