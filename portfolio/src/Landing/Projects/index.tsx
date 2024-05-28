import ImageCard from "@/Landing/Projects/ImgCard";
import "./index.css";
import { projectArr } from "@/constant";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      className='project-container'
      ref={ref}
      style={{
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.4s",
      }}>
      <p className='title'>Recent projects</p>
      <div className='project-wrapper'>
        {projectArr.map((project) => {
          return (
            <ImageCard
              img={project.img}
              desc={project.desc}
              key={project.desc}
              githubFE={project.githubFE}
              githubBE={project.githubBE}
              demo={project.demo}
            />
          );
        })}
      </div>
    </motion.div>
  );
};

export default Projects;
