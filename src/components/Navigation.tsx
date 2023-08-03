import Link from "next/link";
import { Inter } from "next/font/google";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const inter = Inter({ subsets: ["latin"], weight: "500" });

interface NavigationProps {
  color?: string;
}
export const Navigation = ({ color }: NavigationProps) => {
  const linea = useRef<HTMLSpanElement>(null);
  const lineInView = useInView(linea, { once: true });
  return (
    <nav
      className={`${inter.className} " mx-8 lg:mx-16 xl:mx-24 bg-transparent items-center justify-between relative z-50 py-8 "`}
    >
      <div className="flex justify-between">
        <Link href="/">
          <h3>Adrián Darío Ortiz</h3>
        </Link>
        <div className="flex gap-8">
          <Link href="/photos">
            <h3>Fotografías</h3>
          </Link>
          <Link href="/contacto">
            <h3>Contacto</h3>
          </Link>
        </div>
      </div>
      <motion.span
        ref={linea}
        className={`mt-2 h-[2px] block ${color ? color : "bg-black"}`}
        style={{ width: "0%" }}
        animate={lineInView ? { width: "100%" } : { width: "0%" }}
        transition={{ duration: 2 }}
      />
    </nav>
  );
};
