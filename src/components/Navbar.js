import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import * as styles from "./Navbar.module.css";
import { AiOutlineMenu } from "react-icons/ai";
import { CgClose } from "react-icons/cg";
import { AnimatePresence, motion, useCycle } from "framer-motion";

const itemVariants = {
  closed: {
    opacity: 0,
  },
  open: { opacity: 1 },
};

const sideVariants = {
  closed: {
    transition: {
      staggerChildren: 0.1,
      staggerDirection: -1,
    },
  },
  open: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: 1,
    },
  },
};

function Navbar() {
  const [top, setTop] = useState(true);
  const [open, cycleOpen] = useCycle(false, true);

  const links = [
    { name: "home", link: "/", id: 1 },
    { name: "about me", link: "#about", id: 2 },
    { name: "projects", link: "#projects", id: 3 },
    { name: "contact", link: "/contact", id: 6 },
    { name: "resume", link: "/resume", id: 4 },
  ];

  // detect whether user has scrolled the page down by 10px
  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  return (
    <header
      className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${
        !top && "bg-white backdrop-blur-sm shadow-lg"
      }`}
    >
      <AnimatePresence>
        {open && (
          <motion.aside
            className="w-60 h-screen bg-white fixed top-0 left-0 z-40 shadow-lg"
            initial={{ width: 0 }}
            animate={{
              width: 300,
            }}
            exit={{
              width: 0,
              transition: { delay: 0.7, duration: 0.3 },
            }}
          >
            <motion.div
              className="flex flex-col justify-start mt-20 items-center h-full"
              initial="closed"
              animate="open"
              exit="closed"
              variants={sideVariants}
            >
              {links.map(({ name, to, id }) => (
                <motion.a
                  key={id}
                  href={to}
                  whileHover={{ scale: 1.1 }}
                  variants={itemVariants}
                  className="text-2xl font-bold text-gray-800 mb-10"
                >
                  {name}
                </motion.a>
              ))}
            </motion.div>
          </motion.aside>
        )}
      </AnimatePresence>
      <div className="max-w-6xl md:max-w-7xl px-5 mx-auto sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Site branding */}
          <div className="flex-shrink-0 mr-4">
            {/* Logo */}
            <div className="block" aria-label="logo">
              <div className={styles.cubeWrapper}>
                <div className={`${styles.cube} ${styles.streakCube}`}>
                  <div
                    className={`${styles.cubeFace} ${styles.cubeFront}`}
                  ></div>
                  <div
                    className={`${styles.cubeFace} ${styles.cubeBack}`}
                  ></div>
                  <div
                    className={`${styles.cubeFace} ${styles.cubeBottom}`}
                  ></div>
                  <div className={`${styles.cubeFace} ${styles.cubeTop}`}></div>
                  <div
                    className={`${styles.cubeFace} ${styles.cubeRight}`}
                  ></div>
                  <div
                    className={`${styles.cubeFace} ${styles.cubeLeft}`}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          {/* Site navigation */}
          <nav className="flex flex-grow ">
            <ul className="lg:flex flex-grow justify-end flex-wrap items-center hidden">
              {links.map(({ name, link, id }) => (
                <li key={id} className="mx-7">
                  <Link to={link} className="scroll-smooth">
                    {name}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="https://blog.sayantanmondal.com/"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <button className="bg-blue-700 hover:bg-blue-900 text-white py-1 px-2 rounded-lg ml-2">
                    blog
                  </button>
                </a>
              </li>
            </ul>
            <div className="lg:hidden flex items-center flex-grow justify-end">
              {/* <AiOutlineMenu className="text-2xl" onClick={cycleOpen} /> */}
              {open ? (
                <CgClose className="text-2xl" onClick={() => cycleOpen()} />
              ) : (
                <AiOutlineMenu
                  className="text-2xl"
                  onClick={() => cycleOpen()}
                />
              )}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
