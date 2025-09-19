/*
  Wrapper component responsible for "float in" animations on components as they enter the viewport
*/
import { motion } from "motion/react";
import type { ReactNode } from "react";

interface FloatInProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export default function FloatIn({
  children,
  delay = 0,
  className = "",
}: FloatInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, marginTop: "15px" }}
      whileInView={{ opacity: 1, marginTop: "0px" }}
      viewport={{ once: true }}
      transition={{ duration: 0.25, delay: delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
