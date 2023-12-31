import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '../hoc';
import style from './styles/about.module.css';
import { textVariant, fadeIn } from '../utils/motion';

const About = () => (
  <>
    <motion.h1 variants={textVariant()} className={style.title}>
      About Me
    </motion.h1>
    <div className={style.para}>
      <motion.p variants={fadeIn('', '', 0.5, 1)} className={style.text}>
        My name is
        {' '}
        <a
          href="https://www.linkedin.com/in/kaungmyatkyaw/"
          target="_blank"
          className={style.link}
          rel="noreferrer"
        >
          Kaung Myat Kyaw (Barry)
        </a>
        {' '}
        and I am a passionate software engineer specializing in delivering
        state-of-the-art software solutions in React and Ruby on Rails. I love
        Math, Coding, Movies, and all kinds of Music.
      </motion.p>
      <motion.p variants={fadeIn('', '', 0.75, 1)} className={style.text}>
        My journey into the world of software development has been both unique
        and transformative. Before transitioning to this career, I was a
        third-year student at Maritime University. However, due to the
        COVID-19 outbreak and the political situation in my country, I decided
        to drop out and explore my true passion.
      </motion.p>
      <motion.p variants={fadeIn('', '', 1, 1)} className={style.text}>
        What truly set my path apart was my decision to join Microverse, a
        remote software development school. There, I immersed myself in pair
        programming and real-world projects, mastering the skills required to
        thrive in this dynamic field. I completed the boot camp without a
        hitch, showcasing my dedication and determination to succeed. My
        commitment to the tech community is reflected in my
        {' '}
        <a
          href="https://github.com/Rhaegar121"
          target="_blank"
          className={style.link}
          rel="noreferrer"
        >
          {' '}
          2500+ contributions on GitHub
        </a>
        {' '}
        within a single year. Additionally, my roles in the Students&apos;
        Union honed my problem-solving and communication abilities.
      </motion.p>
      <motion.p variants={fadeIn('', '', 1.25, 1)} className={style.text}>
        If you&apos;re inspired by what you see and have a project that&apos;s ready to come to life, don&apos;t hesitate to reach out. I&apos;m just a message away, eager to collaborate on your next big endeavor.
        {' '}
        <a
          href="https://drive.google.com/file/d/1tciorak3ZNmMrPPnG_b9eSMnv94fY61_/view?usp=sharing"
          target="_blank"
          className={style.link}
          rel="noreferrer"
        >
          Access my resume
        </a>
        {' '}
        to explore my journey, qualifications, and the knowledge I bring to the table.
      </motion.p>
    </div>
  </>
);

export default SectionWrapper(About, 'about', '');
