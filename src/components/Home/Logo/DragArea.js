import { useRef } from "react";
import { motion } from "framer-motion";

export const DragArea = () => {
  const constraintsRef = useRef(null);

  return (
    <>
      <motion.div className="drag-area" ref={constraintsRef} />
      <motion.div drag dragConstraints={constraintsRef} />
    </>
  );
};
