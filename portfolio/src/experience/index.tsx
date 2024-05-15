import "./index.css";
import { professionalExperience } from "@/constant";
import Content from "@/experience/Content";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className='experience-container'>
      <p
        ref={ref}
        style={{
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.4s",
        }}>
        Professional Experience
      </p>
      <ul
        ref={ref}
        style={{
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.4s",
        }}>
        <Content content={professionalExperience[0]} xAnimate={"-200px"} />
        <Content content={professionalExperience[1]} xAnimate={"200px"} />
        <Content content={professionalExperience[2]} xAnimate={"-200px"} />
      </ul>
    </div>
  );
};

export default Experience;
