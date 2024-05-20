import ProfileDesc from "./About/ProfileDesc";
import "./index.css";
import Experience from "@/Landing/Experience";

import { motion } from "framer-motion";
import NavBar from "@/component/NavBar";
import { navBarItems } from "@/constant";
import Skills from "@/Landing/About/Skills";
import Projects from "./Projects";

const Landing = () => {
  return (
    <>
      <div className='main-container'>
        <NavBar navBarArr={navBarItems} />
        <motion.section
          id='about'
          className='section'
          initial={{
            opacity: 0,
            y: 50,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.5,
            duration: 1,
            ease: [0.6, 0.05, 0.01, 0.9],
          }}>
          <ProfileDesc />
          <Skills />
        </motion.section>
        <section className={`section h-100`} id='experience'>
          <Experience />
        </section>
        <section className={`section h-100`} id='experience'>
          <Projects />
        </section>
      </div>
    </>
  );
};

export default Landing;
