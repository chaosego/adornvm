"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
interface Props {
  bgColor?: string;
  divStyle?: string;
}
export const Line = ({ bgColor, divStyle }: Props) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.span
      ref={ref}
      className={`mt-1 h-[2px] block ${divStyle} ${
        bgColor ? bgColor : "bg-black"
      }`}
      style={{ width: "0%" }}
      animate={isInView ? { width: "100%" } : { width: "0%" }}
      transition={{ duration: 2 }}
    />
  );
};
