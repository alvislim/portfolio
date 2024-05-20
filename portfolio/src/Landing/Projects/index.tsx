import ImageCard from "@/Landing/Projects/ImgCard";
import "./index.css";
import { projectArr } from "@/constant";
import { isMobile } from "react-device-detect";

const Projects = () => {
  return (
    <div className='project-container'>
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
              isMobile={isMobile}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
