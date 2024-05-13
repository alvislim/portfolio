import { motion } from "framer-motion";
import "./index.css";
import { NavBarTitle, items } from "@/constant";
// import about from "@/assets/icon/about.svg";
// import work from "@/assets/icon/work.svg";
// import projects from "@/assets/icon/projects.svg";

type Props = {
  currViewPort?: NavBarTitle;
};

const NavBar = (props: Props) => {
  const { currViewPort } = props;

  // const getLogo = (title: string): JSX.Element => {
  //   if (title === "About") {
  //     return <img src={about} />;
  //   } else if (title === "Projects") {
  //     return <img src={projects} />;
  //   } else {
  //     return <img src={work} />;
  //   }
  // };

  return (
    <motion.div
      className='navbar-container'
      initial={{
        opacity: 0,
        y: -100,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 1,
        ease: [0.6, 0.05, 0.01, 0.9],
      }}>
      {items.map((item, indx) => {
        return (
          <motion.button
            className='navbar-element'
            key={`${item}${indx}`}
            whileHover={{
              scale: 1.1,
              color: "#e79253",
            }}
            whileTap={{ scale: 0.95 }}
            transition={{
              duration: 0,
              easings: 0.25,
            }}>
            {/* {getLogo(item)} */}
            {item}
          </motion.button>
        );
      })}
    </motion.div>
  );
};

export default NavBar;
