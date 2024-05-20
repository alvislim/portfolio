import { motion } from "framer-motion";
import profilePic from "@/assets/image/alvis.jpg";
import "./index.css";

const ProfileDesc = () => {
  return (
    <div className='content-wrapper'>
      <div className='text-wrapper'>
        <p>
          welcome to my portfolio
          <motion.span
            className='wave'
            animate={{
              rotate: [0, 14, -8, 14, -4, 10, 0, 0],
            }}
            transition={{
              duration: 2,
              delay: 1,
              repeat: Infinity,
            }}>
            👋
          </motion.span>
        </p>
        <p>Hi, I'm Alvis</p>
        <p>Fullstack Web Developer.</p>
        <p>based in Singapore📍</p>
      </div>
      <img src={profilePic} className='profile-img' alt='profile pic' />
      <div className='about-desc'>
        <p className='title'>About</p>
        <p className='desc'>
          <span /> A full stack web developer with more than 3 years of Test
          Analyst experience in FINTECH and 3 years of front-end web development
          experience in Insurance and Banking domain. As a Software Developer, I
          work well under pressure and have come to enjoy working in fast paced
          environment while building interactive User Interface.
        </p>
      </div>
    </div>
  );
};

export default ProfileDesc;
