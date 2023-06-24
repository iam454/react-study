import React from "react";
import { motion } from "framer-motion";

export default function Scale() {
  return (
    <motion.div
      style={{ width: 100, height: 100, backgroundColor: "blue" }}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 2 }}
      transition={{ duration: 1.5 }}
    />
  );
}
