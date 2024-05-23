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
    <motion.nav
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
      <ul>
        <li>
          <Link
            className='navbar-element'
            activeClass='active'
            to={""}
            isDynamic={true}
            spy={true}
            offset={-70}
            duration={1000}
            smooth={"easeInOutQuint"}>
            Download Resume
          </Link>
        </li>
        {navBarArr.map((item, indx) => {
          return (
            <li>
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
            </li>
          );
        })}
        <li>
          <input
            type='checkbox'
            id='checkbox4'
            className='checkbox4 visuallyHidden'
          />
          <label htmlFor='checkbox4'>
            <div className='hamburger hamburger4'>
              <span className='bar bar1'></span>
              <span className='bar bar2'></span>
              <span className='bar bar3'></span>
              <span className='bar bar4'></span>
              <span className='bar bar5'></span>
            </div>
          </label>
        </li>
      </ul>
    </motion.nav>
  );
};

export default NavBar;
