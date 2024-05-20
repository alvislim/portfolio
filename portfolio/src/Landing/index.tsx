import "./index.css";
import Experience from "@/Landing/Experience";

import { motion } from "framer-motion";
import NavBar from "@/component/NavBar";
import { navBarItems } from "@/constant";
import Projects from "./Projects";
import About from "./About";

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
          <About />
        </motion.section>
        <div className={`section h-100`} id='experience'>
          <Experience />
        </div>
        <div className={`section h-100`} id='experience'>
          <Projects />
        </div>
      </div>
    </>
  );
};

export default Landing;
