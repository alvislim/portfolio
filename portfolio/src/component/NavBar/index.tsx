import { motion } from "framer-motion";
import "./index.css";
import { NavBarItems } from "@/constant";
import { Link } from "react-scroll";

type Props = {
  navBarArr: NavBarItems[];
};

const NavBar = (props: Props) => {
  const { navBarArr } = props;

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
      {navBarArr.map((item, indx) => {
        return (
          <Link
            className='navbar-element'
            activeClass='active'
            to={item.id}
            isDynamic={true}
            spy={true}
            offset={-70}
            duration={1000}
            smooth={"easeInOutQuint"}
            key={`${item}_${indx}`}>
            {item.title}
          </Link>
        );
      })}
    </motion.div>
  );
};

export default NavBar;
