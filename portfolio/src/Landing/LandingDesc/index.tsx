import { motion } from "framer-motion";

const LandingDesc = () => {
  return (
    <div className='text-wrapper'>
      <p>
        welcome to my portfolio{" "}
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
  );
};

export default LandingDesc;
