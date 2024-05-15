import { ProfessionalExpObj } from "@/constant";
import "@/experience/index.css";
import "./index.css";
import { useInView } from "framer-motion";
import { useRef } from "react";

type Props = {
  content: ProfessionalExpObj;
  xAnimate: string;
};

const Content = (props: Props) => {
  const { content, xAnimate } = props;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <>
      <li
        ref={ref}
        style={{
          transform: isInView ? "translateX(0)" : `translateX(${xAnimate})`,
          opacity: isInView ? 1 : 0,
          animationDuration: "0.4",
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}>
        <div className='date'>{content.year}</div>
        <div className='title'>{content.title}</div>
        <div className='descr'>{content.subTitle}</div>
        <div className='descr'>
          {content.desc.map((item) => {
            return <p key={item}>{item}</p>;
          })}
        </div>
      </li>
    </>
  );
};

export default Content;
