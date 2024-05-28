import { motion } from "framer-motion";
import "./index.css";
import { NavBarItems } from "@/constant";
import { Link } from "react-scroll";
import { useState } from "react";

type Props = {
  navBarArr: NavBarItems[];
};

const NavBar = (props: Props) => {
  const { navBarArr } = props;
  const [showSideBar, setShowSideBar] = useState<boolean>(false);

  const onClickSideBar = () => {
    setShowSideBar(!showSideBar);
  };

  const NavBar = (sideBar: boolean): JSX.Element => {
    return (
      <ul>
        <li key='download'>
          <button className='navbar-element'>Download Resume</button>
        </li>
        {navBarArr.map((item, indx) => {
          return (
            <li key={`${item}_${indx}`}>
              <Link
                className='navbar-element'
                activeClass='active'
                key={`${item}_${indx}`}
                to={item.id}
                isDynamic={true}
                spy={true}
                offset={-70}
                duration={1000}
                smooth={"easeInOutQuint"}
                onClick={sideBar ? onClickSideBar : undefined}>
                {item.title}
              </Link>
            </li>
          );
        })}
        <li key='hamburger-menu'>
          <input
            onChange={onClickSideBar}
            type='checkbox'
            id='checkbox4'
            className='checkbox4 visuallyHidden'
            checked={showSideBar}
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
    );
  };

  return (
    <>
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
        {NavBar(false)}
      </motion.nav>

      <div
        className='sidebar-container'
        style={{
          transform: showSideBar ? "translateX(0)" : "translateX(200px)",
          opacity: showSideBar ? 1 : 0,
          animationDuration: "0.4",
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}>
        {NavBar(true)}
      </div>
    </>
  );
};

export default NavBar;
