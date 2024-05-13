import LandingDesc from "./LandingDesc";
import profilePic from "@/assets/image/alvis.jpg";
import "./index.css";
import { motion } from "framer-motion";
import Experience from "@/experience";

const Landing = () => {
  return (
    <>
      <motion.div
        className='content-wrapper'
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
        <LandingDesc />
        <img src={profilePic} className='profile-img' alt='profile pic' />
      </motion.div>
      <Experience />
    </>
  );
};

export default Landing;
