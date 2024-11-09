import React from "react";
import { motion } from "framer-motion";

interface LoaderProps {
  size?: string;
  color?: string;
}

const Loader: React.FC<LoaderProps> = ({
  size = "h-12 w-12",
  color = "border-blue-500",
}) => (
  <div className="flex items-center justify-center">
    <motion.div
      className={`rounded-full border-l-4 border-t-4 ${size} ${color}`}
      style={{ borderTopColor: "transparent" }}
      animate={{ rotate: 360 }}
      transition={{
        repeat: Infinity,
        duration: 1,
        ease: "linear",
      }}
    />
  </div>
);

export default Loader;
