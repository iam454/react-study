import React from "react";
import { motion } from "framer-motion";

export default function Keyframes() {
  return (
    <motion.div
      style={{ width: 200, height: 200, backgroundColor: "pink" }}
      animate={{
        scale: [1, 2, 2, 1, 1],
        rotate: [0, 0, 270, 270, 0],
        borderRadius: ["20%", "20%", "50%", "50%", "20%"],
      }}
    />
  );
}
