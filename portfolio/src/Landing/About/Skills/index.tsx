import { skillsIcon } from "@/constant/logo";
import "./index.css";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <div className='skills-container'>
      <p className='title'>My Skills</p>
      <div className='skills-wrapper'>
        {skillsIcon.map((item) => {
          return (
            <motion.div
              key={item.title}
              className='logo-wrapper'
              whileHover={{
                scale: 1.1,
                boxShadow: "0 0rem 1rem var(--orange-shade)",
              }}
              transition={{ duration: 0.2 }}>
              <img className='skills-logo' src={item.src} />
              <p>{item.title}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
