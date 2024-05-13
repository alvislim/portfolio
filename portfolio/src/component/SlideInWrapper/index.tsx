import { motion } from "framer-motion";

type Props = {
  children: JSX.Element;
  axis: "x" | "y";
};
const SlideInWrapper = (props: Props) => {
  const { children, axis } = props;

  const variants =
    axis === "x"
      ? {
          hidden: { x: "-100%" },
          visible: { x: 0 },
        }
      : { hidden: { opacity: 0, y: "-100%" }, visible: { opacity: 1, y: 0 } };

  return (
    <motion.div
      variants={variants}
      initial='hidden'
      animate='visible'
      transition={{ duration: 0.5, ease: "easeIn" }}>
      {children}
    </motion.div>
  );
};

export default SlideInWrapper;
